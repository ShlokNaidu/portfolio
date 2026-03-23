import React from 'react';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Magnetic from './Magnetic';
import TextReveal from './TextReveal';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 bg-background relative z-10 border-t border-borderBase">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <ScrollReveal className="w-full flex flex-col items-center">
          <TextReveal>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 text-center">
              Have a project or an idea?
              <br />
              <span className="text-accent italic">Let's build it.</span>
            </h2>
          </TextReveal>
          
          <div className="flex items-center gap-8 mb-16">
            <Magnetic>
              <a 
                href="mailto:shlok16naidu@gmail.com" 
                className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-secondary hover:text-accent hover:bg-surface-light border border-white/5 transition-all duration-300 pointer-events-auto"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="https://github.com/ShlokNaidu" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-secondary hover:text-accent hover:bg-surface-light border border-white/5 transition-all duration-300 pointer-events-auto"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="https://www.linkedin.com/in/shloknaidu" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-secondary hover:text-accent hover:bg-surface-light border border-white/5 transition-all duration-300 pointer-events-auto"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </Magnetic>
          </div>
          
          <div className="w-full flex justify-between items-center pt-8 border-t border-borderBase">
            <p className="text-secondary/60 text-sm">
              &copy; {new Date().getFullYear()} Shlok Naidu. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="text-secondary hover:text-accent transition-colors flex items-center gap-2 text-sm uppercase tracking-wider font-medium"
            >
              Back to Top <ArrowUp size={16} />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Contact;
