export const projects = [
  {
    id: 1,
    title: "Job Search Intelligence",
    company: "Personal Project",
    year: "2024",
    tags: ["Multi-Agent AI", "LangGraph", "RAG", "Streamlit"],
    description: "Multi-agent AI system that automates job research, company analysis, and CV matching to produce tailored interview briefs in under 60 seconds. Built with LangGraph, Pinecone, Groq Llama 3.3, and Tavily web search.",
    link: "https://github.com/MansiSharma98/job_search_intelligence",
  },
  {
    id: 2,
    title: "5G RAG Bot",
    company: "Personal Project",
    year: "2024",
    tags: ["RAG", "LangChain", "ChromaDB", "Groq"],
    description: "End-to-end retrieval-augmented generation pipeline for querying the Ericsson 5G Mobility Report in natural language. Local-first architecture with ChromaDB, HuggingFace embeddings, and Groq Llama 3.3 — no API latency.",
    link: "https://github.com/MansiSharma98/5G_RAG_bot",
  },
  {
    id: 3,
    title: "MovieLens Recommender System",
    company: "Personal Project",
    year: "2023",
    tags: ["ML", "Collaborative Filtering", "Python", "Surprise"],
    description: "Collaborative filtering recommendation engine predicting user movie preferences from the MovieLens dataset. Implemented user-user and item-item variants with optimised neighbourhood sizes — 16% improvement over baseline.",
    link: "https://github.com/MansiSharma98/MovieLens-Recommender-system",
  },
]

export const caseStudies = [
  {
    id: 1,
    title: "Healthcare is adopting AI faster than most people realise",
    subtitle: "What good AI adoption actually looks like in clinical settings",
    company: "Calling Tardis",
    year: "2025",
    readTime: "6 min read",
    tags: ["AI Healthtech", "RAG", "Clinical AI", "LLMs", "AI Safety"],
    description: "How large language models are transforming healthcare administration — from Doctolib's consultation assistant to Abridge's ambient AI. Examines what responsible adoption looks like: human oversight, data privacy, and RAG systems that prevent hallucinations in clinical contexts.",
    link: "https://callingtardis.substack.com/p/healthcare-is-adopting-ai-faster",
  },
]

// Manually pinned posts from external publications
export const featuredWriting = [
  {
    id: 1,
    title: "Outplay Objection Handling: Become a Pro at Email Responses",
    publication: "Outplay Blog",
    date: "Nov 22, 2022",
    description: "How Outplay's AI-powered Objection Handling feature helps sales reps identify and respond to common email objections using explainable AI and personalised response suggestions — a feature I helped design and ship.",
    tags: ["AI", "Sales", "Product"],
    link: "https://outplay.ai/blog/outplay-objection-handling-become-a-pro-at-email-responses",
  },
  {
    id: 2,
    title: "Healthcare is adopting AI faster than most people realise",
    publication: "Calling Tardis",
    date: "May 27, 2025",
    description: "How LLMs are transforming clinical documentation — from Doctolib's consultation assistant to Abridge's ambient AI — and what responsible adoption looks like with RAG, human oversight, and compliance built in.",
    tags: ["AI Healthtech", "RAG", "Clinical AI", "LLMs"],
    link: "https://callingtardis.substack.com/p/healthcare-is-adopting-ai-faster",
  },
]

export const experience = [
  { role: "Founding Engineer & AI Consultant", company: "SureConnect", period: "2024–present" },
  { role: "AI Product & Engineering", company: "Outplay", period: "2022–2024" },
  { role: "Software Engineer", company: "Accenture", period: "2020–2022" },
]

export const skills = [
  "AI Systems", "Product Strategy", "B2B SaaS",
  "Founding Work", "Tech Consulting", "Engineering",
]

export const timeline = [
  {
    id: 'srm',
    type: 'education',
    period: '2016 – 2020',
    title: 'Bachelor of Technology in Computer Science & Engineering',
    org: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    summary: 'First Class with Distinction · GPA 8.4 / 10',
    tags: ['Algorithms', 'Artificial Intelligence', 'Software Engineering', 'Database Management Systems', 'Probability & Statistics & Data Analysis'],
    body: 'Four years building the foundation — computer science theory, applied mathematics, and software engineering practice. Graduated with First Class with Distinction and a GPA of 8.4 / 10.',
    links: [],
  },
  {
    id: 'accenture',
    type: 'work',
    period: '2020 – 2022',
    title: 'Software Engineer',
    org: 'Accenture',
    location: 'Bengaluru, India',
    summary: 'eCommerce infrastructure · European markets',
    tags: ['Software Engineering', 'eCommerce', 'Enterprise', 'Tech Consulting'],
    body: 'Shipped scalable eCommerce backend infrastructure for European retail clients. Worked across delivery, integration, and performance — the kind of enterprise-scale systems work that teaches you how big products actually run.',
    links: [],
  },
  {
    id: 'outplay',
    type: 'work',
    period: '2022 – 2024',
    title: 'AI Product & Engineering',
    org: 'Outplay',
    location: 'Hyderabad, India',
    summary: 'AI features for B2B sales · North American & Indian markets',
    tags: ['AI', 'B2B SaaS', 'Product', 'NLP', 'Sales Intelligence'],
    body: 'Designed and built AI-powered features for B2B sales workflows — including the Objection Handling engine that uses explainable AI to generate personalised email responses. Worked across product, engineering, and go-to-market.',
    links: [
      { label: 'Outplay Objection Handling ↗', href: 'https://outplay.ai/blog/outplay-objection-handling-become-a-pro-at-email-responses' },
    ],
  },
  {
    id: 'sureconnect',
    type: 'work',
    period: '2024 – Present',
    title: 'Founding Engineer & AI Consultant',
    org: 'SureConnect',
    location: 'Remote, India',
    summary: '0 → 1 AI product engineering & strategy',
    tags: ['Founding', 'AI Systems', 'Product Strategy', 'Consulting', 'RAG'],
    body: 'Joined as founding engineer — which means everything from system architecture to hiring calls to customer discovery. Building AI products from scratch and advising on AI strategy for early-stage companies.',
    links: [],
  },
]
