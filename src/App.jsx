import React from "react";
import { motion, useAnimation, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaSun,
  FaMoon,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiPython, SiReact, SiVuedotjs, SiTensorflow, SiFastapi, SiMongodb, SiNodedotjs, SiExpress, SiJavascript, SiMysql, SiPostgresql } from 'react-icons/si';

import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "@fontsource/jetbrains-mono/800.css";
const projects = [
  {
    title: "Marketing Audit & Analytics Platform",
    description: "A full-stack analytics engine to audit digital marketing performance. Integrates Meta and Google Ads APIs for automated data ingestion and real-time dashboarding with key metrics like CTR, CPC, and conversion rates.",
    techStack: ["React", "FastAPI", "Python"],
    githubLink: "https://github.com/iamharshit19",
    liveLinks: [],
    screenshot: "./citizen.png",
    type: "Full Stack AI App"
  },
  {
    title: "AI Grievance Redressal System",
    description: "Led a 5-person team to build a comprehensive AI-based platform for citizens to lodge and track grievances, with ML classification for automatic priority routing. Achieved a project grade of 100%.",
    techStack: ["Python", "FastAPI", "React", "MongoDB"],
    githubLink: "https://github.com/iamharshit19/AI-Grievance-Redressal-System",
    liveLinks: [
      { name: "Citizen Portal", url: "https://grievance-citizen-portal.vercel.app" },
      { name: "Admin Portal", url: "https://admin-grievance-redressal-system.vercel.app" },
    ],
    screenshot: "./citizen.png",
    type: "Full Stack AI App"
  },
  {
    title: "AI Research Assistant",
    description: "An intelligent research assistant using LLMs to automate literature review, data extraction, and document summarization with a RAG pipeline for querying complex documents.",
    techStack: ["React", "FastAPI", "TensorFlow"],
    githubLink: "https://github.com/iamharshit19/AI-Research-Assistant",
    liveLinks: [],
    screenshot: "./chatbot.png",
    type: "AI/ML"
  },
  {
    title: "Image Web Scraper & AI Classifier",
    description: "Automated web scraping pipeline that extracts and curates large-scale image datasets, with BLIP and CLIP models for advanced image captioning, classification, and organization.",
    techStack: ["Python", "TensorFlow"],
    githubLink: "https://github.com/iamharshit19/Web-Scrapper-Classifier",
    liveLinks: [],
    screenshot: "./web-ally.png",
    type: "AI/ML"
  },
  {
    title: "Neural Network Chatbot",
    description: "An intelligent chatbot trained using a neural network to handle queries and provide context-aware responses.",
    techStack: ["Python", "TensorFlow"],
    githubLink: "https://github.com/iamharshit19/neural-net-based-chatbot",
    liveLinks: [],
    screenshot: "./chatbot.png",
    type: "AI/ML"
  },
  {
    title: "Lead Management System",
    description: "A full-stack CRM that automates capturing leads, tracks interactions, and helps sales teams prioritize and nurture opportunities.",
    techStack: ["React", "Express.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/iamharshit19/Lead-management-system",
    liveLinks: [],
    screenshot: "./lead-manager.png",
    type: "Full Stack Web App"
  },
];

const skills = {
  "Languages & Databases": [
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript color="#61DAFB" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
  ],
  "AI/ML": [
    { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00" /> },
    { name: "PyTorch", icon: <SiPython color="#EE4C2C" /> },
    { name: "Machine Learning", icon: <SiPython /> },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "VueJS", icon: <SiVuedotjs color="#4FC08D" /> },
    { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  ],
  "Tools & Platforms": [
    { name: "Git & Linux", icon: <FaGithub /> },
  ]
};

const education = [
  {
    institution: "Modern Institute of Technology and Research Centre",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    duration: "2021 - 2025",
    details: "Currently pursuing B.Tech with focus on modern ML approaches and full-stack development. Active in technical clubs and hands-on project creation."
  },
]

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Success Ladder Technologies",
    duration: "Sept 2024 \u2013 Present",
    location: "Alwar, RJ",
    details: [
      "Developed a marketing audit platform integrating Meta Ads API and Google Ads API to fetch live campaign metrics, automate reporting, and analyze performance.",
      "Engineered an automated system to web scrape images and classify them utilizing Computer Vision models, improving data processing efficiency.",
      "Authored a comprehensive Software Requirements Specification (SRS) to facilitate enterprise-level project scaling and team alignment"
    ]
  }
];

