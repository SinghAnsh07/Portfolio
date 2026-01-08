import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileText, IdCard } from "lucide-react";
import DotGrid from "@/components/magicui/DotGrid";

export const DATA = {
  
  name: "Ansh Singh",
  initials: "AS",
  url: "https://portfolio-ansh-singh.vercel.app/",
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
    "Docker",
    "Kubernetes",
    "jenkins",
    "C",
    "Java",
    "C++",
    "Python",
    "ReactBits",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "TensorFlow (Basic)",
    "OpenCV",
    "CNNs"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/CV.pdf", icon: FileText, label: "Resume", external: true },
    { href: "/ansh_DS.pdf", icon: FileText, label: "Data science resume", external: true }
    
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
      
      Insta: {
      name: "Insta",
      url: "https://www.instagram.com/theblueopium",
      icon: Icons.insta,
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
      href: "https://github.com/SinghAnsh07/StudyNotion-AnshSingh",
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
      title: "Crop Disease Prediction",
      dates: "Sep 2025",
      location: "Deep Learning · Computer Vision",
      description:
        "Designed a high-accuracy deep learning system to detect crop diseases across multiple plant species using custom CNN architectures and ResNet-50 transfer learning. Implemented data augmentation techniques such as rotation, flipping, and scaling to improve generalization and reduce bias, achieving 96% accuracy with an 8% performance gain over the baseline CNN model.",
      technologies: [
        "Python",
        "TensorFlow",
        "CNN",
        "ResNet-50",
        "Data Augmentation",
        "Matplotlib",
      ],
      links: [
        {
          type:"Source",
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/SinghAnsh07/plant-disease-prediction",
        }
      ],
      image: "/crop-disease.png",
    },
    {
      title: "Breast Cancer Histopathology Classification",
      dates: "july 2025",
      location: "Deep Learning · Computer Vision · Medical AI",
      description:
        "Developed a high-accuracy medical image classification system using Vision Transformer (ViT-Small) models to distinguish benign and malignant breast cancer histopathology images from the BreaKHis dataset. Trained independent models across four magnification levels (40X, 100X, 200X, 400X), incorporating data augmentation and cosine learning rate scheduling. Achieved an average accuracy of 99.24%, demonstrating strong robustness across varying microscopic resolutions.",
      technologies: [
        "Python",
        "PyTorch",
        "Vision Transformer (ViT)",
        "Computer Vision",
        "Transfer Learning",
        "Data Augmentation",
        "CUDA",
        "Google Colab",
      ],
      links: [
        {
          type: "Source",
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/SinghAnsh07/Breast-Cancer-Histopathology-Classification",
        }
      ],
      image: "/breast-cancer.png",
    }
  ],




  certifications: [
    {
      title: "DevOps Fundamentals",
      issuer: "IBM",
      date: "July 2025",
      image: "/certifications/DevOps Fundamentals.png",
      link:"https://courses.vit.skillsnetwork.site/certificates/0227ea759b8a4a0eacdb300371cf4d9b"
    },
    {
      title: "DevOps,Agile and Design Thinking",
      issuer: "IBM",
      date: "July 2025",
      image: "/certifications/DevOps, Agile and Design Thinking.png",
      link:"https://courses.vit.skillsnetwork.site/certificates/b739a377a46e4400a3275db95a444221"
    },
    {
      title: "Structured Query Language",
      issuer: "University of Colorado Boulder",
      date: "feb 2025",
      image: "/certifications/SQL.png",
      link:"https://www.coursera.org/account/accomplishments/verify/59XVNT98H9ZV"
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions",
      issuer: "Google",
      date: "feb 2025",
      image: "/certifications/data driven decisions.png",
      link:"https://www.coursera.org/account/accomplishments/verify/4429I3GTADUY"
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      issuer: "Google",
      date: "feb 2025",
      image: "/certifications/data, data everywhere.png",
      link:"https://www.coursera.org/account/accomplishments/verify/MI245LCG822H"
    },
    {
      title: "Javascript Basic",
      issuer: "GeekforGeeks",
      date: "April 2025",
      image: "/certifications/javascript.png",
      link:"https://www.hackerrank.com/certificates/98ae8b2bea20"
    },
    {
      title: "Full stack web development",
      issuer: "GeekforGeeks",
      date: "June 2025",
      image: "/certifications/web dev.png",
      link:""
    },
    {
      title: "Postman APIs",
      issuer: "Postman",
      date: "June 2025",
      image: "/certifications/postmanapi.png",
      link:"https://badges.parchment.com/public/assertions/h2axzz0JSnaaPSOYAglYlQ?identity__email=snghansh07@gmail.com"
    },
  ],


} as const;
