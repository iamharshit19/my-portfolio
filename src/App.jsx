import React, { useState, useEffect } from "react";
import { WindowChrome, useWorkspace, GhostTaskbar, WorkspaceFloatingLayer } from "./components/Workspace";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaArrowRight,
  FaExternalLinkAlt,
  FaTerminal
} from "react-icons/fa";
import { SiPython, SiReact, SiVuedotjs, SiTensorflow, SiFastapi, SiMongodb, SiNodedotjs, SiExpress, SiJavascript, SiMysql, SiPostgresql, SiArchlinux } from 'react-icons/si';

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
    type: "Full Stack AI App"
  },
  {
    title: "AI Research Assistant",
    description: "An intelligent research assistant using LLMs to automate literature review, data extraction, and document summarization with a RAG pipeline for querying complex documents.",
    techStack: ["React", "FastAPI", "TensorFlow"],
    githubLink: "https://github.com/iamharshit19/AI-Research-Assistant",
    liveLinks: [],
    type: "AI/ML"
  },
  {
    title: "Image Web Scraper & AI Classifier",
    description: "Automated web scraping pipeline that extracts and curates large-scale image datasets, with BLIP and CLIP models for advanced image captioning, classification, and organization.",
    techStack: ["Python", "TensorFlow"],
    githubLink: "https://github.com/iamharshit19/Web-Scrapper-Classifier",
    liveLinks: [],
    type: "AI/ML"
  },
  {
    title: "Neural Network Chatbot",
    description: "An intelligent chatbot trained using a neural network to handle queries and provide context-aware responses.",
    techStack: ["Python", "TensorFlow"],
    githubLink: "https://github.com/iamharshit19/neural-net-based-chatbot",
    liveLinks: [],
    type: "AI/ML"
  },
  {
    title: "Lead Management System",
    description: "A full-stack CRM that automates capturing leads, tracks interactions, and helps sales teams prioritize and nurture opportunities.",
    techStack: ["React", "Express.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/iamharshit19/Lead-management-system",
    liveLinks: [],
    type: "Full Stack Web App"
  },
];

const skills = {
  "Languages & Databases": [
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  "AI/ML": [
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "PyTorch", icon: <SiPython /> },
    { name: "Machine Learning", icon: <SiPython /> },
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: <SiReact /> },
    { name: "VueJS", icon: <SiVuedotjs /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
  ],
  "Tools & Platforms": [
    { name: "Arch Linux", icon: <SiArchlinux /> },
    { name: "Git", icon: <FaGithub /> },
  ]
};

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Success Ladder Technologies",
    duration: "Sept 2024 - Present",
    location: "Alwar, RJ",
    details: [
      "Developed a marketing audit platform integrating Meta Ads API and Google Ads API to fetch live campaign metrics, automate reporting, and analyze performance.",
      "Engineered an automated system to web scrape images and classify them utilizing Computer Vision models, improving data processing efficiency.",
      "Authored a comprehensive Software Requirements Specification (SRS) to facilitate enterprise-level project scaling and team alignment"
    ]
  }
];

const CursorBlink = () => (
  <motion.span
    animate={{ opacity: [1, 0] }}
    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
    className="inline-block w-[0.45em] h-[0.9em] bg-[var(--accent)] ml-2 -mb-1"
  />
);

const SectionHeader = ({ num, title }) => (
  <div className="flex items-center gap-6 mb-16">
    <div className="mono-font text-[var(--text-muted)] text-sm">[{num}]</div>
    <div className="h-[1px] flex-grow bg-[var(--border)]"></div>
    <h2 className="display-font text-2xl font-medium tracking-tight text-[var(--text-primary)] pr-4">{title}</h2>
  </div>
);

const TechPill = ({ tech }) => {
  return (
    <div className="tech-pill">
      {tech}
    </div>
  )
}


