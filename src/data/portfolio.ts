export const personalInfo = {
  name: "Shayan Shakeel",
  title: "Dev Marketer & SEO Manager & AI Integrator",
  tagline: "I bridge product engineering, growth marketing, and artificial intelligence to build digital experiences that rank, convert, and scale.",
  email: "shayanshakeel801@gmail.com",
  location: "Pakistan",
  social: {
    github: "https://github.com/shayan-234",
  },
  about: [
    "As a self-taught developer from Pakistan who is passionate about technology, web development, digital marketing, and Linux.",
    "I specialize in building modern web applications using React, Next.js, and Tailwind CSS, while continuously expanding my knowledge in backend development, databases, and cloud deployment. Alongside development, I have experience in digital marketing, particularly with Google Ads, Meta Ads, and helping businesses improve their online presence.",
    "I'm also a Linux enthusiast and enjoy exploring open-source technologies, customizing my development environment, and learning new tools that improve productivity.",
    "Some of my projects include SchoolStack, a modern school management system, and Syntrix, a digital marketing agency website. Through these projects, I've gained hands-on experience in software development, UI/UX design, deployment, and digital marketing strategies.",
    "I enjoy turning ideas into real products, solving problems with technology, and continuously learning new skills to grow as both a developer and a digital marketer.",
  ],
}

