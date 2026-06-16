export const personal = {
  name: "Mohammed Amer",
  title: "Full-Stack Developer (MERN / TypeScript)",
  tagline: "Engineering production-ready full-stack systems and restoring broken enterprise applications with zero-fault reliability.",
  bio: "I am a Full-Stack Developer specializing in the MERN stack with 2+ years of comprehensive software development experience across multiple production platforms. Proven track record in rebuilding broken enterprise fintech systems, designing secure role-based content management platforms, and deploying intelligent AI-powered solutions. Expert at end-to-end delivery, database schema migrations, and resolving complex architectural failures to ship fast, resilient web applications.",
  email: "skamir2410@gmail.com",
  phone: "+91 9604862410",
  location: "Pune, India",
  github: "https://github.com/Amir-Shaikh236",
  linkedin: "https://linkedin.com",
  portfolio: "https://my-portfolio-five-chi-72.vercel.app",
};

export const skills = {
  Languages: [
    "JavaScript (ES6+)",
    "TypeScript",
    "Python",
    "PHP",
    "HTML5",
    "CSS3",
  ],
  Frontend: [
    "React.js",
    "Tailwind CSS",
    "Bootstrap",
    "Shadcn/ui",
    "Vite",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Auth",
    "Nodemailer",
    "Socket.io",
  ],
  Databases: [
    "MongoDB",
    "PostgreSQL (Drizzle ORM)",
    "MySQL",
  ],
  Tools: [
    "Git",
    "GitHub",
    "Docker",
    "CI/CD",
    "Zod",
    "Clerk Auth",
    "Google Cloud",
    "Cloudinary",
    "Resend API",
    "Google Gemini",
    "Claude",
  ],
};

