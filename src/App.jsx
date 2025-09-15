import React from "react";
import { motion, useAnimation, useScroll, useMotionValueEvent } from "framer-motion";
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
import { SiPython, SiReact, SiVuedotjs, SiTensorflow, SiFastapi, SiMongodb, SiNodedotjs, SiExpress, SiJavascript, SiMysql,SiPostgresql } from 'react-icons/si';

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

const projects = [
  {
    title: "AI Grievance Redressal System",
    description: "A centralized AI-based platform for citizens to lodge and track grievances, with a dedicated portal for officials.",
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
    title: "Neural Network Chatbot",
    description: "An intelligent chatbot trained using a neural network to handle queries and provide context-aware responses.",
    techStack: ["Python", "TensorFlow"],
    githubLink: "https://github.com/iamharshit19/neural-net-based-chatbot",
    liveLinks: [],
    screenshot: "./chatbot.png",
    type: "AI/ML"
  },
  {
    title: "Web Ally Widget",
    description: "A compact and user-friendly widget that can be easily integrated into any website to enhance web accessibility.",
    techStack: ["VueJS"],
    githubLink: "https://github.com/iamharshit19/Web-ally-widget",
    liveLinks: [],
    screenshot: "./web-ally.png",
    type: "Frontend Widget"
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
        { name: "JavaScript", icon: <SiJavascript color="#61DAFB"/> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248"/> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791"/> },
        { name: "MySQL", icon: <SiMysql    color="#4479A1"/> },
    ],
    "AI/ML": [
        { name: "TensorFlow", icon: <SiTensorflow color="#FF6F00"/> },
        { name: "PyTorch", icon: <SiPython color="#EE4C2C"/> },
        { name: "Machine Learning", icon: <SiPython /> },
    ],
    "Frameworks & Libraries": [
        { name: "React", icon: <SiReact color="#61DAFB"/> },
        { name: "VueJS", icon: <SiVuedotjs color="#4FC08D"/> },
        { name: "FastAPI", icon: <SiFastapi color="#009688"/> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933"/> },
    ],
    "Tools & Platforms": [
        { name: "Git & Linux", icon: <FaGithub /> },
    ]
}

const TechPill = ({ tech }) => {
    const icons = {
        'python': <SiPython className="mr-1.5" />,
        'react': <SiReact className="mr-1.5" color="#61DAFB"/>,
        'vuejs': <SiVuedotjs className="mr-1.5" color="#4FC08D"/>,
        'tensorflow': <SiTensorflow className="mr-1.5" color="#FF6F00"/>,
        'fastapi': <SiFastapi className="mr-1.5" color="#009688"/>,
        'mongodb': <SiMongodb className="mr-1.5" color="#47A248"/>,
        'express.js': <SiExpress className="mr-1.5"/>,
        'node.js': <SiNodedotjs className="mr-1.5" color="#339933"/>,
    }
    const lowerTech = tech.toLowerCase();
    return (
        <div className="flex items-center px-3 py-1 bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
           {icons[lowerTech]} {tech}
        </div>
    )
}

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-subtle border border-slate-200 dark:border-slate-800 transition-shadow duration-300 hover:shadow-lg"
      whileHover={{ y: -6 }}
    >
      <div className="overflow-hidden rounded-t-2xl border-b border-slate-200 dark:border-slate-800">
        <img
          src={project.screenshot}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-auto object-cover aspect-video bg-slate-100 dark:bg-slate-800 transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
         <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mb-1">{project.type}</p>
        <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map(tech => <TechPill key={tech} tech={tech} />)}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-auto pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
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
              className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaExternalLinkAlt size="0.8em"/> {link.name}
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
        className={`px-6 md:px-12 py-20 md:py-28 max-w-7xl mx-auto ${className}`}
      >
        {children}
      </motion.section>
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
  
  const textGradient = "bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-violet-500";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-inter antialiased transition-colors duration-300">
      
      <nav className={`flex justify-between items-center px-6 md:px-12 py-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm' : 'bg-transparent'}`}>
        <a href="#" className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Harshit Gupta</h1>
        </a>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
              src="/myphoto.png"
              alt="Harshit Gupta"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-slate-200 dark:border-slate-800 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full border-4 border-indigo-500/50 blur-lg animate-pulse-slow"></div>
          </motion.div>

          <div className="flex-1 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold mb-3 leading-tight"
            >
              <span className={textGradient}>Harshit Gupta</span>
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl font-medium mb-6 text-slate-600 dark:text-slate-300"
            >
              AI/ML Enthusiast & Full Stack Developer
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg mb-8 text-slate-500 dark:text-slate-400 max-w-xl mx-auto md:mx-0"
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
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-200 text-white dark:text-slate-900 rounded-lg font-semibold shadow-md hover:bg-slate-700 dark:hover:bg-slate-300 transition-all duration-300 transform hover:scale-105"
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
                href="https://drive.google.com/file/d/19xvRO3V_sSLrqLf9JksZu6QorSR55hTA/view?usp=sharing" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg font-semibold shadow-md hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all duration-300 transform hover:scale-105"
              >
                <FaFilePdf /> Resume
              </motion.a>
            </motion.div>
          </div>
        </section>

        <AnimatedSection id="about">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-5 gap-12 items-start">
                <div className="md:col-span-3 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    <p className="mb-4">
                    Hello, I’m <span className="font-semibold text-indigo-500 dark:text-indigo-400">Harshit Gupta</span>, a B.Tech student in Artificial Intelligence and Data Science at the Modern Institute of Technology and Research Centre.
                    </p>
                    <p className="mb-4">
                    I love building modern, responsive websites and diving into the exciting world of AI. My goal is to combine my full-stack development skills with intelligent systems to create solutions that are not only functional but also smart and impactful.
                    </p>
                    <p>
                    I'm always eager to learn new technologies, solve real-world problems, and contribute to meaningful projects.
                    </p>
                </div>
                
                <div className="md:col-span-2 p-6 bg-white dark:bg-slate-900/50 shadow-subtle rounded-2xl border border-slate-200 dark:border-slate-800">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category} className="mb-6 last:mb-0">
                            <h3 className="text-md font-semibold text-slate-500 dark:text-slate-400 mb-3 border-b border-slate-200 dark:border-slate-800 pb-2">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillList.map(skill => (
                                    <span key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-md text-sm font-medium transition-transform hover:scale-105">
                                        {skill.icon} {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>
        
        <AnimatedSection id="projects">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
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

      <footer className="text-center py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="flex justify-center gap-6 mb-4">
            <a href="https://github.com/iamharshit19" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-500 transition-colors"><FaGithub size="1.5em"/></a>
            <a href="https://linkedin.com/in/iamharshit19" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-500 transition-colors"><FaLinkedin size="1.5em"/></a>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Designed & Developed by Harshit Gupta © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}