import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;