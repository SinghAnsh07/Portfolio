import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      return NextResponse.json({ count: 0 });
    }
    const count = await kv.get<number>("portfolio_views") || 0;
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error fetching views from Vercel KV:", error);
    return NextResponse.json({ count: 0, error: "KV not configured or connected" });
  }
}

export async function POST() {
  try {
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      return NextResponse.json({ count: 0 });
    }
    // Skip incrementing in local development to avoid inflating stats
    if (process.env.NODE_ENV === "development") {
      const count = await kv.get<number>("portfolio_views") || 0;
      return NextResponse.json({ count });
    }
    const count = await kv.incr("portfolio_views");
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error incrementing views in Vercel KV:", error);
    return NextResponse.json({ count: 0, error: "KV not configured or connected" });
  }
}
