import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="gradient-text">Projects</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </motion.div>

      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
               className="glass-card p-0 flex flex-col h-full overflow-hidden group border-white/10"
             >
                <div className="relative h-48 w-full overflow-hidden bg-white/5">
                   <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                   {project.image ? (
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-slate-500 font-medium">No Image Available</div>
                   )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                   <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                   <p className="text-slate-300 mb-6 flex-grow text-sm leading-relaxed">{project.description}</p>
                   
                   <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold">
                      {project.technologies.map((tech, i) => (
                         <span key={i} className="px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                            {tech}
                         </span>
                      ))}
                   </div>
                   
                   <div className="flex items-center gap-4 mt-auto">
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors border border-white/5">
                           <GithubIcon /> Code
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white bg-primary/20 hover:bg-primary hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] border border-primary/50 px-4 py-2 rounded-lg transition-all duration-300">
                           <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center text-slate-400 glass-card max-w-md mx-auto py-12">
          <div className="animate-pulse flex flex-col items-center">
             <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
             Loading projects from database...
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
