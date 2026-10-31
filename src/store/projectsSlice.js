// store/projectsSlice.js
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

// Fetch projects from GitHub
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await fetch(
      "https://api.github.com/users/Abhishek6827/repos"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
    const data = await response.json();

    const projectDetails = {
      "rag-prompt-injection-audit": {
        description:
          "An empirical security audit and 3-tier defense-in-depth framework (XML Data Spotlighting, Heuristic Pre-Retrieval Scanner, Canary Regex Redactor) neutralizing indirect prompt injection attacks (OWASP LLM01). Reduced breach rate from 10/10 to 0/10 with 0 false blocks on clean corporate queries and 1.8ms latency overhead (98% test coverage).",
        technologies: ["Python", "OWASP LLM01", "RAG", "Security Auditing", "Pytest", "Regex Guardrails"],
        demo: "https://rag-prompt-injection-audit.vercel.app",
        category: "AI Security / Systems",
        featured: true,
      },
      "llm-judge-audit": {
        description:
          "An empirical bias audit measuring position bias, verbosity bias (+150 filler words), and self-preference in LLM-as-a-Judge pipelines. Implements bidirectional consensus calibration that boosted human agreement from 26/30 to 28/30 with Cohen's Kappa measurement (93% test coverage).",
        technologies: ["Python", "LLM Evals", "Cohen's Kappa", "Bias Mitigation", "Pytest", "JSON Schema"],
        demo: "https://llm-judge-audit.vercel.app",
        category: "AI Evaluation & Alignment",
        featured: true,
      },
      "semantic-cache-faq": {
        description:
          "A high-performance semantic caching system for LLM FAQ bots that cuts LLM calls by 67% and reduces latency from 420ms to 1.2ms (350x speedup). Features automated cosine similarity threshold sweeps (0.75-0.95), Hindi/English lexical negation guard, and TTL/PII cache hygiene (84% test coverage).",
        technologies: ["Python", "Sentence-Transformers", "Semantic Cache", "Vector Similarity", "Pytest"],
        demo: "https://semantic-cache-faq.vercel.app",
        category: "Systems / Performance",
        featured: true,
      },
      Myntra: {
        description:
          "A React 18 e-commerce fashion clone with Redux state management, Bootstrap UI, React Router navigation, and Express.js backend. Features product catalog with categories, persistent shopping cart, order summary with price calculation, and responsive design. Deployed on GitHub Pages with Render.com backend.",
        technologies: ["React", "Redux", "Bootstrap", "React Router", "Express.js", "Node.js"],
        demo: "https://Abhishek6827.github.io/Myntra/",
        category: "E-commerce",
        featured: true,
      },
      "Resume-Extension": {
        description:
          "An AI-powered web application that instantly parses resumes and job descriptions to generate highly tailored ATS-friendly resumes. Features a robust Spring Boot Java backend with PDF extraction (Apache PDFBox) and Groq LLM integration, while the frontend is built with React and Tailwind CSS.",
        technologies: ["Java", "Spring Boot", "PDFBox", "Groq AI", "React", "Tailwind CSS"],
        demo: "https://github.com/Abhishek6827/Resume-Extension",
        category: "Productivity",
        featured: true,
      },
      Amazon: {
        description:
          "A static HTML/CSS clone of the Amazon homepage featuring product listings, search bar, and responsive layout.",
        technologies: ["HTML", "CSS"],
        // demo: "https://Abhishek6827.github.io/Amazon/",
        category: "E-commerce",
        featured: false,
      },
      Skill_Up: {
        description:
          "A React + Firebase skill enhancement platform offering free video lessons, live sessions via Zoom/Webex, and skill-oriented blogs. Features dual-role registration (learner/volunteer), document verification for volunteers, admin dashboard, and email notifications via emailjs.",
        technologies: ["React", "Firebase", "Bootstrap", "Tailwind CSS", "emailjs"],
        demo: "https://Abhishek6827.github.io/Skill_Up/",
        category: "Education",
        featured: true,
      },

      Calculator: {
        description:
          "A React + Vite calculator application with scientific functions, memory operations, and responsive design.",
        technologies: ["React", "Vite", "JavaScript", "CSS"],
        demo: "https://Abhishek6827.github.io/Calculator/",
        category: "Utility",
        featured: false,
      },
      Elante_Mall: {
        description:
          "A multi-page static website for a shopping mall built with HTML, CSS, and JavaScript. Features store directory, events page, brand showcase, booking system, team section, testimonials, image carousel, and responsive design.",
        technologies: ["HTML", "CSS", "JavaScript"],
        demo: "https://Abhishek6827.github.io/Elante_Mall/",
        category: "Business",
        featured: true,
      },
      Kanban_WorkBoard: {
        description:
          "A full-stack project management dashboard with Django backend and React frontend. Features task tracking, team collaboration, and intuitive drag-and-drop interface.",
        technologies: ["Django", "React", "Redux", "Tailwind CSS"],
        demo: "https://Abhishek6827.github.io/Kanban_WorkBoard/",
        backend: "https://abhishektiwari6827.pythonanywhere.com/",
        category: "Productivity",
        featured: true,
      },
      "Market-Seasonality-Explorer": {
        description:
          "A calendar application highlighting seasonal market trends and patterns for traders and investors.",
        technologies: ["React", "Tailwind CSS", "Recharts", "Binance API"],
        demo: "https://abhishek6827.github.io/Market-Seasonality-Explorer/",
        category: "Productivity",
        featured: true,
      },
      "E-commerce": {
        description:
          "A modern e-commerce platform with product listings, shopping cart, and user authentication.",
        technologies: ["React", "JavaScript", "Tailwind CSS", "HTML"],
        demo: "https://abhishek6827.github.io/E-commerce/",
        category: "E-commerce",
        featured: false,
      },
      Currency_Converter: {
        description:
          "A vanilla JavaScript currency converter with real-time exchange rates via API, country flag display, and responsive design.",
        technologies: ["JavaScript", "CSS", "HTML", "REST API"],
        demo: "https://abhishek6827.github.io/Currency_Converter/",
        category: "Utility",
        featured: false,
      },
      Password_Generator: {
        description:
          "A React password generator with customizable length, character types (uppercase, lowercase, numbers, symbols), strength indicator, and one-click copy to clipboard.",
        technologies: ["React", "JavaScript", "CSS"],
        demo: "https://abhishek6827.github.io/Password_Generator/",
        category: "Utility",
        featured: false,
      },
      RPS: {
        description:
          "An interactive Rock Paper Scissors game with animated hand gestures, score tracking, win/loss/draw logic, and responsive design.",
        technologies: ["JavaScript", "CSS", "HTML"],
        demo: "https://abhishek6827.github.io/RPS/",
        category: "Game",
        featured: false,
      },
      "Tic-Tac-Toe": {
        description:
          "An interactive Tic-Tac-Toe game with turn tracking, win detection, draw detection, scoreboard, and responsive design.",
        technologies: ["JavaScript", "CSS", "HTML"],
        demo: "https://abhishek6827.github.io/Tic-Tac-Toe/",
        category: "Game",
        featured: false,
      },
      "Bharat-Clock": {
        description:
          "A React + Vite digital clock application displaying Indian time zones with elegant design, smooth animations, and responsive layout.",
        technologies: ["React", "Vite", "JavaScript", "CSS"],
        demo: "https://Abhishek6827.github.io/Bharat-Clock/",
        category: "Utility",
        featured: false,
      },
      Tempusmail: {
        description:
          "A temporary email service with real-time email receiving, Firebase backend integration, and modern UI. Features include disposable email addresses, automatic email cleanup, and instant email notifications.",
        technologies: [
          "Next.js",
          "Notion Database",
          "Tailwind CSS",
          "Firebase",
        ],
        demo: "https://tempomail.getchintu.com/",
        category: "Utility",
        featured: true,
      },
      Social_Connect: {
        description:
          "A full-stack real-time social platform with Socket.io-powered chat (text, image, audio, voice & file messages), WebRTC peer-to-peer video/audio calls, emoji reactions, message editing & deletion, read receipts, typing indicators, online/offline presence tracking, JWT + Google/Facebook OAuth via Passport.js, and user profiles with avatar & cover uploads.",
        technologies: ["Angular", "TypeScript", "Node.js", "Express", "MongoDB", "Socket.io", "WebRTC", "Passport.js", "Material UI"],
        demo: "https://socialconnect.getchintu.com/",
        category: "Social",
        featured: true,
      },
      Youtube_Automation: {
        description:
          "An AI-powered automated YouTube upload pipeline: scans Google Drive folders, generates metadata via 3-tier AI system (AssemblyAI transcription → Gemini Vision frame analysis → filename fallback), uploads to YouTube with configurable scheduling, and includes copyright claim detection with auto-revert protection. Features multi-job cron automation and draft/preview workflows.",
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Generative AI", "AssemblyAI", "FFmpeg", "Tailwind CSS", "NextAuth"],
        demo: "https://automation.getchintu.com/",
        category: "Productivity",
        featured: true,
      },
      CHINTU_AI: {
        description:
          "A full-stack career preparation SaaS and multi-platform client ecosystem across Web, Desktop (Windows .exe & macOS .dmg via Electron), and Android (.apk). Features an automated resume tailoring engine compiling ATS-compliant PDFs, multi-LLM routing (Groq, Gemini, OpenRouter) with automatic fallback (<400ms routing latency, 99.8% uptime), RabbitMQ-powered audio transcription across 63 languages, dynamic skill assessments, and Razorpay credit billing with webhook-driven entitlement syncing.",
        technologies: ["React", "Electron", "Android", "FastAPI", "Node.js", "PostgreSQL", "RabbitMQ", "Razorpay", "Groq", "Gemini", "Tailwind CSS"],
        demo: "https://www.getchintu.com/",
        category: "SaaS",
        featured: true,
      },
      Jedis: {
        description:
          "A high-performance in-memory Redis server clone built from scratch in Java 23 and Spring Framework. Features full implementation of the RESP wire protocol, multi-threaded TCP socket connection handling, thread-safe storage with TTL auto-expiration, ACID transactions with optimistic locking (MULTI/EXEC/WATCH), and distributed Master-Slave replication with PSYNC/WAIT command propagation.",
        technologies: ["Java", "Spring Boot", "TCP Sockets", "RESP Protocol", "Replication", "Docker", "Kubernetes"],
        demo: "https://jedis-redis.vercel.app",
        category: "Systems / Backend",
        featured: true,
      },
      AegisDB: {
        description:
          "A lightweight, high-performance embedded database storage engine written from scratch in Java 21. Implements custom B+Tree indexing for unique and clustered records, compressed bitmap indexing for low-cardinality queries, binary model serialization, a 4KB disk page buffer pool with LRU eviction, and collection-level Reader-Writer Lock concurrency.",
        technologies: ["Java", "B+Tree", "Bitmap Index", "Storage Engine", "LRU Cache", "Disk Paging"],
        demo: "https://aegis-db.vercel.app",
        category: "Database / Systems",
        featured: true,
      },
      SynapseAI: {
        description:
          "A production-grade long-term memory engine and cognitive architecture for autonomous AI agents. Features a Two-Phase Memory Pipeline that extracts salient user facts, automatically resolves contradictions against stored knowledge, and integrates with Qdrant Vector DB for sub-150ms semantic memory retrieval with 90% token savings.",
        technologies: ["Python", "Qdrant", "OpenAI", "Mem0", "Vector Search", "Docker"],
        demo: "https://synapse-ai-xi-black.vercel.app",
        category: "AI / Machine Learning",
        featured: true,
      },
    };

    const availableRepos = data.map((repo) => repo.name);
    console.log("Available repositories:", availableRepos);

    // Make sure these names match exactly with your GitHub repo names
    const projectsToKeep = [
      "rag-prompt-injection-audit",
      "llm-judge-audit",
      "semantic-cache-faq",
      "SynapseAI",
      "Jedis",
      "AegisDB",
      "CHINTU_AI",
      "Resume-Extension",
      "Social_Connect",
      "Youtube_Automation",
      "Tempusmail",
      "Myntra",
      "Amazon",
      "Kanban_WorkBoard",
      "Skill_Up",
      "Elante_Mall",
      "Bharat-Clock",
      "Calculator",
      "Market-Seasonality-Explorer",
      "E-commerce",
      "Currency_Converter",
      "Password_Generator",
      "RPS",
      "Tic-Tac-Toe",
    ].filter((name) => availableRepos.includes(name));

    console.log("Projects to keep:", projectsToKeep);

    const filteredProjects = data.filter((project) =>
      projectsToKeep.includes(project.name)
    );

    // Order the projects
    const orderedProjects = projectsToKeep
      .map((name) => {
        const repo = filteredProjects.find((project) => project.name === name);
        if (!repo) {
          console.warn(`Project not found: ${name}`);
          return null;
        }
        return repo;
      })
      .filter(Boolean);

    const mappedProjects = orderedProjects.map((project) => {
      const details = projectDetails[project.name] || {};

      return {
        ...project,
        id: project.id,
        description: details.description || project.description,
        technologies: details.technologies || [],
        demo: details.demo || null,
        backend: details.backend || null,
        category: details.category || "Other",
        featured: details.featured || false,
        stargazers_count: project.stargazers_count || 0,
        updated_at: project.updated_at || new Date().toISOString(),
        deployStatus: "idle",
        deployedUrl: details.demo || null,
      };
    });

    // Add manual fallback projects in exact reverse priority order so unshifting keeps #1 at the top
    const customProjects = [
      "Tempusmail",
      "Youtube_Automation",
      "Social_Connect",
      "Resume-Extension",
      "CHINTU_AI",
      "AegisDB",
      "Jedis",
      "SynapseAI",
      "semantic-cache-faq",
      "llm-judge-audit",
      "rag-prompt-injection-audit",
    ];
    
    customProjects.forEach((customName) => {
      if (!availableRepos.includes(customName)) {
        const customDetails = projectDetails[customName];
        if (customDetails) {
          mappedProjects.unshift({
            id: `${customName.toLowerCase()}-custom`,
            name: customName.replace(/_/g, " "),
            description: customDetails.description,
            technologies: customDetails.technologies,
            demo: customDetails.demo,
            backend: customDetails.backend || null,
            category: customDetails.category,
            featured: customDetails.featured || false,
            stargazers_count: 0,
            updated_at: new Date().toISOString(),
            deployStatus: "idle",
            deployedUrl: customDetails.demo,
            html_url: customDetails.demo?.includes("github.com") ? customDetails.demo : null,
          });
        }
      }
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
    return projects.filter((project) => project.category === category);
  }
);

export default projectsSlice.reducer;
