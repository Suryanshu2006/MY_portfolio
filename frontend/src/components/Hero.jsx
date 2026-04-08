import React from 'react';
import { motion } from 'framer-motion';
import { Music, ExternalLink } from 'lucide-react';

const Hero = () => {
  const InstagramIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="18" height="18" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );

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
          className="relative hidden lg:flex flex-col justify-center items-center"
        >
          {/* Abstract geometric shapes to fit "futuristic" aesthetic */}
          <div className="absolute w-80 h-80 bg-gradient-to-tr from-primary to-secondary rounded-full filter blur-[100px] opacity-40 animate-pulse"></div>
          
          <div className="relative flex flex-col items-center gap-12">
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 glass-card w-72 h-80 rounded-[2rem] border-white/20 overflow-hidden transform rotate-3 flex flex-col items-center justify-center p-8"
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

            {/* Songs and Insta Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card w-80 p-5 flex flex-col items-center gap-4 z-20 hover:-translate-y-1 transition-transform border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.2)]"
            >
              <a href="#" className="flex items-center gap-3 text-sm text-slate-200 hover:text-primary transition-all group/songs">
                <div className="p-2 bg-secondary/20 rounded-lg group-hover/songs:bg-secondary/40 transition-colors">
                  <Music size={18} className="text-secondary group-hover/songs:scale-110" />
                </div>
                <span>To listen my songs <span className="text-secondary font-bold">click Follow</span></span>
                <ExternalLink size={14} className="opacity-0 group-hover/songs:opacity-100 transition-opacity" />
              </a>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Owner ID</span>
                  <span className="text-sm text-slate-300 font-medium">@sury_anshu_rajput_2006</span>
                </div>
                <a
                  href="https://instagram.com/sury_anshu_rajput_2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-pink-500/20 group/insta"
                >
                  <InstagramIcon />
                  <span className="text-xs font-bold text-white pr-1">Follow</span>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
