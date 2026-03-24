import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch('/api/skills')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error("Error fetching skills:", err));
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical <span className="gradient-text">Arsenal</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </motion.div>

      {skills.length > 0 ? (
        <>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20"
        >
          {skills.filter(s => s.category !== 'Tech Tools').map((skill, index) => {
            const needsInvert = ['Next.js', 'Express', 'GitHub', 'Vercel'].includes(skill.name);
            return (
              <motion.div 
                 key={index}
                 variants={item}
                 className="flex flex-col items-center justify-center p-6 py-8 gap-5 bg-[#121212]/80 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                  {skill.logo ? (
                     <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className={`w-full h-full object-contain ${needsInvert ? 'invert opacity-90' : ''}`} 
                     />
                  ) : (
                     <div className="text-3xl font-bold text-primary">{skill.name.charAt(0)}</div>
                  )}
                </div>
                <p className="text-slate-300 font-medium text-sm tracking-wide">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 mt-10"
        >
          <h3 className="text-3xl font-bold text-primary mb-4">Tech Tools</h3>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto justify-center"
        >
          {skills.filter(s => s.category === 'Tech Tools').map((skill, index) => {
            const needsInvert = ['Next.js', 'Express', 'GitHub', 'Vercel'].includes(skill.name);
            return (
              <motion.div 
                 key={index}
                 variants={item}
                 className="flex flex-col items-center justify-center p-6 py-8 gap-5 bg-[#121212]/80 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                  {skill.logo ? (
                     <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className={`w-full h-full object-contain ${needsInvert ? 'invert opacity-90' : ''}`} 
                     />
                  ) : (
                     <div className="text-3xl font-bold text-primary">{skill.name.charAt(0)}</div>
                  )}
                </div>
                <p className="text-slate-300 font-medium text-sm tracking-wide">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
        </>
      ) : (
        <div className="text-center text-slate-400 glass-card max-w-md mx-auto py-12">
          <div className="animate-pulse flex flex-col items-center">
             <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
             Loading skills from database...
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
