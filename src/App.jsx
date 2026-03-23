import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <main className="bg-background text-primary selection:bg-accent/30 selection:text-primary min-h-screen">
      <CustomCursor />
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