const TechPill = ({ tech }) => {
  const icons = {
    'python': <SiPython className="mr-1.5" />,
    'react': <SiReact className="mr-1.5" color="#61DAFB" />,
    'vuejs': <SiVuedotjs className="mr-1.5" color="#4FC08D" />,
    'tensorflow': <SiTensorflow className="mr-1.5" color="#FF6F00" />,
    'fastapi': <SiFastapi className="mr-1.5" color="#009688" />,
    'mongodb': <SiMongodb className="mr-1.5" color="#47A248" />,
    'express.js': <SiExpress className="mr-1.5" />,
    'node.js': <SiNodedotjs className="mr-1.5" color="#339933" />,
  }
  const lowerTech = tech.toLowerCase();
  return (
    <div className="flex items-center px-2 py-0.5 bg-yellowish-100/50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded text-[11px] font-medium transition-transform hover:scale-[1.03]">
      {icons[lowerTech]} {tech}
    </div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-xl shadow-subtle border border-zinc-200 dark:border-zinc-800 transition-shadow duration-300 hover:shadow-lg h-full"
      whileHover={{ y: -4 }}
    >
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 mb-1">{project.type}</p>
        <h3 className="text-lg font-bold mb-2 text-zinc-800 dark:text-zinc-100 leading-tight">{project.title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.techStack.map(tech => <TechPill key={tech} tech={tech} />)}
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.liveLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaExternalLinkAlt size="0.8em" /> {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedSection = ({ children, id, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      initial="hidden"
      animate={controls}
      className={`px-6 md:px-12 py-10 md:py-16 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

// ── HorizontalScrollCarousel Component ───────────────────────────────────────
const HorizontalScrollCarousel = ({ projects }) => {
  const targetRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Calculate how far to scroll: (n-1 cards) * (card width + gap) as vw %
  // For 6 cards at ~420px wide + 16px gap on a ~1440px screen
  const cardCount = projects.length;
  const xEnd = `-${(cardCount - 1) * 32}rem`; // approximate, works responsively

  const x = useTransform(scrollYProgress, [0, 1], ["0rem", xEnd]);

  return (
    <section ref={targetRef} style={{ height: `${cardCount * 50}vh` }} className="relative pt-10 md:pt-16">
      <div className="sticky top-0 flex flex-col justify-center h-screen overflow-hidden">
        <h2 className="text-4xl font-bold mb-10 text-center shrink-0">$ ls projects/</h2>
        <motion.div
          style={{ x }}
          className="flex gap-6 px-6 md:px-12 items-stretch will-change-transform"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[80vw] sm:w-[320px] lg:w-[400px] shrink-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored ? stored === "dark" : prefersDark;
    setDarkMode(shouldBeDark);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const textGradient = "bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400";

  return (
    <div className="min-h-screen bg-yellowish-50 dark:bg-black text-zinc-900 dark:text-zinc-50 font-mono antialiased transition-colors duration-300 selection:bg-yellowish-200 dark:selection:bg-indigo-900">

      <nav className={`flex justify-between items-center px-6 md:px-12 py-3 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-yellowish-50/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-yellowish-200 dark:border-zinc-800 shadow-sm' : 'bg-transparent'}`}>
        <a href="#" className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Harshit Gupta</h1>
        </a>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun className="w-5 h-5 text-yellow-400" /> : <FaMoon className="w-5 h-5 text-indigo-500" />}
        </button>
      </nav>

      <main>
        <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-24 md:py-32 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex-shrink-0 mb-8 md:mb-0 md:mr-16 relative"
          >
            <img
              src="myphoto.png"
              alt="Harshit Gupta"
              className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-zinc-200 dark:border-zinc-800 shadow-lg object-cover"
            />
            <div className="absolute inset-0 rounded-full border-4 border-indigo-500/50 blur-lg animate-pulse-slow"></div>
          </motion.div>

          <div className="flex-1 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold mb-3 leading-tight"
            >
              <span className={textGradient}>~whoami</span> <br /> Harshit Gupta
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl font-medium mb-6 text-zinc-600 dark:text-zinc-300"
            >
              AI/ML Enthusiast & Full Stack Developer
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg mb-8 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto md:mx-0"
            >
              Passionate about building impactful software with a focus on intelligent systems and modern web technologies.
            </motion.p>

            <motion.div
              initial="hidden" animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } } }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                href="https://github.com/iamharshit19" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-zinc-200 text-white dark:text-zinc-900 rounded-lg font-semibold shadow-md hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-all duration-300 transform hover:scale-105"
              >
                <FaGithub /> GitHub
              </motion.a>
              <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                href="https://linkedin.com/in/iamharshit19" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
              <motion.a variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                href="https://drive.google.com/file/d/1tk0MGNsrcZfDpan_nZbe_NAAub3PJ5D3/view?usp=sharing" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg font-semibold shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-all duration-300 transform hover:scale-105"
              >
                <FaFilePdf /> Resume
              </motion.a>
            </motion.div>
          </div>
        </section>

        <AnimatedSection id="about" className="!pb-0 !mb-0">
          <h2 className="text-4xl font-bold mb-12 text-center">$ cat about.me</h2>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p className="mb-4">
                Hello, I’m <span className="font-semibold text-indigo-500 dark:text-indigo-400">Harshit Gupta</span>, a B.Tech student in Artificial Intelligence and Data Science at the Modern Institute of Technology and Research Centre.
              </p>
              <p className="mb-4">
                I love building modern, responsive websites and diving into the exciting world of AI. My goal is to combine my full-stack development skills with intelligent systems to create solutions that are not only functional but also smart and impactful.
              </p>
              <p>
                I'm always eager to learn new technologies, solve real-world problems, and contribute to meaningful projects.
              </p>

              {/* Education Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                  <span className="text-indigo-500">./</span>education.log
                </h3>
                <div className="space-y-8">
                  {education.map((edu, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-indigo-500/30">
                      <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 ring-4 ring-yellowish-50 dark:ring-black"></div>
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{edu.degree}</h4>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">{edu.institution}</p>
                      <p className="text-xs text-zinc-500 font-mono mt-1 mb-2">{edu.duration}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed shadow-sm">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2 p-6 bg-white dark:bg-zinc-900/50 shadow-subtle rounded-2xl border border-zinc-200 dark:border-zinc-800">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mb-6 last:mb-0">
                  <h3 className="text-md font-semibold text-zinc-500 dark:text-zinc-400 mb-3 border-b border-zinc-200 dark:border-zinc-800 pb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map(skill => (
                      <span key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-md text-sm font-medium transition-transform hover:scale-105">
                        {skill.icon} {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        <br />
        <AnimatedSection id="experience" className="!pt-4 !pb-0 !mb-0">
          <h2 className="text-4xl font-bold mb-12 text-center">./experience.log</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8 border-l-2 border-indigo-500/30 group"
                >
                  <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-[9px] top-1.5 ring-4 ring-yellowish-50 dark:ring-black group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="bg-white dark:bg-zinc-900/50 p-6 rounded-2xl shadow-subtle border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h4>
                        <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-1">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-left md:text-right">
                        <p className="text-sm text-zinc-500 font-mono bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded inline-block">{exp.duration}</p>
                        <p className="text-sm text-zinc-500 mt-1">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-zinc-600 dark:text-zinc-400">
                      {exp.details.map((detail, bulletIdx) => (
                        <li key={bulletIdx} className="leading-relaxed pl-1">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div id="projects" className="max-w-7xl mx-auto -mt-20 md:-mt-32">
          <HorizontalScrollCarousel projects={projects} />
        </div>

        <AnimatedSection id="contact" className="!pt-0 md:!-mt-48 -mt-24 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">./contact.sh</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8">
              I'm currently open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <a
              href="mailto:harshitgupta0901@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Say Hello <FaArrowRight />
            </a>
          </div>
        </AnimatedSection>
      </main>

      <footer className="text-center py-8 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/iamharshit19" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-indigo-500 transition-colors"><FaGithub size="1.5em" /></a>
          <a href="https://linkedin.com/in/iamharshit19" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-indigo-500 transition-colors"><FaLinkedin size="1.5em" /></a>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Designed & Developed by Harshit Gupta © {new Date().getFullYear()}
        </p>
      </footer>
    </div >
  );
}