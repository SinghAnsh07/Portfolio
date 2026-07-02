import { NextResponse } from 'next/server';

interface JogruberDay {
  date: string;
  count: number;
  level: number;
}

interface JogruberResponse {
  total: { [year: string]: number };
  contributions: JogruberDay[];
}

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    const token = process.env.GITHUB_TOKEN || "";

    // If GITHUB_TOKEN is missing, fallback to public tokenless API
    if (!token) {
      console.warn("GITHUB_TOKEN missing. Falling back to public GitHub contributions API.");
      try {
        const username = "SinghAnsh07";
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}`);
        if (!res.ok) throw new Error("Failed to fetch public contributions API");
        const data: JogruberResponse = await res.json();
        
        const contributions = data.contributions;
        if (!contributions || contributions.length === 0) {
          throw new Error("No contributions found in public API");
        }

        // Sum contributions for the last 365 days of actual data
        const recentContributions = contributions.slice(-365);
        const totalContributions = recentContributions.reduce((sum, d) => sum + d.count, 0);

        const days = [...contributions];
        
        const parseUTCDate = (dateStr: string) => {
          const [year, month, day] = dateStr.split('-').map(Number);
          return new Date(Date.UTC(year, month - 1, day));
        };

        // Align start to Sunday
        const firstDate = parseUTCDate(days[0].date);
        const startDay = firstDate.getUTCDay();
        if (startDay !== 0) {
          for (let i = startDay - 1; i >= 0; i--) {
            const prevDate = new Date(firstDate);
            prevDate.setUTCDate(firstDate.getUTCDate() - (startDay - i));
            days.unshift({
              date: prevDate.toISOString().split('T')[0],
              count: 0,
              level: 0
            });
          }
        }

        // Align end to Saturday
        const lastDate = parseUTCDate(days[days.length - 1].date);
        const endDay = lastDate.getUTCDay();
        if (endDay !== 6) {
          for (let i = endDay + 1; i <= 6; i++) {
            const nextDate = new Date(lastDate);
            nextDate.setUTCDate(lastDate.getUTCDate() + (i - endDay));
            days.push({
              date: nextDate.toISOString().split('T')[0],
              count: 0,
              level: 0
            });
          }
        }

        // Limit to exactly the last 53 weeks (53 * 7 = 371 days)
        // Since we aligned the end to a Saturday, taking the last 371 days guarantees the start is a Sunday.
        const finalDays = days.slice(-371);

        // Chunk into weeks (exactly 53 weeks)
        const weeks = [];
        for (let i = 0; i < finalDays.length; i += 7) {
          const weekDays = finalDays.slice(i, i + 7).map(d => ({
            contributionCount: d.count,
            date: d.date
          }));
          weeks.push({ contributionDays: weekDays });
        }

        // Extract month names
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const months: { name: string }[] = [];
        let lastMonth = -1;

        for (const day of finalDays) {
          const dateObj = parseUTCDate(day.date);
          const monthIndex = dateObj.getUTCMonth();
          if (monthIndex !== lastMonth) {
            months.push({ name: monthNames[monthIndex] });
            lastMonth = monthIndex;
          }
        }

        const graphqlResponse = {
          data: {
            user: {
              contributionsCollection: {
                contributionCalendar: {
                  totalContributions,
                  months,
                  weeks
                }
              }
            }
          }
        };

        return NextResponse.json(graphqlResponse);
      } catch (err) {
        console.error("Public GitHub API fallback failed:", err);
        return NextResponse.json({ error: "Failed to fetch public contributions fallback" }, { status: 500 });
      }
    }

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("GitHub API Proxy Error:", error);
    return NextResponse.json({ error: "Failed to fetch from GitHub" }, { status: 500 });
  }
}
