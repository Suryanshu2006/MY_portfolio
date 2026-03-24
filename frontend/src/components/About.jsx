import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About <span className="gradient-text">Me</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full filter blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
          <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
          <p className="text-slate-300 mb-4 leading-relaxed relative z-10">
            An enthusiastic 19-year-old from Patna, Bihar, currently pursuing my B. Tech in Computer Science and Engineering with a focus on Software Product Engineering by Industry Experience at Godavari Global University, Andhra Pradesh.
          </p>
          <p className="text-slate-300 leading-relaxed relative z-10">
            Passionate about programming and solving coding problems, I enjoy delving into web development using modern frameworks like React and Vite. I focus on bridging the gap between empathic UI/UX design and scalable MERN full-stack development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { title: 'Education', desc: 'B.Tech CSE (2nd Year)' },
            { title: 'University', desc: 'Godavari Global Univ.' },
            { title: 'Hometown', desc: 'Patna, Bihar' },
            { title: 'Present', desc: 'Rajahmundry, AP' },
          ].map((item, index) => (
            <div key={index} className="glass-card text-center p-6 flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-primary font-semibold mb-2 text-sm uppercase tracking-wider">{item.title}</h4>
              <p className="text-slate-200 font-bold text-lg">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
