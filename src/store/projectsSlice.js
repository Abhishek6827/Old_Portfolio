// store/projectsSlice.js
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

// Curated Top High-Impact Engineering Projects (Strictly 10 Serious Projects - No source code links)
const projectDetails = {
  "rag-prompt-injection-audit": {
    name: "RAG Prompt Injection & Defense Audit",
    badge: "AI Security & Red-Teaming • OWASP LLM01",
    metrics: "10/10 Injections Neutralized • 0 False Blocks • 1.8ms Latency • 98% Pytest Coverage",
    description:
      "An empirical security audit and 3-tier defense-in-depth framework (XML Data Spotlighting, Heuristic Pre-Retrieval Scanner, Canary Regex Redactor) neutralizing indirect prompt injection attacks (OWASP LLM01). Reduced breach rate from 10/10 to 0/10 with 0 false blocks on clean corporate queries and 1.8ms latency overhead.",
    technologies: ["Python", "OWASP LLM01", "RAG", "ChromaDB", "Pytest", "Regex Guardrails"],
    demo: "https://rag-prompt-injection-audit.vercel.app",
    category: "AI Security & Evals",
    featured: true,
  },
  "llm-judge-audit": {
    name: "LLM-as-a-Judge Bias Audit & Calibration",
    badge: "Evaluation Systems & Model Alignment",
    metrics: "Human Agreement: 26/30 → 28/30 (93.3%) • Position Bias Invariance • 93% Test Coverage",
    description:
      "An empirical evaluation framework auditing position bias, verbosity/length padding bias, and self-preference in LLM evaluators. Implements a bidirectional swap consensus protocol and length-invariant scoring constraints that eliminated position-dependent verdict flips and raised human agreement to 93.3% with statistical Cohen's Kappa measurement.",
    technologies: ["Python", "LLM Evals", "Cohen's Kappa", "Bias Mitigation", "Pytest", "JSON Schema"],
    demo: "https://llm-judge-audit.vercel.app",
    category: "AI Security & Evals",
    featured: true,
  },
  "semantic-cache-faq": {
    name: "Semantic Cache for FAQ Bot",
    badge: "Inference Caching & Systems Latency",
    metrics: "38.3% LLM Inference Reduction • Sub-15ms Latency • Zero False-Hit Invariant @ 0.75",
    description:
      "A high-performance semantic vector caching engine for enterprise FAQ support bots. Implements multilingual sentence embeddings (MiniLM-L12-v2), automated cosine threshold sweeps (0.75-0.95), Hindi/English lexical negation conflict guards, and automated PII scrubbing (phone, email, order IDs) with TTL cache hygiene.",
    technologies: ["Python", "Sentence-Transformers", "Semantic Cache", "Vector Similarity", "Pytest", "FastAPI"],
    demo: "https://semantic-cache-faq.vercel.app",
    category: "Core Systems & DB",
    featured: true,
  },
  "SynapseAI": {
    name: "SynapseAI — Cognitive Agent Memory",
    badge: "Cognitive Architecture & Agent Memory",
    metrics: "90% Prompt Token Savings • Sub-45ms Direct Index Lookup • Automated Contradiction Resolution",
    description:
      "A dual-phase persistent long-term memory engine for autonomous AI agents that eliminates context-window stuffing. Implements selective fact extraction and automated contradiction resolution (ADD / UPDATE / DELETE). Powered by Groq LLaMA 3.3 for structured extraction and Qdrant vector database for sub-45ms semantic memory retrieval.",
    technologies: ["Python", "FastAPI", "Groq LLaMA 3.3", "Qdrant", "Vector Search", "Cognitive Architecture"],
    demo: "https://synapse-ai-xi-black.vercel.app",
    category: "AI Security & Evals",
    featured: true,
  },
  "Jedis": {
    name: "Jedis — Java 23 In-Memory Redis",
    badge: "Core Systems & Network Protocols",
    metrics: "Sub-Millisecond Execution • 100% RESP 2/3 Wire Protocol • Master-Slave PSYNC / WAIT",
    description:
      "A custom in-memory key-value store and raw TCP socket server built in Java 23. Features a non-blocking event-driven network architecture, custom byte-level RESP 2/3 serialization, multi-threaded command dispatch, optimistic locking with concurrent storage, distributed Master-Slave replication streams, and millisecond TTL expiration.",
    technologies: ["Java 23", "Raw TCP Sockets", "RESP Protocol", "Concurrency", "Replication", "In-Memory Engine"],
    demo: "https://jedis-redis.vercel.app",
    category: "Core Systems & DB",
    featured: true,
  },
  "AegisDB": {
    name: "AegisDB — Embedded Storage Engine",
    badge: "Database Internals & Storage Engines",
    metrics: "4096-Byte Slotted Disk Pages • 94%+ Buffer Hit Ratio • Clustered B+Tree Index & ACID RW-Locks",
    description:
      "A custom embedded disk-backed database engine built in Java 21. Implements clustered B+Tree indexing for primary keys, compressed bitmap indexing for low-cardinality queries, 4KB slotted disk page buffer pool with LRU cache eviction and dirty-page flushes, and collection-level Reader-Writer locks for ACID concurrency.",
    technologies: ["Java 21", "B+Tree", "4KB Buffer Pool", "Bitmap Indexing", "Disk Paging", "ACID Concurrency"],
    demo: "https://aegis-db.vercel.app",
    category: "Core Systems & DB",
    featured: true,
  },
  "CHINTU_AI": {
    name: "CHINTU AI Platform",
    badge: "AI Copilot & Cross-Platform SaaS",
    metrics: "500+ Registered Users • 25k+ Monthly Inferences • <400ms Multi-LLM Routing",
    description:
      "Architected and shipped an AI career copilot platform across Web, Desktop (Electron macOS DMG & Windows EXE), and Android APK. Microservices backend powered by FastAPI AI engine, Node.js gateway, PostgreSQL/Supabase, RabbitMQ workers for 63-language audio transcription, and credit-based Razorpay subscription billing with 100% webhook reconciliation.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Electron", "Android", "FastAPI", "PostgreSQL", "RabbitMQ", "Razorpay"],
    demo: "https://getchintu.com",
    category: "Production Apps & Cloud",
    featured: true,
  },
  "Resume-Extension": {
    name: "AI Resume Tailor & LaTeX Engine",
    badge: "Cloud Architecture & LaTeX Systems",
    metrics: "Sub-3s Tailored PDF Generation • Live DOM LinkedIn/Indeed Job Scraper • Spring Boot on AWS Lambda",
    description:
      "An AI-powered Chrome browser extension and cloud compilation engine that parses job descriptions directly from LinkedIn and Indeed in real-time, identifies missing qualifications, and dynamically compiles tailored, ATS-compliant LaTeX PDF resumes in under 3 seconds using Java Spring Boot on AWS Lambda.",
    technologies: ["TypeScript", "Chrome Extension API", "Java", "Spring Boot", "AWS Lambda", "LaTeX Engine"],
    demo: "https://resume.getchintu.com",
    category: "Production Apps & Cloud",
    featured: true,
  },
  "Tempusmail": {
    name: "Tempusmail — Disposable Email Service",
    badge: "Privacy Infrastructure & Real-Time Streaming",
    metrics: "Instant Disposable Inboxes • Sub-Second Email Delivery • WebSocket Live Streaming",
    description:
      "A real-time disposable temporary email platform built with Next.js, Cloudflare Workers, and WebSockets. Provides instant burner inboxes, auto-refreshing incoming mail streams, live attachment parsing, and automatic TTL purge cycles to protect user privacy from tracking and spam.",
    technologies: ["TypeScript", "Next.js 15", "WebSockets", "Cloudflare Workers", "Tailwind CSS", "REST API"],
    demo: "https://tempomail.getchintu.com",
    category: "Production Apps & Cloud",
    featured: false,
  },
  "Social_Connect": {
    name: "Social Connect",
    badge: "Distributed Web & Real-Time Protocols",
    metrics: "Real-Time WebSocket Chat • JWT Multi-Session Auth • Cloudinary Media Pipeline",
    description:
      "A full-stack social networking application featuring bidirectional instant messaging via Socket.io, secure JWT authentication, media storage via Cloudinary CDN, responsive mobile-first UI, and real-time activity feeds built with React, Node.js, Express, and MongoDB.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS", "Cloudinary"],
    demo: "https://socialconnect.getchintu.com/login",
    category: "Production Apps & Cloud",
    featured: false,
  },
};

