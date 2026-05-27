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
