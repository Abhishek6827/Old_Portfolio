// store/projectsSlice.js
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

// Curated Top High-Impact Engineering Projects (Strictly 10 Serious Projects)
const projectDetails = {
  "rag-prompt-injection-audit": {
    name: "RAG Prompt Injection & Defense Audit",
    description:
      "An empirical security audit and 3-tier defense-in-depth framework (XML Data Spotlighting, Heuristic Pre-Retrieval Scanner, Canary Regex Redactor) neutralizing indirect prompt injection attacks (OWASP LLM01). Reduced breach rate from 10/10 to 0/10 with 0 false blocks on clean corporate queries and 1.8ms latency overhead (98% test coverage).",
    technologies: ["Python", "OWASP LLM01", "RAG", "ChromaDB", "Pytest", "Regex Guardrails"],
    demo: "https://rag-prompt-injection-audit.vercel.app",
    github: "https://github.com/Abhishek6827/rag-prompt-injection-audit",
    category: "AI Security / Systems",
    featured: true,
  },
  "llm-judge-audit": {
    name: "LLM-as-a-Judge Bias Audit & Calibration",
    description:
      "An empirical bias audit measuring position bias, verbosity bias (+150 filler words), and self-preference in LLM-as-a-Judge pipelines. Implements bidirectional consensus calibration that boosted human agreement from 26/30 to 28/30 with Cohen's Kappa measurement (93% test coverage).",
    technologies: ["Python", "LLM Evals", "Cohen's Kappa", "Bias Mitigation", "Pytest", "JSON Schema"],
    demo: "https://llm-judge-audit.vercel.app",
    github: "https://github.com/Abhishek6827/llm-judge-audit",
    category: "AI Evaluation & Alignment",
    featured: true,
  },
  "semantic-cache-faq": {
    name: "Semantic Cache for FAQ Bot",
    description:
      "A high-performance semantic caching system for LLM FAQ bots that cuts LLM calls by 67% and reduces latency from 420ms to 1.2ms (350x speedup). Features automated cosine similarity threshold sweeps (0.75-0.95), Hindi/English lexical negation guard, and TTL/PII cache hygiene (84% test coverage).",
    technologies: ["Python", "Sentence-Transformers", "Semantic Cache", "Vector Similarity", "Pytest"],
    demo: "https://semantic-cache-faq.vercel.app",
    github: "https://github.com/Abhishek6827/semantic-cache-faq",
    category: "Systems / Performance",
    featured: true,
  },
  "SynapseAI": {
    name: "SynapseAI — Cognitive Agent Memory",
    description:
      "A dual-phase persistent agent memory engine featuring selective fact extraction and automated contradiction resolution (ADD / UPDATE / DELETE). Powered by Groq LLaMA 3.3 for ultra-low latency fact extraction and Qdrant vector database for sub-45ms semantic memory retrieval (90% prompt token reduction).",
    technologies: ["Python", "FastAPI", "Groq LLaMA 3.3", "Qdrant", "Vector Search", "Cognitive Architecture"],
    demo: "https://synapse-ai-xi-black.vercel.app",
    github: "https://github.com/Abhishek6827/SynapseAI",
    category: "Cognitive AI & Agent Memory",
    featured: true,
  },
  "Jedis": {
    name: "Jedis — Java 23 In-Memory Redis",
    description:
      "A custom in-memory key-value store built in Java 23 featuring a custom event-driven raw TCP socket server, byte-level RESP 2/3 wire protocol parser, multi-threaded command execution, Master-Slave replication with PSYNC / WAIT offset streams, and TTL-based key eviction.",
    technologies: ["Java 23", "Raw TCP Sockets", "RESP Protocol", "Multithreading", "Replication", "TTL"],
    demo: "https://jedis-redis.vercel.app",
    github: "https://github.com/Abhishek6827/Jedis",
    category: "Core Systems & Networking",
    featured: true,
  },
  "AegisDB": {
    name: "AegisDB — Embedded Storage Engine",
    description:
      "A custom embedded storage engine in Java 21 with clustered B+Tree indexing for primary keys, compressed bitmap indexing for low-cardinality queries, 4KB slotted disk page buffer pool with LRU cache eviction and dirty-page flushes, and collection-level Reader-Writer locks for ACID concurrency (94%+ buffer pool hit ratio).",
    technologies: ["Java 21", "B+Tree", "4KB Buffer Pool", "Bitmap Indexing", "Disk Paging", "ACID Locks"],
    demo: "https://aegis-db.vercel.app",
    github: "https://github.com/Abhishek6827/AegisDB",
    category: "Database Systems & Internals",
    featured: true,
  },
  "CHINTU_AI": {
    name: "CHINTU AI Platform",
    description:
      "A full-stack career preparation SaaS and multi-platform client ecosystem across Web, Desktop (Electron Windows/Mac), and Mobile (Android). Microservices architecture with FastAPI AI engine, Node.js API gateway, PostgreSQL, RabbitMQ, Redis caching, and Razorpay subscription billing.",
    technologies: ["React", "Electron", "Android", "FastAPI", "Node.js", "PostgreSQL", "RabbitMQ", "Redis"],
    demo: "https://getchintu.com",
    github: "https://github.com/Abhishek6827/Chintu",
    category: "Full-Stack AI SaaS",
    featured: true,
  },
  "Resume-Extension": {
    name: "AI Resume Tailor & LaTeX Engine",
    description:
      "An AI-powered Chrome browser extension and cloud compilation engine that parses job descriptions directly from LinkedIn and Indeed, analyzes skill match gaps, and dynamically compiles tailored, ATS-compliant LaTeX PDF resumes in under 3 seconds using Java Spring Boot on AWS.",
    technologies: ["TypeScript", "Chrome Extension API", "Java", "Spring Boot", "AWS Lambda", "LaTeX Engine"],
    demo: "https://resume.getchintu.com",
    github: "https://github.com/Abhishek6827/Resume-Extension",
    category: "AI Productivity & Cloud",
    featured: true,
  },
  "Tempusmail": {
    name: "Tempusmail — Disposable Email Service",
    description:
      "A real-time disposable temporary email service built with Next.js, Cloudflare Email Routing / Workers, and WebSockets. Provides instant disposable inboxes, automatic email parsing, live attachment streaming, and auto-purging to protect user privacy from web spam and tracking.",
    technologies: ["TypeScript", "Next.js", "WebSockets", "Cloudflare Workers", "Tailwind CSS"],
    demo: "https://tempomail.getchintu.com",
    github: "https://github.com/Abhishek6827/tempusmail",
    category: "Real-Time Web & Privacy",
    featured: false,
  },
  "Social_Connect": {
    name: "Social Connect",
    description:
      "A real-time social networking platform featuring instant messaging with Socket.io, JWT authentication, post creation with Cloudinary image hosting, interactive comments, and live feed updates built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS", "Cloudinary"],
    demo: "https://socialconnect.getchintu.com/login",
    github: "https://github.com/Abhishek6827/Social-Media",
    category: "Full-Stack Web",
    featured: false,
  },
};

