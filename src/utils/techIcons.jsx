import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaAngular,
  FaJava,
  FaAws,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiDjango,
  SiNextdotjs,
  SiFirebase,
  SiNotion,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiPrisma,
  SiSocketdotio,
  SiWebrtc,
  SiFfmpeg,
  SiSpringboot,
  SiDocker,
  SiKubernetes,
  SiPytest,
  SiFastapi,
  SiPytorch,
  
  SiRedis,
  SiRabbitmq,
  SiSupabase,
  SiElectron,
  SiAndroid,
  SiRazorpay,
  SiStripe,
  SiLatex,
  SiCloudflare,
  SiCloudinary,
  SiGooglechrome,
  SiOpenai,
  SiMeta,
} from "react-icons/si";
import {
  ShieldAlert,
  ShieldCheck,
  Network,
  Brain,
  Scale,
  Sliders,
  FileCode2,
  Cpu,
  Search,
  Layers,
  Zap,
  MemoryStick,
  GitBranch,
  Binary,
  HardDrive,
  Server,
  Lock,
  RefreshCw,
  Radio,
  Globe,
  Database,
  CreditCard,
  Code,
  Sparkles,
} from "lucide-react";

export const getTechIcon = (tech) => {
  const iconMap = {
    // Languages & Runtimes
    Python: <FaPython className="text-sky-400" />,
    Java: <FaJava className="text-red-500" />,
    "Java 21": <FaJava className="text-red-500" />,
    "Java 23": <FaJava className="text-red-500" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    JavaScript: <FaJsSquare className="text-yellow-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,

    // Frameworks & Libraries
    React: <FaReact className="text-blue-400" />,
    "React 19": <FaReact className="text-blue-400" />,
    "Next.js": <SiNextdotjs className="text-white" />,
    "Next.js 15": <SiNextdotjs className="text-white" />,
    FastAPI: <SiFastapi className="text-emerald-500" />,
    "Spring Boot": <SiSpringboot className="text-green-500" />,
    Django: <SiDjango className="text-green-600" />,
    Express: <SiExpress className="text-gray-300" />,
    Redux: <SiRedux className="text-purple-400" />,
    Angular: <FaAngular className="text-red-600" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    Tailwind: <SiTailwindcss className="text-cyan-400" />,
    Bootstrap: <FaBootstrap className="text-purple-500" />,
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,

    // AI Security, Red-Teaming & Evaluation
    "OWASP LLM01": <ShieldAlert size={15} className="text-rose-500" />,
    "Regex Guardrails": <ShieldCheck size={15} className="text-emerald-400" />,
    RAG: <Network size={15} className="text-sky-400" />,
    "LLM Evals": <Brain size={15} className="text-purple-400" />,
    "Cohen's Kappa": <Scale size={15} className="text-yellow-400" />,
    "Bias Mitigation": <Sliders size={15} className="text-emerald-400" />,
    "JSON Schema": <FileCode2 size={15} className="text-amber-400" />,
    "Groq LLaMA 3.3": <Cpu size={15} className="text-orange-500" />,
    "Cognitive Architecture": <Brain size={15} className="text-violet-400" />,

    // Vector Search, Caching & ML
    ChromaDB: <Database size={15} className="text-teal-400" />,
    Qdrant: <Database size={15} className="text-red-500" />,
    "Vector Search": <Search size={15} className="text-indigo-400" />,
    "Vector Similarity": <Zap size={15} className="text-cyan-400" />,
    "Sentence-Transformers": <SiPytorch className="text-orange-500" />,
    "Semantic Cache": <Zap size={15} className="text-sky-400" />,

    // Low-Level Systems & Distributed Protocols
    "RESP Protocol": <SiRedis className="text-red-600" />,
    "Raw TCP Sockets": <Server size={15} className="text-amber-500" />,
    "In-Memory Engine": <MemoryStick size={15} className="text-green-400" />,
    Concurrency: <Cpu size={15} className="text-yellow-400" />,
    "ACID Concurrency": <Lock size={15} className="text-emerald-400" />,
    Replication: <RefreshCw size={15} className="text-cyan-400" />,
    "B+Tree": <GitBranch size={15} className="text-emerald-400" />,
    "4KB Buffer Pool": <HardDrive size={15} className="text-blue-500" />,
    "Bitmap Indexing": <Binary size={15} className="text-purple-400" />,
    "Disk Paging": <HardDrive size={15} className="text-cyan-500" />,

    // Databases & Messaging
    PostgreSQL: <SiPostgresql className="text-blue-400" />,
    MongoDB: <SiMongodb className="text-green-500" />,
    Supabase: <SiSupabase className="text-emerald-400" />,
    Firebase: <SiFirebase className="text-yellow-500" />,
    Prisma: <SiPrisma className="text-blue-500" />,
    RabbitMQ: <SiRabbitmq className="text-orange-500" />,

    // Testing, Cloud & DevOps
    Pytest: <SiPytest className="text-sky-400" />,
    Docker: <SiDocker className="text-sky-400" />,
    Kubernetes: <SiKubernetes className="text-blue-500" />,
    "AWS Lambda": <FaAws className="text-amber-500" />,
    "Cloudflare Workers": <SiCloudflare className="text-orange-500" />,
    Cloudinary: <SiCloudinary className="text-blue-600" />,

    // Platforms & Mobile
    Electron: <SiElectron className="text-cyan-400" />,
    Android: <SiAndroid className="text-green-400" />,
    "Chrome Extension API": <SiGooglechrome className="text-blue-500" />,
    "LaTeX Engine": <SiLatex className="text-teal-400" />,
    LaTeX: <SiLatex className="text-teal-400" />,

    // Payments & Real-Time Comms
    Razorpay: <SiRazorpay className="text-sky-400" />,
    Stripe: <SiStripe className="text-indigo-400" />,
    "Zoho Payments": <CreditCard size={15} className="text-red-500" />,
    "Socket.io": <SiSocketdotio className="text-white" />,
    WebSockets: <Radio size={15} className="text-yellow-400" />,
    WebRTC: <SiWebrtc className="text-green-400" />,
    AssemblyAI: <Zap size={15} className="text-blue-400" />,
    FFmpeg: <SiFfmpeg className="text-green-500" />,
    "REST API": <Globe size={15} className="text-emerald-400" />,
    "RESTful APIs": <Globe size={15} className="text-emerald-400" />,
  };

  if (iconMap[tech]) {
    return iconMap[tech];
  }

  const lowerTech = tech.toLowerCase().trim();
  for (const [key, icon] of Object.entries(iconMap)) {
    if (key.toLowerCase() === lowerTech) {
      return icon;
    }
  }

  if (lowerTech.includes("ai") || lowerTech.includes("llm") || lowerTech.includes("eval")) {
    return <Brain size={15} className="text-purple-400" />;
  }
  if (lowerTech.includes("db") || lowerTech.includes("data") || lowerTech.includes("store")) {
    return <Database size={15} className="text-sky-400" />;
  }
  if (lowerTech.includes("sec") || lowerTech.includes("guard") || lowerTech.includes("auth")) {
    return <ShieldCheck size={15} className="text-emerald-400" />;
  }

  return <Sparkles size={15} className="text-teal-400" />;
};
