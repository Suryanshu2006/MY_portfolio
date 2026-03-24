import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 text-sm font-medium backdrop-blur-sm"
          >
            Welcome to my portfolio
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Hi, I'm <span className="gradient-text">Suryanshu Kumar Singh</span><br />
            <span className="text-slate-400 text-3xl sm:text-4xl lg:text-5xl mt-2 block">Software Product Engineer</span>
          </h1>
          
          <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
            An enthusiastic 19-year-old from Patna, Bihar. Passionate about programming, solving coding problems, and delving into web development using modern frameworks like React and Vite!
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-sky-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all duration-300 border border-transparent">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full bg-transparent text-white font-medium hover:bg-white/5 border border-white/20 transition-all duration-300 glass cursor-pointer">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Abstract geometric shapes to fit "futuristic" aesthetic */}
          <div className="relative w-80 h-80 bg-gradient-to-tr from-primary to-secondary rounded-full filter blur-[100px] opacity-40 animate-pulse"></div>
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute z-10 glass-card w-72 h-80 rounded-[2rem] border-white/20 overflow-hidden transform rotate-3 flex flex-col items-center justify-center p-8"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
             <div className="relative z-20 h-full w-full border border-white/10 rounded-xl overflow-hidden backdrop-blur-md bg-dark/20 shadow-inner flex items-center justify-center">
                <img 
                  src="/profile.png" 
                  alt="Suryanshu Kumar Singh" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/300x400/121212/0ea5e9?text=Suryanshu";
                  }}
                />
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