export default function Portfolio() {
  const [typedName, setTypedName] = useState("");
  const fullName = "Harshit Gupta";

  // Workspace state for each section
  const projectItems = projects.map((p, i) => ({ id: `proj-${i}`, ...p }));
  const projectWS = useWorkspace(projectItems);

  const expItems = experience.map((e, i) => ({ id: `exp-${i}`, title: `${e.role} — ${e.company}`, ...e }));
  const expWS = useWorkspace(expItems);

  const aboutItems = [
    { id: 'about-edu', title: '~/.config/hypr/education.conf' },
    { id: 'about-skills', title: 'ls -la ./skills' },
  ];
  const aboutWS = useWorkspace(aboutItems);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {
      setTypedName(fullName);
      return;
    }

    let i = 0;
    let nameInterval;

    nameInterval = setInterval(() => {
      setTypedName(fullName.substring(0, i + 1));
      i++;
      if (i === fullName.length) {
        clearInterval(nameInterval);
      }
    }, 100);

    return () => clearInterval(nameInterval);
  }, []);

  return (
    <div className="min-h-screen">
      
      {/* Ambient glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-[#C6A0F6] top-[-200px] left-[-200px]" />
      <div className="glow-orb w-[500px] h-[500px] bg-[#8BD5CA] top-[20%] right-[-100px] opacity-10" />

      {/* Floating Waybar-Style Nav */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav className="flex items-center gap-2 md:gap-4 pointer-events-auto">
          {/* Logo Pill */}
          <div className="glass-nav nav-module px-4 py-2.5 shadow-xl">
            <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <FaTerminal className="text-[var(--accent)]" />
              <span className="mono-font font-bold text-sm tracking-tighter">HG<span className="text-[var(--accent)]">.</span></span>
            </a>
          </div>
          
          {/* Links Pill */}
          <div className="glass-nav nav-module px-2 py-1 hidden md:flex shadow-xl">
            <a href="#projects" className="px-4 py-1.5 rounded-full hover:bg-[rgba(255,255,255,0.05)] text-[var(--text-primary)] mono-font text-xs font-medium transition-colors">Projects</a>
            <a href="#experience" className="px-4 py-1.5 rounded-full hover:bg-[rgba(255,255,255,0.05)] text-[var(--text-primary)] mono-font text-xs font-medium transition-colors">Experience</a>
            <a href="#about" className="px-4 py-1.5 rounded-full hover:bg-[rgba(255,255,255,0.05)] text-[var(--text-primary)] mono-font text-xs font-medium transition-colors">About</a>
          </div>

          {/* Status Pill — traffic-light colors */}
          <div className="glass-nav nav-module px-4 py-3 shadow-xl flex items-center justify-center">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ED8796] shadow-[0_0_6px_rgba(237,135,150,0.7)]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#EED49F] shadow-[0_0_6px_rgba(238,212,159,0.6)]"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-[#A6DA95] shadow-[0_0_6px_rgba(166,218,149,0.6)] animate-pulse"></span>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-[1fr_450px] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-panel rounded-full mb-8 mono-font text-xs border border-[rgba(255,255,255,0.1)]">
               <span className="text-[var(--accent)]">~</span>
               <span className="text-[var(--text-muted)]">/</span>
               <span className="text-[var(--teal)]">portfolio</span>
               <span className="text-[var(--text-muted)]">#</span>
               <span className="text-[var(--text-primary)] opacity-80">./init.sh</span>
            </div>
            
            <h1 className="display-font text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.05] drop-shadow-2xl">
              {typedName}{typedName !== fullName && <CursorBlink />}{typedName === fullName && <CursorBlink />}
            </h1>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="https://github.com/iamharshit19" target="_blank" rel="noreferrer"
                className="btn-primary">
                <FaGithub /> GitHub
              </a>
              <a href="https://linkedin.com/in/iamharshit19" target="_blank" rel="noreferrer"
                className="btn-outline">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://drive.google.com/file/d/100b0iH9QVWrI5WoKp8aZ0qQToBpFRYEF/view?usp=sharing" target="_blank" rel="noreferrer"
                className="btn-outline">
                <FaFilePdf /> Resume
              </a>
            </div>
          </div>

          {/* hyprland.conf Easter Egg Card — draggable window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <WindowChrome title="~/.config/hypr/hyprland.conf" className="hypr-block" draggable>
              <span className="hypr-line"><span className="hypr-comment"># ----------------------------------------------------- </span></span>
              <span className="hypr-line"><span className="hypr-comment"># Environment Variables</span></span>
              <span className="hypr-line"><span className="hypr-comment"># ----------------------------------------------------- </span></span>
              <span className="hypr-line"><span className="hypr-keyword">env</span> = <span className="hypr-var">USER</span>, <span className="hypr-string">"Harshit Gupta"</span></span>
              <span className="hypr-line"><span className="hypr-keyword">env</span> = <span className="hypr-var">ROLE</span>, <span className="hypr-string">"AI/ML & Full Stack Developer"</span></span>
              <span className="hypr-line"><span className="hypr-keyword">env</span> = <span className="hypr-var">STATUS</span>, <span className="hypr-string">"Building intelligent systems"</span></span>
              <span className="hypr-line"><br/></span>
              <span className="hypr-line"><span className="hypr-comment"># ----------------------------------------------------- </span></span>
              <span className="hypr-line"><span className="hypr-comment"># General Settings</span></span>
              <span className="hypr-line"><span className="hypr-comment"># ----------------------------------------------------- </span></span>
              <span className="hypr-line"><span className="hypr-section">general</span> {'{'}</span>
              <span className="hypr-line pl-4">gaps_in <span className="hypr-assign">=</span> <span className="hypr-number">5</span></span>
              <span className="hypr-line pl-4">gaps_out <span className="hypr-assign">=</span> <span className="hypr-number">20</span></span>
              <span className="hypr-line pl-4">border_size <span className="hypr-assign">=</span> <span className="hypr-number">2</span></span>
              <span className="hypr-line pl-4">col.active_border <span className="hypr-assign">=</span> <span className="hypr-string">rgba(C6A0F6ee) rgba(8BD5CAee) 45deg</span></span>
              <span className="hypr-line pl-4">col.inactive_border <span className="hypr-assign">=</span> <span className="hypr-string">rgba(494D64aa)</span></span>
              <span className="hypr-line pl-4">layout <span className="hypr-assign">=</span> <span className="hypr-value">dwindle</span></span>
              <span className="hypr-line">{'}'}</span>
            </WindowChrome>
          </motion.div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Projects — workspace-driven tiling */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeader num="01" title="Selected Works" />

        {/* Floating windows layer */}
        <WorkspaceFloatingLayer
          floating={projectWS.floating}
          close={(id) => projectWS.close(id)}
          renderContent={(item) => (
            <div className="p-6 space-y-3">
              <h3 className="display-font text-xl font-bold text-[var(--text-primary)]">{item.title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2">{item.techStack.map(t => <TechPill key={t} tech={t} />)}</div>
            </div>
          )}
          renderModal={(item) => (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="mono-font text-[10px] text-[var(--accent)] uppercase tracking-widest border border-[var(--border)] px-3 py-1 rounded-full">{item.type}</span>
                {item.githubLink && <a href={item.githubLink} target="_blank" rel="noreferrer" className="mono-font text-xs text-[var(--teal)] flex items-center gap-1 hover:underline"><FaGithub /> GitHub</a>}
                {item.liveLinks.map((l, i) => <a key={i} href={l.url} target="_blank" rel="noreferrer" className="mono-font text-xs text-[var(--indigo)] flex items-center gap-1 hover:underline"><FaExternalLinkAlt size={11}/> {l.name}</a>)}
              </div>
              <h2 className="display-font text-3xl font-bold text-[var(--text-primary)]">{item.title}</h2>
              <div className="h-px bg-gradient-to-r from-[var(--accent)] via-[var(--teal)] to-transparent"/>
              <p className="text-[var(--text-muted)] leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2">{item.techStack.map(t => <TechPill key={t} tech={t} />)}</div>
            </div>
          )}
        />

        {/* Tiled grid — reflowes when items close */}
        <div className="flex flex-wrap gap-5">
          {projectWS.tiled.map((project) => {
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{ flexBasis: 'calc(50% - 10px)', flexGrow: 1, minWidth: 300, minHeight: 300 }}
              >
                <WindowChrome
                  id={project.id}
                  title={`~/projects/${project.title.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`}
                  className="h-full flex flex-col"
                  onClose={() => projectWS.close(project.id)}
                  onFloat={() => projectWS.float(project.id)}
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-5">
                      <span className="mono-font text-[10px] text-[var(--accent)] uppercase tracking-widest border border-[var(--border)] px-3 py-1 rounded-full">{project.type}</span>
                      <div className="flex gap-3 text-[var(--text-muted)]">
                        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)] transition-colors"><FaGithub size={15}/></a>}
                        {project.liveLinks.map((l,idx) => <a key={idx} href={l.url} target="_blank" rel="noreferrer" className="hover:text-[var(--teal)] transition-colors"><FaExternalLinkAlt size={13}/></a>)}
                      </div>
                    </div>
                    <h3 className="display-font font-bold text-[var(--text-primary)] mb-3 text-xl">{project.title}</h3>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">{project.techStack.map(t => <TechPill key={t} tech={t}/>)}</div>
                  </div>
                </WindowChrome>
              </motion.div>
            );
          })}
        </div>

        {/* Ghost taskbar */}
        <GhostTaskbar closed={projectWS.closed.map(p => ({ id: p.id, title: `~/projects/${p.title.toLowerCase().replace(/[^a-z0-9]+/g,'-')}` }))} onRestore={projectWS.restore} />
      </section>

      <hr className="section-divider" />

      {/* Experience */}
      <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeader num="02" title="Experience" />
        <WorkspaceFloatingLayer floating={expWS.floating} close={expWS.close}
          renderContent={(exp) => (
            <div className="p-6 space-y-3">
              <h3 className="display-font text-xl font-bold">{exp.role}</h3>
              <div className="text-[var(--text-muted)]">{exp.company} • {exp.location}</div>
            </div>
          )}
        />
        <div className="grid md:grid-cols-[1fr_2.5fr] gap-12">
          <div className="hidden md:block h-fit sticky top-32">
            <WindowChrome id="syslog" title="system_log.txt" onClose={() => {}} onFloat={() => {}}>
              <div className="px-4 pb-4 mono-font text-[11px] text-[var(--text-muted)] leading-relaxed space-y-2">
                <p><span className="text-[var(--teal)]">[INFO]</span> Loading timeline...</p>
                <p><span className="text-[var(--teal)]">[INFO]</span> 1 entry found.</p>
                <p className="text-[var(--accent)] animate-pulse">Waiting for new nodes...</p>
              </div>
            </WindowChrome>
          </div>
          <div className="space-y-6">
            {expWS.tiled.map((exp) => (
              <motion.div key={exp.id} layout initial={{ opacity:0,y:20 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,scale:0.95 }} transition={{ duration:0.3 }}>
                <WindowChrome id={exp.id} title={exp.title} onClose={() => expWS.close(exp.id)} onFloat={() => expWS.float(exp.id)}>
                  <div className="px-6 pb-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-glow)] blur-[60px] pointer-events-none"/>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-6 border-b border-[var(--border)] pb-5 pt-2">
                      <div>
                        <h3 className="display-font text-2xl font-bold text-[var(--text-primary)] mb-1">{exp.role}</h3>
                        <div className="text-[var(--text-muted)]">{exp.company} • {exp.location}</div>
                      </div>
                      <div className="mono-font text-sm text-[var(--accent)] mt-3 md:mt-0 bg-[var(--accent-dim)] px-4 py-1.5 rounded-full border border-[var(--accent)]">{exp.duration}</div>
                    </div>
                    <ul className="space-y-4">
                      {exp.details.map((d,i) => (
                        <li key={i} className="flex gap-3 leading-relaxed">
                          <span className="text-[var(--accent)] mt-1">▹</span>
                          <span className="text-sm text-[var(--text-muted)]">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </WindowChrome>
              </motion.div>
            ))}
            <GhostTaskbar closed={expWS.closed.map(e => ({ id: e.id, title: e.title }))} onRestore={expWS.restore}/>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* About & Skills */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeader num="03" title="About & Skills" />
        <WorkspaceFloatingLayer floating={aboutWS.floating} close={aboutWS.close} renderContent={() => null}/>
        <div className="flex flex-wrap gap-6">
          {aboutWS.tiled.map((item) => (
            <motion.div key={item.id} layout initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.3 }}
              style={{ flexBasis: '45%', flexGrow: 1, minWidth: 300 }}>
              {item.id === 'about-edu' ? (
                <WindowChrome id={item.id} title={item.title} className="hypr-block" onClose={() => aboutWS.close(item.id)} onFloat={() => aboutWS.float(item.id)}>
                  <span className="hypr-line"><span className="hypr-comment"># Education Module</span></span>
                  <span className="hypr-line"><span className="hypr-section">education</span> {'{'}</span>
                  <span className="hypr-line pl-4">institution <span className="hypr-assign">=</span> <span className="hypr-string">"Modern Institute of Technology"</span></span>
                  <span className="hypr-line pl-4">degree <span className="hypr-assign">=</span> <span className="hypr-string">"B.Tech AI & Data Science"</span></span>
                  <span className="hypr-line pl-4">grad_year <span className="hypr-assign">=</span> <span className="hypr-number">2025</span></span>
                  <span className="hypr-line pl-4">focus <span className="hypr-assign">=</span> <span className="hypr-string">"Modern ML & Full-Stack"</span></span>
                  <span className="hypr-line">{'}'}</span>
                </WindowChrome>
              ) : (
                <WindowChrome id={item.id} title={item.title} onClose={() => aboutWS.close(item.id)} onFloat={() => aboutWS.float(item.id)}>
                  <div className="px-4 pb-4 space-y-6">
                    {Object.entries(skills).map(([cat, list]) => (
                      <div key={cat}>
                        <div className="mono-font text-[11px] text-[var(--text-muted)] mb-3 uppercase tracking-widest border-l-2 border-[var(--accent)] pl-2">{cat}</div>
                        <div className="flex flex-wrap gap-2">{list.map(s => <span key={s.name} className="skill-chip">{s.icon} {s.name}</span>)}</div>
                      </div>
                    ))}
                  </div>
                </WindowChrome>
              )}
            </motion.div>
          ))}
        </div>
        <GhostTaskbar closed={aboutWS.closed.map(i => ({ id: i.id, title: i.title }))} onRestore={aboutWS.restore}/>
      </section>

      {/* Footer / Contact */}
      <footer className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(198,160,246,0.1)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="display-font text-5xl md:text-6xl font-bold mb-6 tracking-tight">Let's compile together.</h2>
          <p className="text-[var(--text-muted)] text-lg mb-10 max-w-lg mx-auto font-medium">
            Currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is open.
          </p>
          <a href="mailto:harshitgupta0901@gmail.com"
            className="btn-primary text-lg px-8 py-4 rounded-full">
            Execute Contact <FaArrowRight />
          </a>
        </div>
        
        <div className="mt-32 pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-4 text-[var(--text-muted)] mono-font text-xs">
          <div>© {new Date().getFullYear()} Harshit Gupta. All rights reserved.</div>
          <div className="flex items-center gap-2">
             <SiArchlinux className="text-[var(--accent)]" />
             <span>crafted on arch linux + hyprland</span>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/iamharshit19" className="hover:text-[var(--text-primary)] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/iamharshit19" className="hover:text-[var(--text-primary)] transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
}