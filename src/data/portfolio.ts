// ============================================================================
// PORTFOLIO CONTENT DATA
// ----------------------------------------------------------------------------
// This file holds all the editable text/content for the site.
// ============================================================================

export const personalInfo = {
  name: "Olamide Olawuyi",
  title: "Junior Software Engineer",
  tagline: "Turning curiosity into code",
  location: "Manchester, UK",
  email: "ocolawuyi@outlook.com",
  github: "https://github.com/christianaao",
  linkedin: "https://www.linkedin.com/in/olamide-olawuyi/",
  resumeUrl: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Olamide-Olawuyi-SoftwareDevCV.pdf`,
};

export const about = {
  heading: "From conveyancing to code",
  paragraphs: [
    "I spent over two years as a conveyancer and conveyancing assistant, managing property caseloads and drafting legal documents under pressure. It taught me precision, resilience, and how to communicate complex information clearly. These skills allowed me to easily transition to software engineering.",
    "After deciding to pursue what I was genuinely passionate about, I completed Northcoders' intensive full-stack bootcamp, building full-stack JavaScript applications from scratch and working in Agile teams. I'm now a Junior Software Engineer on a graduate scheme, rotating across engineering teams and continuing to learn every day.",
    "I bring a different perspective to engineering teams: someone who has worked under real-world deadlines, dealt with people and processes, and now channels that same discipline into spiking, writing and testing code.",
  ],
  funFacts: [
    { label: "Swimming", detail: "Weekly swimming sessions, great for a full body workout." },
    { label: "Gaming", detail: "I love strategy and team-based games." },
    { label: "Travelling", detail: "Exploring new food and cultures." },
  ],
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  { category: "Languages", items: ["JavaScript", "Python", "Node.js"] },
  { category: "Testing", items: ["Test-Driven Development (TDD)", "Jest", "SuperTest"] },
  { category: "Front End", items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Lighthouse & accessibility tooling"] },
  { category: "Back End", items: ["SQL", "PostgreSQL", "Express", "Seeding", "Migrations"] },
  { category: "Hosting & Tools", items: ["Netlify", "Vercel", "Render", "Supabase", "GitHub", "Git"] },
  { category: "Ways of Working", items: ["Paired Programming", "Technical Communication", "SDLC", "Agile & Scrum"] },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    title: "Full Stack Hidden Gems App",
    description:
      "A full-stack app for discovering and sharing hidden local spots, built with an interactive map experience and geocoding search.",
    tech: ["Next.js", "Firebase", "React Leaflet Maps", "Geocode.maps.co API", "Tailwind", "Yup Validation"],
    links: [
      { label: "Website", url: "https://hidden-gems-oo.vercel.app/" },
      { label: "Front End Repo", url: "https://github.com/christianaao/hidden-gems-frontend" },
      { label: "Back End Repo", url: "https://github.com/christianaao/hidden-gems-backend" },
    ],
  },
  {
    title: "Full Stack News Article App",
    description:
      "A Reddit-style news article platform with voting, commenting, and topic filtering, built using test-driven development.",
    tech: ["JavaScript", "React", "Express", "PostgreSQL", "CSS", "TDD"],
    links: [
      { label: "Website", url: "https://frontend-news-article-project.netlify.app/" },
      { label: "Front End Repo", url: "https://github.com/christianaao/frontend-news-article-project" },
      { label: "Back End Repo", url: "https://github.com/christianaao/backend-news-article-project" },
    ],
  },
  {
    title: "CLI Blackjack Game",
    description: "A command-line Blackjack game with colourful terminal output, built using test-driven development.",
    tech: ["JavaScript", "Chalk", "TDD"],
    links: [{ label: "Repo", url: "https://github.com/christianaao/blackjack-card-game" }],
  },
  {
    title: "Responsive Coffee Shop Website",
    description: "A fully responsive front-end website built from a pre-defined wireframe for a fictional coffee shop.",
    tech: ["HTML", "CSS"],
    links: [
      { label: "Website", url: "https://christianaao.github.io/coffee-shop/index.html" },
      { label: "Repo", url: "https://github.com/christianaao/coffee-shop" },
    ],
  },
  {
    title: "Text-Based Story Game",
    description: "An interactive, branching text-based adventure game built in Python as part of a team project.",
    tech: ["Python"],
    links: [{ label: "Repo", url: "https://github.com/christianaao/murder-mystery-game" }],
  },
  {
    title: "Gibberish Query Detector (R&D)",
    description:
      "Researched and evaluated multiple Python/NLP libraries (including Lingua, NLTK, and regex-based heuristics) to detect nonsensical or gibberish search queries for a large-scale search engine. Designed test query sets and compared detection accuracy across libraries in a spike/results spreadsheet.",
    tech: ["Python", "Gibberish Detector", "TheFuzz", "Research & Evaluation"],
    links: [{label: "Repo", url: "https://github.com/christianaao/gibberish-detector-spike"}],
  },
  {
    title: "Search Intent Detection with spaCy (R&D)",
    description:
      "Explored spaCy and core NLP/NLU concepts to prototype query-intent detection (e.g. distinguishing questions from statements), aimed at improving search relevance and result ranking for a production search system.",
    tech: ["Python", "spaCy"],
    links: [],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Junior Software Engineer",
    company: "BBC",
    location: "Remote / Hybrid",
    period: "Sep 2025 – Present",
    bullets: [
      "Rotated across engineering teams (Search, Sport Data) on a structured graduate programme, gaining exposure to production systems serving millions of daily users",
      "Search rotation: researched and evaluated NLP/Python libraries (e.g. spaCy, TheFuzz, Giberish Detector, NLTK) to detect gibberish queries and classify user search intent, improving query relevance for a large-scale search engine",
      "Sport Data rotation: contributed frontend (React/TypeScript) and backend solutions for a high-traffic public sports website, including data display corrections and support for live coverage of major sporting events such as the 2026 World Cup. Additionally, gained hands on AWS and on call-support experience.",
      "Practiced Agile ceremonies such as standups, sprint planning, retrospectives and core development practices like peer code reviews and test-driven development across all rotations",
    ],
  },
  {
    role: "Web Developer Intern & Onboarding Specialist",
    company: "2Toucans",
    location: "Remote",
    period: "Jan 2025 – Apr 2025",
    bullets: [
      "Transformed the onboarding system into a scalable, step-by-step process with automated task tracking and feedback collection, improving clarity and candidate experience by over 110%",
      "Developed scripts to automate milestone notifications for candidates and the HR team, further improving onboarding efficiency",
      "Created development environment setup documentation and led training sessions for smooth team adoption",
      "Collaborated with teams to build responsive websites using Drupal and other technologies",
    ],
  },
  {
    role: "Trainee Software Developer",
    company: "Northcoders (Software Development Bootcamp)",
    location: "Remote",
    period: "Jun 2024 – Oct 2024",
    bullets: [
      "Completed an intensive, Level 4-equivalent full-stack software development bootcamp in JavaScript",
      "Teamed up with other developers to build a full-stack application over a three-week period using Agile workflow",
      "Deepened knowledge of JavaScript fundamentals, front-end, and back-end programming",
      "Tackled coding sprints and katas through Test-Driven Development and paired programming",
    ],
  },
  {
    role: "Trainee Software Developer & Team Leader",
    company: "Code Nation (Software Development Course)",
    location: "Remote",
    period: "Apr 2024",
    bullets: [
      "Built a responsive front-end website from a pre-defined wireframe",
      "Led and managed a team through a text-based story game project as Team Leader",
      "Recognised by cohort lead and peers for outstanding performance and professionalism as Team Leader",
    ],
  },
];

export const contact = {
  heading: "Let's talk",
  blurb:
    "I'm happy to chat about opportunities, collaborations, or software. Reach out through any of the channels below.",
};