// Fetch projects from GitHub
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    let data = [];
    try {
      const response = await fetch(
        "https://api.github.com/users/Abhishek6827/repos?per_page=100"
      );
      if (response.ok) {
        data = await response.json();
      }
    } catch (err) {
      console.warn("GitHub API error/rate-limit; using curated project list:", err);
    }

    // Strict Curated Importance Ranking (Only Top 10 High-Impact Projects)
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
      const repo = Array.isArray(data)
        ? data.find(
            (r) =>
              r.name.toLowerCase() === key.toLowerCase() ||
              r.name.toLowerCase() ===
                (key === "CHINTU_AI"
                  ? "chintu"
                  : key === "Social_Connect"
                  ? "social-media"
                  : key === "Tempusmail"
                  ? "tempusmail"
                  : key
                ).toLowerCase()
          )
        : null;

      const githubUrl =
        details.github || (repo?.html_url ?? `https://github.com/Abhishek6827/${key}`);

      return {
        id: repo?.id ?? `curated-${index}-${key}`,
        name: details.name,
        description: details.description,
        technologies: details.technologies || [],
        demo: details.demo || null,
        html_url: githubUrl,
        backend: details.backend || null,
        category: details.category || "Engineering",
        featured: details.featured ?? false,
        stargazers_count: repo?.stargazers_count || (repo?.private ? 0 : 1),
        updated_at: repo?.updated_at || new Date().toISOString(),
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

// Memoized selectors using createSelector
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
