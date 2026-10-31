"use client";
import { motion, useInView } from "framer-motion";
import { Briefcase, TrendingUp, Users, Award, Zap } from "lucide-react";
import { useRef } from "react";

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Founder & Full Stack Engineer",
      company: "CHINTU AI",
      period: "02/2026 - Present",
      responsibilities: [
        "Architected and shipped an AI career preparation SaaS with multi-platform clients across Web, Desktop (Windows & macOS via Electron), and Android. Features an automated resume tailoring engine compiling ATS-compliant PDFs, multi-LLM routing (Groq, Gemini, OpenRouter) with automatic fallback (<400ms routing latency, 99.8% uptime), RabbitMQ-powered audio transcription across 63 languages, dynamic skill assessments, and Razorpay credit billing with webhook-driven entitlement syncing.",
        "Engineered a multi-LLM routing layer across Groq, Gemini, and OpenRouter with automatic fallback, processing 25,000+ monthly inferences at <400ms routing latency and 99.8% uptime.",
        "Built core modules: an automated ATS resume tailoring engine, dynamic skill assessments, a 63-language audio transcription layer via RabbitMQ workers (<2s latency), and integrated Tempomail (disposable temporary email service with automated inbox generation & cleanup).",
        "Implemented credit-based billing on Razorpay with webhook-driven entitlement syncing, idempotency keys, and signature verification (100% reconciliation accuracy); reduced user-facing LLM error rates from 7.2% to <0.4% via strict schema validation, repair prompts, and exponential backoff retry logic.",
      ],
      technologies: ["React", "Electron", "Android", "macOS (DMG)", "Windows", "FastAPI", "Node.js", "Next.js", "PostgreSQL", "Supabase", "Groq", "Gemini", "OpenRouter", "RabbitMQ", "Razorpay", "Clerk"],
    },
    {
      title: "Full Stack Developer",
      company: "Indian Capital and Investment (Coimbatore) Limited",
      period: "11/2025 - 03/2026",
      responsibilities: [
        "Migrated web deployments to Firebase App Hosting, cutting deployment cycle times from 30 minutes down to under 5 minutes.",
        "Developed secure payment gateway integrations using Stripe and Zoho Payments.",
        "Built scalable backend services with Next.js and Firebase for real-time data handling.",
        "Implemented automated webhooks for transaction status updates and Resend API notifications, alongside Notion API integration for workflow management.",
      ],
      technologies: ["Next.js", "Firebase", "Stripe", "Zoho Payments", "Resend API", "Notion API"],
    },
    {
      title: "Software Developer",
      company: "Vasnaani Sanskaran",
      period: "08/2024 - 10/2025",
      responsibilities: [
        "Introduced memoized Reselect selectors across 12 Redux components, optimizing state selectors and boosting frontend render performance by ~25%.",
        "Developed and maintained the official web platform using React and Django with a focus on performance and scalability.",
        "Integrated Django REST APIs with React frontend modules, ensuring seamless data flow and consistent application state.",
        "Optimized database structures, improved query efficiency, and resolved critical UI/UX bottlenecks.",
      ],
      technologies: ["React", "Redux", "JavaScript", "Tailwind CSS", "Django REST", "HTML", "CSS"],
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Hoping Minds",
      period: "01/2024 - 06/2024",
      responsibilities: [
        "Rebuilt core application pages into modular React components consuming Django REST APIs, lifting the Lighthouse mobile performance score from 68 to 94.",
        "Developed and maintained full-stack web applications using React, Redux, and Django.",
        "Implemented responsive mobile-first layouts and optimized client-side asset delivery for fast initial load times.",
        "Participated in code reviews and adhered to clean code and robust software design standards.",
      ],
      technologies: ["React", "Redux", "Django", "PostgreSQL", "JavaScript"],
    },
    {
      title: "Web Developer",
      company: "Quizario",
      period: "11/2023 - 12/2023",
      responsibilities: [
        "Built interactive quiz applications with modern web technologies",
        "Coordinated with team members to ensure project deliverables",
        "Implemented user authentication and data management features",
        "Optimized application performance and user experience",
      ],
      technologies: ["React", "JavaScript", "Bootstrap", "RESTful APIs"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const getCardVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -120 : 120,
      rotateY: index % 2 === 0 ? -25 : 25,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: index * 0.25,
      },
    },
  });

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 py-12 md:py-20 relative overflow-hidden"
    >
      {/* Animated Background Icons - Repositioned to avoid cards */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {[TrendingUp, Users, Award, Zap].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${10 + i * 20}%`,
              left: i % 2 === 0 ? `${5 + i * 3}%` : `${88 - i * 3}%`,
            }}
            animate={{
              y: [0, -35, 0],
              x: i % 2 === 0 ? [0, 30, 0] : [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {/* Glow effect behind icon */}
            <motion.div
              className="absolute inset-0 blur-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Icon className="text-blue-500" size={42 + i * 4} />
            </motion.div>
            {/* Main icon */}
            <Icon
              className="relative text-cyan-300 opacity-70"
              size={42 + i * 4}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Animated Timeline Line */}
        <motion.div
          className="absolute left-1/2 top-32 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center flex justify-center items-center relative"
          initial={{ opacity: 0, y: -50, rotateX: -20, scale: 0.9 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0, scale: 1 }
              : { opacity: 0, y: -50, rotateX: -20, scale: 0.9 }
          }
          transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
        >
          {/* Glow effect behind title */}
          <motion.span
            className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 blur-2xl -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Briefcase className="mr-3 text-blue-400" size={36} />
          </motion.div>
          <motion.span
            className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            style={{ backgroundSize: "200% 200%" }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Professional Experience
          </motion.span>
        </motion.h2>

        <motion.div
          className="space-y-12 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={getCardVariants(index)}
              className="relative"
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900 z-10 hidden md:block"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: index * 0.3 + 0.5 }}
              />

              <motion.div
                className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 relative overflow-hidden group"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <motion.h3
                        className="text-2xl font-bold mb-2 text-blue-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.5, delay: index * 0.3 + 0.6 }}
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.p
                        className="text-xl text-gray-300 mb-2 font-medium"
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: -20 }
                        }
                        transition={{ duration: 0.5, delay: index * 0.3 + 0.7 }}
                      >
                        {exp.company}
                      </motion.p>
                    </div>
                    <motion.span
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.8 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>

                  <motion.ul
                    className="space-y-3 mb-6"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: index * 0.3 + 0.9,
                        },
                      },
                    }}
                  >
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        className="text-gray-300 flex items-start"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <span className="text-blue-400 mr-2">▹</span>
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: index * 0.3 + 1.2,
                        },
                      },
                    }}
                  >
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-default"
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
