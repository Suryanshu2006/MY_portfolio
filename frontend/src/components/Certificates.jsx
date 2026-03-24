import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch('/api/certificates')
      .then(res => res.json())
      .then(data => setCertificates(data))
      .catch(err => console.error(err));
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="certificates" className="py-20 w-full relative">
      <div className="absolute top-40 right-10 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My <span className="gradient-text">Certificates</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {certificates.length > 0 ? (
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificates.map((cert, index) => (
              <motion.div 
                 key={index}
                 variants={item}
                 className="glass-card overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="h-56 overflow-hidden relative bg-black/40 flex items-center justify-center p-4">
                   {cert.image ? (
                     <img src={cert.image} alt={cert.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 rounded" />
                   ) : (
                     <Award size={64} className="text-primary/50" />
                   )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                  <div className="flex items-center text-sm text-secondary mb-4 font-medium">
                    <span className="bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-slate-400 mb-4 text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center text-slate-400 glass-card max-w-md mx-auto py-12">
            <div className="animate-pulse flex flex-col items-center">
              <Award size={48} className="text-primary/50 mb-4" />
              <p>Loading certificates...</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