export const projects = [
  {
    id: "syntrix",
    name: "Syntrix",
    url: "https://nexora-h4xj.onrender.com/",
    screenshots: [1, 2, 3],
    description: "A modern digital marketing agency website designed to showcase professional digital services, including Google Ads management, Meta Ads, social media management, and website design services.",
    techStack: ["React", "Vite", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Vercel"],
    features: [
      "Professional Landing Page",
      "Google Ads Service Section",
      "Meta Ads Service Section",
      "Social Media Management",
      "Web Development Services",
      "Responsive Design",
      "Clean UI/UX",
      "Performance Optimized",
    ],
  },
  {
    id: "issueforge",
    name: "IssueForge",
    url: "https://issueforge-1.onrender.com/",
    screenshots: [1, 2, 3],
    description: "A tool that helps developers discover open GitHub issues matching their skills and interests, making open-source contribution easier for beginners and experienced developers alike.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "GitHub API", "Tailwind CSS"],
    features: [
      "Issue Discovery by Skill",
      "GitHub API Integration",
      "Beginner-Friendly Filters",
      "Language & Label Matching",
      "Portfolio Building",
      "Responsive Design",
    ],
  },
  {
    id: "schoolstack",
    name: "SchoolStack",
    url: "https://schoolstack-f0l4.onrender.com/",
    screenshots: [1, 2, 3],
    description: "A full-stack school management platform designed to simplify school operations, including student management, attendance tracking, fee management, exams, and communication between teachers, students, and parents.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "JWT"],
    features: [
      "Student Management",
      "Teacher Management",
      "Attendance System",
      "Fee Management",
      "Exams & Results",
      "Dashboard & Analytics",
      "Role-Based Auth",
      "Responsive Design",
    ],
  },
]

export const caseStudies = [
  {
    id: "syntrix",
    problem:
      "A digital marketing agency needed a website that could convert visitors into leads. They were relying on a basic landing page that didn't communicate their full range of services — Google Ads management, Meta Ads, social media, and web development.",
    approach:
      "Built a single-page site with dedicated service sections, each with its own call-to-action. Used React with Vite for fast load times. The layout prioritizes readability on mobile since most of their traffic comes from social media ads. Added a contact form and clear service breakdowns so visitors understand what they're getting before reaching out.",
    result:
      "The site loads in under 2 seconds on 3G and the agency started using the service pages as sales collateral during client calls. The performance and mobile experience directly support their ad campaigns.",
    keywords: [
      "Landing page",
      "Service breakdown",
      "Mobile traffic",
      "Lead generation",
      "Page speed",
    ],
  },
  {
    id: "issueforge",
    problem:
      "New developers want to contribute to open source but don't know where to start. GitHub's issue search is powerful but overwhelming — filtering by labels, languages, and good-first-issue tags takes too many clicks. There's no easy way to find issues that match what you already know.",
    approach:
      "Built a React app that pulls issues from the GitHub API and lets users filter by programming language, skill level, and issue labels. The backend caches results in PostgreSQL so repeated searches are fast. Each issue shows the repo name, description, labels, and a direct link to contribute. The UI prioritizes the filter controls — pick your language, see matching beginner-friendly issues immediately.",
    result:
      "A developer can select 'Python' and 'good first issue' and get a clean list of open issues from real repos within seconds. No GitHub account needed to browse. The caching layer keeps API rate limits in check, and the filters reduce noise so users see only what's relevant to them.",
    keywords: [
      "GitHub API",
      "Open source discovery",
      "Language filtering",
      "Good first issue",
      "Beginner-friendly",
      "PostgreSQL caching",
    ],
  },
  {
    id: "schoolstack",
    problem:
      "A small private school was managing student records, attendance, and fees across spreadsheets and paper registers. Nothing was centralized, and generating a simple fee report took 30 minutes of manual work.",
    approach:
      "Built a full-stack platform with Next.js for SSR on dashboard pages and Tailwind CSS for the UI. The backend uses Express and PostgreSQL with separate tables for students, teachers, attendance records, fees, and exams. Each user role — admin, teacher, student — sees a different dashboard with only the actions they need. Attendance is marked via a date-picker grid, and fees are tracked against monthly dues with paid/unpaid status.",
    result:
      "The school can now view attendance history, fee status, and exam results from one dashboard. The role system ensures teachers only see their classes and students only see their own records. The fee report that used to take 30 minutes now takes 5 seconds.",
    keywords: [
      "School management",
      "Role-based dashboard",
      "Attendance tracking",
      "Fee management",
      "Next.js",
      "SSR",
      "Student records",
    ],
  },
]

export const experience = [
  {
    role: "Full-Stack Developer & Digital Marketer",
    company: "Freelance / Independent",
    period: "Jan 2024 — Present",
    location: "Remote · Pakistan",
    highlights: [
      "Build web applications with React, Next.js, and Tailwind CSS for clients.",
      "Implement SEO strategies, manage Meta Ads and Google Ads campaigns.",
      "Integrate AI capabilities using LLM APIs, RAG pipelines, and chatbots.",
    ],
  },
  {
    role: "Independent Developer",
    company: "Personal Projects",
    period: "Jun 2023 — Dec 2023",
    location: "Remote · Pakistan",
    highlights: [
      "Developed SchoolStack — a full-stack school management platform.",
      "Built Syntrix — a digital marketing agency website.",
      "Applied SEO best practices and performance optimization.",
    ],
  },
]

export const skills = [
  {
    category: "Growth Marketing",
    items: ["Meta Ads", "Google Ads", "Content Strategy", "Growth Loops", "A/B Testing", "Marketing Analytics"],
  },
  {
    category: "SEO & Technical SEO",
    items: ["On-Page SEO", "Technical SEO", "Link Building", "Keyword Research", "Core Web Vitals", "Schema Markup"],
  },
  {
    category: "AI Integration",
    items: ["LLM APIs", "RAG Pipelines", "AI Chatbots", "Content Generation", "Personalization", "Automation Agents"],
  },
  {
    category: "Development",
    items: ["React / Next.js", "Python", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Google Search Console", "Ahrefs / SEMrush", "GitHub Actions", "Vercel / AWS", "OpenAI / Anthropic", "Zapier / Make"],
  },
  {
    category: "Analytics & Data",
    items: ["Google Analytics 4", "Looker Studio", "Mixpanel", "SQL", "Python Scripting", "Data Visualization"],
  },
]
