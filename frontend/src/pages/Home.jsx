import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Internships from '../components/Internships';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="flex flex-col w-full pb-10">
      <Hero />
      <About />
      <Skills />
      <Internships />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Home;
