import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import API_BASE_URL from '../api/config';

const Internships = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/internships`)
      .then(res => res.json())
      .then(data => setInternships(data))
      .catch(err => console.error("Error fetching internships:", err));
  }, []);

  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work <span className="gradient-text">Experience</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </motion.div>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        {internships.length > 0 ? internships.map((internship, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
          >
            {/* Timeline Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-darker bg-primary text-white shadow shadow-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <Briefcase size={16} />
            </div>

            {/* Content */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8 hover:-translate-y-2 transition-transform duration-300 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{internship.role}</h3>
                    <p className="text-lg font-medium text-slate-300">{internship.company}</p>
                 </div>
                 {internship.logo && (
                    <img src={internship.logo} alt={internship.company} className="h-12 w-auto object-contain rounded bg-white/5 p-1 hidden sm:block" />
                 )}
              </div>
              
              <div className="flex items-center text-primary text-sm mb-4 font-medium tracking-wide">
                <Calendar size={14} className="mr-2" />
                {internship.duration}
              </div>

              <div className="space-y-4 text-slate-300">
                <div>
                  <h4 className="text-white font-medium mb-2 opacity-80 uppercase text-xs tracking-wider">Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                    {internship.responsibilities.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                {internship.achievements && internship.achievements.length > 0 && (
                   <div>
                      <h4 className="text-white font-medium mb-2 opacity-80 uppercase text-xs tracking-wider">Key Achievements</h4>
                      <ul className="list-disc list-inside space-y-1 text-secondary text-sm md:text-base">
                        {internship.achievements.map((ach, i) => (
                          <li key={i}>{ach}</li>
                        ))}
                      </ul>
                   </div>
                )}
              </div>
            </div>
          </motion.div>
        )) : (
          <div className="text-center text-slate-400 glass-card max-w-md mx-auto py-12 relative z-10 w-full ml-10 md:ml-auto md:w-1/2 md:translate-x-[50%]">
            <div className="animate-pulse flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              Loading timeline from database...
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Internships;
