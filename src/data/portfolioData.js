export const PERSONAL_INFO = {
  name: "Able Sunny",
  role: "Full-Stack Developer",
  location: "Iritty, Kannur, Kerala, India",
  eyebrow: "FULL-STACK DEVELOPER · KERALA, INDIA",
  heading: "Able Sunny.",
  statement: "I build digital products, full-stack applications, and intelligent systems.",
  supportingText:
    "Focused on building useful web applications with thoughtful engineering, clean interfaces, and reliable architecture.",
  email: "ablesunnyofficial@gmail.com",
  phone: "+91 9526815773",
  phoneFormatted: "+91 95268 15773",
  github: "https://github.com/ablesunny",
  resumePath: "/resume.pdf",
  bio: `A full-stack developer with hands-on experience in building modern, scalable, and user-centric web applications. Passionate about transforming ideas into real-world products, with strong problem-solving skills and a keen eye for clean code, performance, and great user experiences. Experienced in developing e-commerce platforms, data-driven applications, and AI-integrated solutions. Always eager to learn new technologies and take on challenging projects that create real impact.`,
};

export const PROJECTS = [
  {
    id: "sellex",
    number: "01",
    name: "Sellex",
    category: "Multi-Store E-Commerce & Seller Management Platform",
    tagline: "Multi-store marketplace engine with subdomain routing & seller portals",
    tags: ["Next.js", "React", "TypeScript", "Firebase", "Zustand", "Recharts"],
    summary:
      "A comprehensive multi-store commerce platform featuring individual seller management, product catalogs, cart workflows, custom subdomain routing via Next.js middleware, and real-time storefront analytics.",
    overview:
      "Sellex addresses the complexity of managing multi-tenant e-commerce environments. It provides isolated seller dashboards, customizable store branding, and fine-grained role-based access control, allowing independent merchants to control inventory, monitor customer orders, and analyze store performance through unified analytics.",
    keyFeatures: [
      "Multi-store commerce architecture with complete seller and store administration",
      "Dynamic store and subdomain routing powered by Next.js middleware",
      "Granular role-based access control (RBAC) and strict store ownership verification",
      "Full order lifecycle and shopping cart state management",
      "Custom shipping configuration, discounts, and customer management tools",
      "Interactive analytics dashboards and sales visualization with Recharts",
      "Optimized client state using Zustand combined with SWR for reactive data synchronization",
    ],
    technicalHighlights: [
      "Architected with Next.js App Router and TypeScript for strict type guarantees across server and client boundaries.",
      "Leveraged Firebase Firestore for real-time order streams and document-level security rules enforcing store isolation.",
      "Implemented Next.js Middleware for zero-latency multi-tenant subdomain resolution.",
    ],
    github: "https://github.com/ablesunny",
  },
  {
    id: "lumina",
    number: "02",
    name: "Lumina",
    category: "Production-Oriented E-Commerce Platform",
    tagline: "Stripe-integrated commerce platform with inventory safeguards & AI discovery",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    summary:
      "A robust, production-grade e-commerce application equipped with Stripe PaymentIntents, webhook idempotency, automated inventory reservation safeguards, and AI-assisted product discovery.",
    overview:
      "Lumina focuses on mission-critical commerce operations where payment integrity and data consistency are non-negotiable. It integrates secure Stripe server-side validations, real-time inventory locking with transactional rollbacks, and an AI-powered discovery layer to enhance customer engagement while maintaining enterprise-level security controls.",
    keyFeatures: [
      "End-to-end shopping journey: product discovery, wishlist, cart, and checkout",
      "Production Stripe integration utilizing PaymentIntents and verified webhook listeners",
      "Inventory reservation mechanisms with automatic rollback safeguards against abandoned checkouts",
      "Idempotent webhook processing to eliminate duplicate transaction risks",
      "AI-driven product discovery engine trained on structured catalog metadata",
      "Protected admin workflows with user-isolation controls and inventory oversight",
      "Rigorous unit testing, WCAG accessibility compliance, and structured SEO optimization",
    ],
    technicalHighlights: [
      "Engineered with PostgreSQL and Prisma ORM, utilizing database transactions to prevent race conditions during checkout.",
      "Enforced strict server-side schema validation on all checkout payloads before generating payment intents.",
      "Built resilient background webhook handlers with exponential backoff and retry policies.",
    ],
    github: "https://github.com/ablesunny",
  },
  {
    id: "truthgraph",
    number: "03",
    name: "TruthGraph",
    category: "Source Ingestion & Information Analysis Platform",
    tagline: "Structured source ingestion engine with SHA-256 deduplication & pipeline resilience",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
    summary:
      "A full-stack intelligence platform designed for structured web source ingestion, content extraction, SHA-256 cryptographic deduplication, and resilient state-driven processing pipelines.",
    overview:
      "TruthGraph solves the challenge of reliable document ingestion and information traceability from diverse web sources. It processes raw web documents through normalization, metadata extraction, cryptographic hashing, and indexed relational storage, delivering clean, structured data for downstream analytical workflows.",
    keyFeatures: [
      "Automated URL normalization, HTML/text parsing, and metadata extraction pipelines",
      "SHA-256 cryptographic content fingerprinting for instant duplicate-source detection",
      "State-machine driven processing lifecycle with automatic retry and recovery handling",
      "Project-scoped authorization boundaries with token bucket rate limiting",
      "Structured diagnostic logging and execution tracing for ingestion jobs",
      "Optimized relational schema featuring composite indexes and strict foreign-key integrity",
    ],
    technicalHighlights: [
      "Implemented idempotent ingestion pipelines guaranteeing deterministic state transitions.",
      "Designed PostgreSQL indexing strategies for rapid hash lookups and query execution across large text corpora.",
      "Structured error recovery boundaries to isolate network failures during scraping without halting batch jobs.",
    ],
    github: "https://github.com/ablesunny",
  },
  {
    id: "visiontrack",
    number: "04",
    name: "VisionTrack",
    category: "AI-Powered Visual Analysis Platform",
    tagline: "Computer vision and OCR platform with assistive audio & keyboard accessibility",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "AI/OCR"],
    summary:
      "An AI-focused visual analysis application providing image understanding, OCR extraction, audio speech synthesis, and keyboard-first accessibility.",
    overview:
      "VisionTrack delivers accessible computer vision capabilities for users requiring both visual intelligence and screen-reader friendliness. By decoupling the AI inference, OCR processing, and storage layers, the platform delivers fast visual interpretations along with integrated text-to-speech for seamless interaction.",
    keyFeatures: [
      "AI-driven image understanding and optical character recognition (OCR) pipeline",
      "Decoupled modular architecture separating AI inference, OCR parsing, and persistent storage",
      "Secure user authentication with persistent analysis history and search",
      "Integrated text-to-speech audio playback for extracted textual data",
      "Full keyboard navigation and screen-reader accessibility adherence",
      "Fluid responsive user interface designed across desktop and handheld viewpoints",
      "Automated testing pipeline covering unit, integration, and user-flow validation",
    ],
    technicalHighlights: [
      "Modular micro-service style adapter pattern allowing interchange of underlying OCR and vision models.",
      "Client-side audio synthesis integration using the Web Speech API with fallback support.",
      "Stateless API endpoints enabling horizontal scaling during intensive visual analysis bursts.",
    ],
    github: "https://github.com/ablesunny",
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Next.js API Routes",
      "Server Actions",
    ],
  },
  {
    name: "Databases & Data Access",
    skills: ["MySQL", "PostgreSQL", "Firebase Firestore", "Prisma", "SQL"],
  },
  {
    name: "Authentication & Security",
    skills: [
      "Firebase Authentication",
      "NextAuth / Auth.js",
      "JWT",
      "Bcrypt",
      "Role-Based Access Control",
      "Authorization",
      "Rate Limiting",
    ],
  },
  {
    name: "AI & Tools",
    skills: [
      "Generative AI",
      "OpenAI API",
      "LangChain",
      "OCR",
      "AI-Assisted Development",
    ],
  },
  {
    name: "Payments & Integrations",
    skills: ["Stripe", "PaymentIntents", "Webhooks", "API Integration"],
  },
  {
    name: "Development & Testing",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vitest",
      "Playwright",
      "End-to-End Testing",
    ],
  },
  {
    name: "Deployment",
    skills: ["Vercel", "Netlify", "Render", "Railway"],
  },
];

