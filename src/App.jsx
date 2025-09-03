import React from "react";
import { motion } from "framer-motion";


export default function Portfolio() {
  

  return (
    
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      <nav className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 bg-white z-50">
      <div className="flex items-center space-x-3">
   
    <h1 className="text-2xl font-bold">Harshit Gupta</h1>
    
        
  </div>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

    
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-200">
        <img
      src="/myphoto.png"
      alt="Harshit Gupta"
      className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg mb-4"
    />
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4">
          AI/ML Enthusiast & Developer
        </motion.h2>
        <p className="text-lg max-w-2xl mb-6">
          Passionate about Artificial Intelligence, Machine Learning, and building impactful software solutions.
        </p>
        <div className="flex space-x-4">
  
  <a href="https://github.com/iamharshit19" target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-xl shadow-md hover:bg-gray-800">
  <span>GitHub</span>
  <img
    src="https://img.icons8.com/?size=100&id=xLUf9A2uno5L&format=png&color=000000"
    width="22"
    height="22"
    alt="github"
    className="invert" 
  />
</a>

  <a href="https://linkedin.com/in/iamharshit19" target="_blank" rel="noreferrer"className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700">
  <span>LinkedIn</span>
  <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="linkedin" width="20" height="20" className="invert"/></a>
         
         
 <a href="https://drive.google.com/file/d/1LjBu_pHP1PyMm5Ud2iEPVk27K-uWCfMD/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-900 rounded-xl shadow-md hover:bg-gray-300">
 <span>Resume</span>
 <img src="https://img.icons8.com/?size=100&id=23882&format=png&color=000000" alt="linkedin" width="20" height="20" />
 </a>
        </div>
      </section>

     <section id="about" className="px-8 py-16 bg-gray-50">
  <div className="grid md:grid-cols-2 gap-12 items-start">
    
    <div>
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="max-w-3xl text-lg leading-relaxed">
        Hi, I’m <span className="font-semibold">Harshit Gupta</span>, a student currently pursuing 
        B.Tech in Artificial Intelligence and Data Science from Modern Institute of Technology and 
        Research Centre.
        <br /><br />
        I enjoy building modern, responsive websites and exploring the world of Artificial Intelligence 
        and Machine Learning. My interests lie in combining full-stack development with AI/ML solutions 
        to create applications that are not only functional but also intelligent. 
        <br /><br />
        I’ve worked on projects ranging from web applications to AI-driven systems, and I’m always eager 
        to learn new technologies, solve real-world problems, and contribute to impactful projects.
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="bg-white shadow-md rounded-2xl p-6">
        <ul className="grid grid-cols-2 gap-3 text-gray-700">
          <li>Python</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>FastAPI</li>
          <li>Express.js</li>
          <li>TensorFlow & PyTorch</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>Git & Linux</li>
          <li>Machine Learning</li>
          <li>MySQL</li>
          <li>VueJS</li>
        </ul>
      </div>
    </div>
  </div>
</section>



      <section id="projects" className="px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">AI Grievance Redressal System</h3>
            <p className="mb-2">Centralized AI-based grievance lodging and tracking platform for citizens and officials.</p>
            <p className="text-sm text-gray-600 mb-2">Tech Stack: Python, FastAPI, React, MongoDB</p>
            <a href="https://github.com/iamharshit19/AI-Grievance-Redressal-System" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GitHub Repo</a> | 
            <a href="https://grievance-citizen-portal.vercel.app/announcement" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline"> Citizen-Portal</a>
            <a href="https://admin-grievance-redressal-system.vercel.app" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline"> | Admin Portal</a>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">API Key Manager</h3>
            <p className="mb-2">Secure system to manage and distribute API keys for applications.</p>
            <p className="text-sm text-gray-600 mb-2">Tech Stack: Express.js, MongoDB</p>
            <a href="https://github.com/iamharshit19/api-key-manager" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GitHub Repo</a>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Neural Network Chatbot</h3>
            <p className="mb-2">AI chatbot trained to handle queries and provide relevant responses.</p>
            <p className="text-sm text-gray-600 mb-2">Tech Stack: Python, TensorFlow</p>
            <a href="https://github.com/iamharshit19/neural-net-based-chatbot" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GitHub Repo</a>
          </div>
           <div className="p-6 bg-white rounded-2xl shadow-md">
          
            <h3 className="text-xl font-bold mb-2">Web Ally Widget</h3>
            <p className="mb-2">A small widget that can be easy integrated into any website for Web Acccessibility.</p>
            <p className="text-sm text-gray-600 mb-2">Tech Stack: VueJS</p>
            <a href="https://github.com/iamharshit19/Web-ally-widget" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">GitHub Repo</a>
             </div>
        </div>
    
      </section>


 



      <section id="contact" className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>Email: <a href="harshitgupta0901@gmail.com" className="text-blue-600">harshitgupta0901@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/iamharshit19" target="_blank" rel="noreferrer" className="text-blue-600">linkedin.com/in/iamharshit19</a></p>
        <p>GitHub: <a href="https://github.com/iamharshit19" target="_blank" rel="noreferrer" className="text-blue-600">github.com/iamharshit19</a></p>
      </section>

     
      <footer className="text-center py-6 bg-gray-100">
        <p>© {new Date().getFullYear()} Harshit Gupta. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
