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
      Myntra: {
        description:
          "A React 18 e-commerce fashion clone with Redux state management, Bootstrap UI, React Router navigation, and Express.js backend. Features product catalog with categories, persistent shopping cart, order summary with price calculation, and responsive design. Deployed on GitHub Pages with Render.com backend.",
        technologies: ["React", "Redux", "Bootstrap", "React Router", "Express.js", "Node.js"],
        demo: "https://Abhishek6827.github.io/Myntra/",
        category: "E-commerce",
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
          "A full-stack AI-Powered Career Preparation Platform: real-time AI answers under 200ms with multi-LLM routing (Groq, OpenRouter, DashScope), interactive mock interview simulator with scoring, AI resume tailoring to match job descriptions, credit-based usage with Stripe billing, Clerk auth, and Supabase data layer. Cross-platform via Electron desktop app with stealth overlay and 63+ language transcription.",
        technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Clerk", "Stripe", "Electron", "Tailwind CSS", "Framer Motion"],
        demo: "https://www.getchintu.com/",
        category: "SaaS",
        featured: true,
      },
    };

    const availableRepos = data.map((repo) => repo.name);
    console.log("Available repositories:", availableRepos);

    // Make sure these names match exactly with your GitHub repo names
    const projectsToKeep = [
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

    // Add manual fallback projects if not in GitHub repos
    const customProjects = ["Social_Connect", "Youtube_Automation", "Tempusmail", "CHINTU_AI"];
    
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
            html_url: null, // No GitHub repo
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
