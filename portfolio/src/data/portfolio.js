export const personal = {
  name: "Mohammed Amer",
  title: "Full Stack Software Engineer",
  tagline: "Engineering production-ready full-stack systems and restoring broken enterprise applications with zero-fault reliability.",
  bio: "I am a Software Engineer with 1+ years of hands-on experience in full-stack web development debugging, and deploying production-grade applications. Skilled in building secure REST APIs, authentication systems, real- time applications and scalable database solutions using React, Node.js, Express.js, TypeScript, PostgreSQL, and MongoDB. Passionate about clean architecture, application security and delivering reliable software solutions.",
  email: "skamir2410@gmail.com",
  phone: "+91 9604862410",
  location: "Pune, India",
  github: "https://github.com/Amir-Shaikh236",
  linkedin: "https://www.linkedin.com/in/amir-shaikh2410",
  portfolio: "https://www.mohammed-amer.me",
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
    "Shadcn/ui",
    "Bootstrap",
    "Context API",
    "ZUSTAND",
    "Zod",
    "Axios",
    "React Router",
  ],

  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Auth",
    "REDIS",
    "Nodemailer",
    "Socket.io",
    "Razorpay",
    "bcrypt",
    "cookie-Parser",
    "CORS"
  ],

  Databases: [
    "MongoDB",
    "Mongoose",
    "MySQL (Sequelize ORM)",
    "PostgreSQL (Sequelize & Drizzle ORM)",
  ],

  Cloud_DevOps: [
    "GitHub",
    "GitHub Actions",
    "Docker",
    "CI/CD",
    "Google Cloud Platform (GCP)",
    "Azure",
    "Vercel",
    "Render"
  ],

  Testing: [
    "React Testing Library",
    "Vitest",
    "Supertest",
    "PlayWright",
    "Postman"
  ],

  Tools: [
    "Google Gemini API",
    "Claude AI",
    "Firebase Cloud Messaging (FCM)",
    "Cloudinary",
    "Resend API",
    "Clerk Auth",
  ],
};

export const projects = [
  {
    title: "DisasterWatch",
    subtitle: "AI-Powered Real-Time Disaster Alert System",
    year: "2026",
    description: "A full-stack disaster reporting and alert platform that verifies crowdsourced reports with AI before they reach the public, combines them with live government disaster feeds, and delivers real-time, geo-targeted crisis alerts across the app and social media.",
    highlights: [
      "AI verification pipeline powered by Google Gemini validates every crowdsourced report before an alert is created, filtering out unverified or false submissions.",
      "Real-time bidirectional alerts and live UI updates via Socket.io, with no page refresh required.",
      "Geo-targeted push notifications via Firebase Cloud Messaging, alerting users within a 5km radius of a verified incident.",
      "Custom JWT authentication with short-lived access tokens (15-min expiry) and automatic refresh-token rotation, backing full role-based access control (User/Admin).",
      "Automated ingestion pipeline that polls India's official NDMA/SACHET disaster feed via a cron-triggered BullMQ queue, then auto-publishes AI-generated alert content to Facebook and Instagram via the Meta Graph API.",
      "AI-generated alert imagery via Cloudflare Workers AI (Stable Diffusion), paired with Gemini-written captions for social posts.",
      "Cascading data-integrity logic — deleting a report or alert automatically cleans up all linked records, including Cloudinary-hosted images.",
      "Redis caching layer alongside Zustand and Context API to minimize redundant database queries and keep the app responsive.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Google Gemini API", "Socket.io", "JWT", "Firebase Cloud Messaging", "Meta Graph API", "Cloudflare Workers AI", "Cloudinary", "Redis", "BullMQ", "Zustand", "Docker", "Azure Container Apps"],
    live: "https://www.disasterwatch.tech",
    github: "https://github.com/Amir-Shaikh236/DisasterWatch.git",
    featured: true,
    color: "#C8A96E",
  },

  {
    title: "InfoFin Platform",
    subtitle: "Enterprise Fintech Platform Rebuild",
    year: "2025 – 2026",
    description: "An end-to-end rebuild and production migration of a broken enterprise fintech platform. Restored critical components including authentication systems, API routing structures, and full database schemas into a highly optimized structure.",
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
    title: "Innovative Staffing Website",
    subtitle: "Corporate Platform & Role-Based CMS",
    year: "2024",
    description: "A secure, live corporate website featuring an extensive content management system, custom-tailored administrative tools, and production-ready security layers.",
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
    featured: true,
    color: "#4A90E2",
  },

  {
    title: "GYM Management System",
    subtitle: "Full-Stack Membership & Payments Platform",
    year: "2024",
    description: "A full-stack web application designed for fitness facilities to smoothly manage gym memberships, subscriber profiles, financial payments, and administrator controls.",
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
    period: "July 2026 – Present",
    duration: "4 months",
    description: "Spearheaded the end-to-end rebuild and production migration of a broken enterprise fintech platform, fixing critical authentication, API routing, and database schema issues.",
    achievements: [
      "Rebuilt a broken enterprise fintech app using React, TypeScript, Node.js, and PostgreSQL, restoring critical auth, routing, and DB configurations. [cite: 23]",
      "Migrated the application into a production-ready monorepo, implementing shared Zod schemas across the frontend and backend for strict end-to-end type safety. [cite: 24]",
      "Configured a Vite reverse proxy to eliminate 404 API errors and restored admin access by reverse-engineering SHA-256+salt hashing and re-seeding via Drizzle ORM. [cite: 25, 26]",
      "Resolved browser-crashing HTML nesting bugs, significantly improving page stability and Lighthouse performance scores. [cite: 27]",
    ],
  },
  {
    role: "Full-Stack MERN Developer (Intern)",
    company: "Innovative Staffing Solution",
    location: "Pune, India",
    period: "Jan 2026 – June 2026",
    duration: "6 months",
    description: "Designed and deployed a secure, full-stack company website featuring a comprehensive content management system, role-based dashboards, and robust authentication middleware.",
    achievements: [
      "Built a secure JWT authentication system utilizing HTTP-only cookies and email verification links to eliminate XSS vulnerabilities. [cite: 30]",
      "Delivered a full Admin Dashboard with CMS features including categories, subpages, a blog engine, role-based user management, and a multi-theme switcher. [cite: 31]",
      "Fixed Nodemailer SMTP integration to ensure 100% reliable contact form delivery. [cite: 32]",
      "Audited all Express.js routes to resolve broken middleware and inject missing authentication guards. [cite: 33]",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Scaleful Technology",
    location: "Pune, India",
    period: "Jan 2025 – Apr 2025",
    duration: "4 months", // January 2025 to April 2025 inclusive 
    description: "Gained hands-on experience building UI-first features and core full-stack mini-projects, strengthening JavaScript fundamentals and algorithmic problem-solving skills.",
    achievements: [
      "Built full-stack mini-projects and a responsive house booking platform frontend using React.js and Bootstrap. [cite: 36]",
      "Deepened core JavaScript knowledge and problem-solving skills through intensive technical deep-dives. [cite: 37]",
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


