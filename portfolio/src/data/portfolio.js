export const personal = {
  name: "Mohammed Amer",
  title: "Full-Stack Developer",
  tagline: "Building intelligent, real-time web applications that scale.",
  bio: "I'm a Full-Stack Developer based in Pune, India, specializing in the MERN ecosystem with a strong focus on AI-powered systems, real-time architectures, and production-grade deployments. I thrive on turning complex challenges into clean, performant solutions — from zero to shipped.",
  email: "skamir2410@gmail.com",
  phone: "+91 9604862410",
  location: "Pune, India",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  portfolio: "https://my-portfolio-eight-theta-75.vercel.app",
};

export const skills = {
  "Core Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "PHP"],
  "Frontend": ["React.js", "Tailwind CSS", "Shadcn/ui", "Bootstrap", "HTML5", "CSS3"],
  "Backend": ["Node.js", "Express.js", "REST APIs", "Socket.io", "Firebase"],
  "Databases": ["MongoDB", "MySQL", "Atlas MongoDB"],
  "Cloud & DevOps": ["Docker", "CI/CD Pipelines", "Render", "Vercel", "Cloudinary", "Firebase Cloud Messaging"],
  "APIs & Integrations": ["Google Gemini AI", "Clerk Auth", "Resend API", "Google Cloud APIs"],
  "Tools": ["Git", "GitHub", "Vite", "Postman", "VS Code"],
};

export const projects = [
  {
    title: "DisasterWatch",
    subtitle: "AI-Powered Real-Time Disaster Alert System",
    year: "2025",
    description:
      "A production-grade full-stack platform that aggregates, verifies, and broadcasts disaster alerts in real time. Crowdsourced reports are automatically validated against official government sources (NDMA, News) using Google Gemini's multimodal AI — ensuring only credible, time-sensitive alerts reach users.",
    highlights: [
      "AI verification pipeline using Google Gemini for text & image analysis",
      "5km proximity-based push alerts via Firebase Cloud Messaging",
      "Bidirectional data consistency: cascading deletes across DB + Cloudinary on admin action",
      "Real-time pub/sub communication with Socket.io",
      "Secure auth with Clerk; automated email notifications via Resend API",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Google Gemini", "Socket.io", "Clerk", "Cloudinary", "Firebase", "Tailwind CSS", "Shadcn/ui"],
    live: "https://disasterwatch-alpha.vercel.app",
    github: null,
    featured: true,
    color: "#C8A96E",
  },
  {
    title: "Personal Portfolio",
    subtitle: "Responsive Developer Portfolio",
    year: "2025",
    description:
      "A fully responsive portfolio website with a custom Node.js backend powering an email inquiry system. Showcases projects, skills, and experience with clean UI and smooth interactions.",
    highlights: [
      "Node.js + MongoDB backend for contact form with email delivery",
      "Fully responsive across all devices",
      "Optimized performance with Vite bundler",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "JavaScript", "CSS"],
    live: "https://my-portfolio-eight-theta-75.vercel.app",
    github: null,
    featured: false,
    color: "#8B9FE8",
  },
  {
    title: "GYM Management System",
    subtitle: "Full-Stack Membership & Payments Platform",
    year: "2024",
    description:
      "A comprehensive gym management application handling member registration, subscription tracking, and payment processing. Features a secure admin dashboard with role-based access control for complete system oversight.",
    highlights: [
      "Secure user authentication with session management",
      "Admin dashboard with membership lifecycle management",
      "Payment tracking and automated membership expiry alerts",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    live: null,
    github: null,
    featured: false,
    color: "#6EBF8B",
  },
];

export const experience = [
  {
    role: "Software Engineer Intern — Full-Stack (MERN)",
    company: "Scaleful Technology",
    location: "Pune, India",
    period: "Jan 2025 – Apr 2025",
    description:
      "Contributed to real-world product development across the full stack. Gained hands-on experience building UI-first features with React, designing RESTful APIs, and collaborating in an agile team environment.",
    achievements: [
      "Engineered multiple full-stack mini-projects including a production-style bakery platform clone using semantic HTML and CSS",
      "Architected and built a responsive House Booking UI from scratch using React and Bootstrap — first exposure to component-driven frontend development",
      "Completed intensive JavaScript deep-dives covering closures, async/await, prototypal inheritance, and algorithmic problem-solving",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Science",
    institution: "Savitribai Phule Pune University",
    period: "2024 – 2026 (Pursuing)",
    status: "In Progress",
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Savitribai Phule Pune University",
    period: "2021 – 2024",
    status: "Completed",
  },
];