// Async thunk to fetch projects
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const projectsToKeep = [
      "rag-prompt-injection-audit",
      "llm-judge-audit",
      "semantic-cache-faq",
      "SynapseAI",
      "Jedis",
      "AegisDB",
      "CHINTU_AI",
      "Resume-Extension",
      "Tempusmail",
      "Social_Connect",
    ];

    const mappedProjects = projectsToKeep.map((key, index) => {
      const details = projectDetails[key];
      return {
        id: `curated-${index}-${key}`,
        name: details.name,
        badge: details.badge,
        metrics: details.metrics,
        description: details.description,
        technologies: details.technologies || [],
        demo: details.demo || null,
        html_url: null, // Strictly no github source code links
        category: details.category || "Engineering",
        featured: details.featured ?? false,
        stargazers_count: 5,
        updated_at: new Date().toISOString(),
        deployStatus: "idle",
        deployedUrl: details.demo || null,
      };
    });

    return mappedProjects;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    status: "idle",
    error: null,
  },
  reducers: {
    updateProject: (state, action) => {
      const { id, updates } = action.payload;
      const project = state.projects.find((p) => p.id === id);
      if (project) {
        Object.assign(project, updates);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { updateProject } = projectsSlice.actions;

// Selectors
export const selectAllProjects = (state) => state.projects.projects;
export const selectProjectById = (state, projectId) =>
  state.projects.projects.find((project) => project.id === projectId);

export const selectFeaturedProjects = createSelector(
  [selectAllProjects],
  (projects) => projects.filter((project) => project.featured)
);

export const selectProjectsByCategory = createSelector(
  [selectAllProjects, (_, category) => category],
  (projects, category) => {
    if (category === "all") return projects;
    return projects.filter(
      (project) =>
        project.category?.toLowerCase() === category.toLowerCase()
    );
  }
);

export const selectAvailableCategories = createSelector(
  [selectAllProjects],
  (projects) => {
    const categories = new Set(
      projects.map((project) => project.category || "Other")
    );
    return ["all", ...Array.from(categories)];
  }
);

export const selectProjectsStats = createSelector(
  [selectAllProjects],
  (projects) => ({
    total: projects.length,
    featured: projects.filter((p) => p.featured).length,
    categories: new Set(projects.map((p) => p.category)).size,
    technologies: new Set(projects.flatMap((p) => p.technologies || [])).size,
  })
);

export default projectsSlice.reducer;