export const EDUCATION = [
  {
    id: "techminds",
    degree: "AI-Powered Full Stack Web Development (MERN + SQL + AI)",
    institution: "TechMinds",
    location: "InfoPark Phase 1, Kakkanad, Kochi",
    period: "2026 – Present",
    status: "Pursuing",
    description:
      "Advanced intensive curriculum covering enterprise MERN architectures, relational database engineering with PostgreSQL/MySQL, system design, and AI application integration.",
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Don Bosco Arts and Science College",
    location: "Kannur University",
    period: "2023 – 2026",
    status: "Completed",
    description:
      "Core computing foundations including Object-Oriented Programming, Data Structures, Relational Database Management Systems, Software Engineering methodologies, and Web Technologies.",
  },
  {
    id: "hss",
    degree: "Higher Secondary — Computer Science",
    institution: "St. Mary's Higher Secondary School",
    location: "Edoor, Kerala",
    period: "2021 – 2023",
    status: "82%",
    description:
      "Focused coursework in Computer Science, Mathematics, Physics, and foundational algorithms with C++.",
  },
  {
    id: "sslc",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "St. Thomas High School",
    location: "Karikkottakari, Kerala",
    period: "2021",
    status: "95%",
    description:
      "Secondary school education with high academic distinction across science and mathematics.",
  },
];

export const ADDITIONAL_INFO = {
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Malayalam", level: "Native" },
    { name: "Hindi", level: "Conversational" },
    { name: "Tamil", level: "Basic" },
  ],
  strengths: [
    "Fast Learner",
    "Strong Work Ethic",
    "Self-Motivated",
    "Creative Thinking",
    "Time Management",
  ],
  activities: [
    { title: "MMA Athlete", desc: "Disciplined martial arts training" },
    { title: "Sub-District Football Player", desc: "Competitive team athletics" },
  ],
};
