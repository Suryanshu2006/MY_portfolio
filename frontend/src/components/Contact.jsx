import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        const data = await response.json();
        setStatus(data.message || 'Error sending message');
      }
    } catch (err) {
      console.error(err);
      setStatus('Failed to connect to server');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In <span className="gradient-text">Touch</span></h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card h-full flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-6">Let's build something <span className="gradient-text">amazing</span> together.</h3>
            <p className="text-slate-300 mb-8 text-lg">
              I'm always open to discussing product design work or partnership opportunities. Feel free to reach out to me!
            </p>

            <div className="space-y-6">
              <div className="flex items-center text-slate-300 hover:text-white transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" />
                </div>
                <div>
                   <p className="text-sm text-slate-400">Email Me At</p>
                   <p className="font-semibold text-lg">singhsuryanshukumar5@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center text-slate-300 hover:text-white transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" />
                </div>
                <div>
                   <p className="text-sm text-slate-400">Call Me At</p>
                   <p className="font-semibold text-lg">+91 9931692339</p>
                </div>
              </div>

              <div className="flex items-center text-slate-300 hover:text-white transition-colors group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="text-primary" />
                </div>
                <div>
                   <p className="text-sm text-slate-400">Hometown</p>
                   <p className="font-semibold text-lg">Patna, Bihar</p>
                </div>
              </div>

              <div className="flex items-center text-slate-300 hover:text-white transition-colors group cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/suryanshu-kumar-singh-3b3376339/', '_blank')}>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div>
                   <p className="text-sm text-slate-400">LinkedIn</p>
                   <p className="font-semibold text-lg">Connect with me</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="glass-card space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full filter blur-[80px] -z-10"></div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
              <textarea
                id="message"
                required
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                placeholder="Hello! I'd like to work with you on..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={!!status && status !== 'Message sent successfully!'}
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl text-white font-bold text-lg transition-opacity flex items-center justify-center gap-2 group disabled:opacity-70"
            >
              {status || 'Send Message'}
              {!status && <Send size={20} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