export const projects = [
  {
    title: "InfoFin Platform",
    subtitle: "Enterprise Fintech Platform Rebuild",
    year: "2025 – 2026",
    description:
      "An end-to-end rebuild and production migration of a broken enterprise fintech platform. Restored critical components including authentication systems, API routing structures, and full database schemas into a highly optimized structure.",
    highlights: [
      "Migrated the monolithic application into a production-ready monorepo configuration.",
      "Structured shared Zod schemas across frontend and backend for strict end-to-end type safety.",
      "Configured a Vite reverse proxy that completely eliminated 404 API routing errors.",
      "Restored broken admin access by reverse-engineering SHA-256+salt hashing and re-seeding via Drizzle ORM.",
      "Resolved browser-crashing HTML nesting bugs to boost page stability and Lighthouse performance.",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "Vite", "Zod"],
    live: "https://infofinsolutions.com",
    github: "https://github.com/Amir-Shaikh236/Infofin_Solution.git",
    featured: true,
    color: "#8B9FE8",
  },
  {
    title: "DisasterWatch",
    subtitle: "AI-Powered Real-Time Disaster Alert System",
    year: "2025",
    description:
      "An AI platform designed to aggregate and verify crowdsourced disaster reports using advanced multimodal AI, ensuring rapid and credible real-time crisis communication to affected regions.",
    highlights: [
      "AI verification pipeline powered by Google Gemini to analyze and validate incoming crowdsourced data.",
      "Real-time bidirectional communication and instant push alerts implemented via Socket.io.",
      "Robust geolocation tracking and mapping capabilities utilizing Google Cloud services.",
      "Secure user authentication managed seamlessly through Clerk Auth.",
      "Automated critical email alert deliveries managed reliably via the Resend API.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Google Gemini", "Socket.io", "Clerk Auth", "Google Cloud", "Resend API"],
    live: "https://disasterwatch-alpha.vercel.app",
    github: "https://github.com/Amir-Shaikh236",
    featured: true,
    color: "#C8A96E",
  },
  {
    title: "Innovative Staffing Website",
    subtitle: "Corporate Platform & Role-Based CMS",
    year: "2024",
    description:
      "A secure, live corporate website featuring an extensive content management system, custom-tailored administrative tools, and production-ready security layers.",
    highlights: [
      "Delivered a full Admin Dashboard with CMS powering categories, subpages, and a robust blog engine.",
      "Built a secure JWT authentication system stored safely in HTTP-only cookies alongside email verification links to eliminate XSS vulnerabilities.",
      "Audited all Express.js backend routes to fix broken middleware and missing authentication guards.",
      "Fixed Nodemailer SMTP configurations to establish 100% reliable contact form email delivery.",
      "Implemented a system-wide UI theme engine backing Light, Dark, and Auto theme switching.",
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer"],
    live: "https://innovativestaffing.info",
    github: "https://github.com/Amir-Shaikh236",
    featured: false,
    color: "#4A90E2",
  },
  {
    title: "GYM Management System",
    subtitle: "Full-Stack Membership & Payments Platform",
    year: "2024",
    description:
      "A full-stack web application designed for fitness facilities to smoothly manage gym memberships, subscriber profiles, financial payments, and administrator controls.",
    highlights: [
      "Secure session-based administrative dashboard authentication framework.",
      "Centralized panel for processing and monitoring gym memberships and member lifecycles.",
      "Backend ledger for logging payments and user tracking history.",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    live: null,
    github: "https://github.com/Amir-Shaikh236",
    featured: false,
    color: "#6EBF8B",
  },
];

export const experience = [
  {
    role: "Software Engineer - Full Stack",
    company: "InfoFin Solutions LLP",
    location: "Pune, India",
    period: "May 2025 – Jun 2026",
    duration: "14 months", // May 2025 to June 2026 inclusive 
    description:
      "Spearheaded the end-to-end rebuild and production migration of a broken enterprise fintech platform, fixing critical authentication, API routing, and database schema issues.",
    achievements: [
      "Rebuilt a broken enterprise fintech app using React, TypeScript, Node.js, and PostgreSQL, restoring critical auth, routing, and DB configurations. [cite: 23]",
      "Migrated the application into a production-ready monorepo, implementing shared Zod schemas across the frontend and backend for strict end-to-end type safety. [cite: 24]",
      "Configured a Vite reverse proxy to eliminate 404 API errors and restored admin access by reverse-engineering SHA-256+salt hashing and re-seeding via Drizzle ORM. [cite: 25, 26]",
      "Resolved browser-crashing HTML nesting bugs, significantly improving page stability and Lighthouse performance scores. [cite: 27]",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "Scaleful Technology",
    location: "Pune, India",
    period: "Jan 2025 – Apr 2025",
    duration: "4 months", // January 2025 to April 2025 inclusive 
    description:
      "Gained hands-on experience building UI-first features and core full-stack mini-projects, strengthening JavaScript fundamentals and algorithmic problem-solving skills.",
    achievements: [
      "Built full-stack mini-projects and a responsive house booking platform frontend using React.js and Bootstrap. [cite: 36]",
      "Deepened core JavaScript knowledge and problem-solving skills through intensive technical deep-dives. [cite: 37]",
    ],
  },
  {
    role: "Full-Stack MERN Developer (Intern)",
    company: "Innovative Staffing Solution",
    location: "Pune, India",
    period: "Jun 2024 – Dec 2024",
    duration: "7 months", // June 2024 to December 2024 inclusive [cite: 28, 29]
    description:
      "Designed and deployed a secure, full-stack company website featuring a comprehensive content management system, role-based dashboards, and robust authentication middleware.",
    achievements: [
      "Built a secure JWT authentication system utilizing HTTP-only cookies and email verification links to eliminate XSS vulnerabilities. [cite: 30]",
      "Delivered a full Admin Dashboard with CMS features including categories, subpages, a blog engine, role-based user management, and a multi-theme switcher. [cite: 31]",
      "Fixed Nodemailer SMTP integration to ensure 100% reliable contact form delivery. [cite: 32]",
      "Audited all Express.js routes to resolve broken middleware and inject missing authentication guards. [cite: 33]",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Science",
    institution: "Savitribai Phule Pune University",
    period: "2024 – 2026",
    status: "Completed",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Savitribai Phule Pune University",
    period: "2021 – 2024",
    status: "Completed",
  },
];
