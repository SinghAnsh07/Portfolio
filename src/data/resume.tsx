import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import DotGrid from "@/components/magicui/DotGrid";
import { FileText } from "lucide-react"

export const DATA = {
  
  name: "Ansh Singh",
  initials: "AS",
  url: "https://wound.lol/varakros",
  location: "Varanasi, UP, India",
  description:
    "CS Undergrad turned Developer. Passionate about Web Development and DSA. Love building cool stuff and helping others. Active on Discord, exploring tech every day.",
  summary:
    "As a current Computer Science undergrad, I’m deeply focused on building impactful software and growing as a developer. I’ve tackled hundreds of DSA problems on [LeetCode](https://leetcode.com/u/zenansh/), earned a 3⭐ rating on [CodeChef](https://www.codechef.com/users/singhansh07), and showcased my work and journey on [Codolio](https://codolio.com/profile/varakros). I'm passionate about Web Development and love solving real-world problems through code.",
  avatarUrl: "/me.png",
  skills: [
    "tailwind CSS",
    "React",
    "Javascript",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "R",
    "Postman",
    "git",
    "github",
    "figma",
    "machine Learning",
    "Docker",
    "Kubernetes",
    "jenkins",
    "C",
    "Java",
    "C++",
    "Python",
    "ReactBits"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    
  ],
  contact: {
    email: "snghansh07@gmail.com",
    tel: "+918840916738",
    social: {
      
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SinghAnsh07",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anshsingh07/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "Insta",
        url: "https://x.com/mr_miller07",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@varakros",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#snghansh07@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "",
      href: "",
      badges: [],
      location: "",
      title: "",
      logoUrl: "",
      start: "",
      end: "",
      description:
        "",
    },
  ],
  education: [
    {
      school: "Vellore Institute of Technology, Chennai",
      href: "https://chennai.vit.ac.in/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/college.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Udai Pratap Public School",
      href: "https://upps.in",
      degree: "Senior Secondary (Class 11–12) – Science Stream",
      logoUrl: "/upps.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Udai Pratap Public School",
      href: "https://upps.in",
      degree: "Secondary Education (Class 9–10)",
      logoUrl: "/upps.png",
      start: "2018",
      end: "2020",
    },

  ],
  projects: [
    {
      title: "StudyNotion",
      href: "https://study-notion-ansh-singh.vercel.app/",
      dates: "May 2025 - July 2025",
      active: true,
      description:
        "StudyNotion is a fully functional ed-tech platform built for modern learners and educators. It supports course creation, video content hosting, secure authentication, and integrated payments — providing a seamless end-to-end learning and teaching experience.",
      technologies: [
        "React",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Shadcn UI",
        "Mongoose",
        "Cloudinary",
        "Stripe",
        "JWT Auth",
        "Bycript.js",
        "Nodemailer"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SinghAnsh07/StudyNotion-AnshSingh",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/studynotion.png",
      video:
        "",
    },
    {
      title: "Medi Connect",
      href: "https://github.com/SinghAnsh07/medi-connect",
      dates: "June 2025 - Ongoing",
      active: true,
      description:
        "MediConnect redefines digital healthcare by bridging the gap between patients and medical professionals through a smart, telemedicine-first approach. With a focus on reducing in-person hospital visits and long waiting lines, it enables remote consultations, appointment bookings, and streamlined in-hospital workflows.",
      technologies: [
        "Tailwind CSS",
        "React.js (Vite)",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Mongoose",
        "GSAP & Three.js",
        "Nodemailer",
        "Hugging face api",
        "Cloudinary",
        "JWT Authentication",
        "Bcrypt.js",
        "Socket.IO"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SinghAnsh07/medi-connect",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mediconnect.png",
      video:
        "",
    },
    {
      title: "MetaVote",
      href: "https://meta-vote-anshsingh.vercel.app/",
      dates: "feb 2025 - April 2025",
      active: true,
      description:
        "MetaVote is a blockchain-based voting platform that uses smart contracts and MetaMask integration to enable secure, transparent, and decentralized elections.",
      technologies: [
        "Solidity",
        "Hardhat",
        "React.js",
        "Ethers.js",
        "TailwindCSS",
        "MetaMask",
        "Smart Contracts",
      ],
      links: [
        {
          type: "Website",
          href: "https://meta-vote-anshsingh.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/SinghAnsh07/MetaVote",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/metamask.png",
      video:
        "",
    },
  ],
  miniprojects: [
    {
      title: "SwiftShop",
      dates: "Developed as part of a Web Programming course project.",
      location: "chennai, India",
      description:
        " An EdTech platform that enables users to create, manage, and access online courses with authentication, payments, and video content integration.--->Tools Used: HTML, CSS, JavaScript, Vite.js",
      image:
        "/swiftshop.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://swiftshop-ansh-singh.vercel.app/",
        }
      ],
    },
    {
      title: "weather app",
      dates: "Developed to enhance my skills in JavaScript and React.",
      location: "chennai, India",
      description:
        "  ◦ An application to fetch and display weather data for any location using APIs.,---> Tools Used: JavaScript, CSS, Html",
      image:
        "/weather.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://weather-app-anshsingh.vercel.app/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/SinghAnsh07/weather_app",
        },
        
      ],
    },
    {
      title: "Tic Tac Toe",
      dates: "developed to learn the DOM manipulation",
      location: "Chennai, India",
      description:
        "◦ A web-based interactive Tic Tac Toe game for two players with win/draw logic and a clean UI. ---> Tools Used: JavaScript, CSS, HTML",
      image: "/tictactoe.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://tic-tac-toe-ansh-singh.vercel.app/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/SinghAnsh07/tic-tac-toe",
        },
      ],
    },
    {
      title: "Calculator App",
      dates: "Developed to improve my skills in JavaScript",
      location: "Chennai, India",
      description:
        "◦ A responsive calculator web application capable of performing basic arithmetic operations with real-time result updates. ---> Tools Used: JavaScript, CSS, HTML",
      image: "/calculator.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://calculator-anshsingh.vercel.app/",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/SinghAnsh07/calculator-app",
        },
      ],
    }


    
  ],
  certifications: [
    {
      title: "DevOps Fundamentals",
      issuer: "IBM",
      date: "July 2025",
      image: "/certifications/DevOps Fundamentals.png",
    },
    {
      title: "DevOps,Agile and Design Thinking",
      issuer: "IBM",
      date: "July 2025",
      image: "/certifications/DevOps, Agile and Design Thinking.png",
    },
    {
      title: "Structured Query Language",
      issuer: "University of Colorado Boulder",
      date: "feb 2025",
      image: "/certifications/SQL.png",
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions",
      issuer: "Google",
      date: "feb 2025",
      image: "/certifications/data driven decisions.png",
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Google",
      date: "feb 2025",
      image: "/certifications/data, data everywhere.png",
    },
    {
      title: "Javascript Basic",
      issuer: "GeekforGeeks",
      date: "April 2025",
      image: "/certifications/javascript.png",
    },
    {
      title: "Full stack web development",
      issuer: "GeekforGeeks",
      date: "June 2025",
      image: "/certifications/web dev.png",
    },
    {
      title: "Postman APIs",
      issuer: "Postman",
      date: "June 2025",
      image: "/certifications/postmanapi.png",
    },
  ],


} as const;
