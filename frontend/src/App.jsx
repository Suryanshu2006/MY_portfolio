import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative w-full overflow-hidden">
        {/* Animated Background blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite]"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite_2s]"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-[blob_7s_infinite_4s]"></div>
        
        <Navbar />
        <main className="flex-grow z-10 w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating Side Resume Button */}
        <motion.a
          href="/resume.pdf"
          download="Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          whileHover={{ x: -5, scale: 1.05 }}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 pl-4 pr-3 py-6 bg-white/10 backdrop-blur-xl border border-white/20 border-r-0 rounded-l-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
        >
          <span className="hidden md:block font-bold text-[10px] uppercase tracking-[0.3em] text-white/70 group-hover:text-white transition-colors [writing-mode:vertical-lr] rotate-180">Resume</span>
          <div className="p-2 bg-primary/20 rounded-full group-hover:bg-primary transition-colors shadow-lg">
            <Download size={20} className="text-white group-hover:rotate-12 transition-transform" />
          </div>
        </motion.a>
      </div>
    </Router>
  );
}

export default App;
