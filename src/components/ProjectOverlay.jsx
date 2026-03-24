import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Magnetic from './Magnetic';

const ProjectOverlay = ({ isOpen, onClose, project }) => {
  // Lock body scroll when overlay is open to prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 220, mass: 0.8 }}
          className="fixed inset-0 z-[100] bg-background text-primary overflow-y-auto overflow-x-hidden flex flex-col"
        >
          {/* Header Navigation Area */}
          <div className="sticky top-0 left-0 w-full p-6 lg:px-12 lg:py-8 flex justify-start items-center z-50 pointer-events-none mix-blend-difference">
            <div className="pointer-events-auto">
              <Magnetic>
                <button 
                  onClick={onClose}
                  className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center text-primary bg-background/50 backdrop-blur-md hover:bg-primary/10 transition-colors shadow-lg"
                  aria-label="Back to Projects"
                >
                  <ArrowLeft size={24} />
                </button>
              </Magnetic>
            </div>
          </div>

          {/* Deep Dive Content Wrapper */}
          <div className="max-w-6xl mx-auto w-full px-6 py-24 lg:py-32 flex-grow relative z-10">
            
            <motion.h1 
              initial={{ y: 50, opacity: 0, rotateZ: 2 }}
              animate={{ y: 0, opacity: 1, rotateZ: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] tracking-tight origin-bottom-left"
            >
              {project.title}.
            </motion.h1>
            
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 items-center text-secondary text-lg mb-20"
            >
              <span className="text-accent">{project.role}</span>
              <span className="opacity-40">&mdash;</span>
              <span className="font-medium tracking-wide">{project.tagline}</span>
            </motion.div>

            {/* Architecture / Details Grid */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32"
            >
              <div className="lg:col-span-8">
                <h3 className="text-secondary text-xs font-sans tracking-[0.2em] uppercase mb-8">System Architecture</h3>
                <p className="text-2xl md:text-3xl leading-[1.6] font-serif text-primary/90 mb-10">
                  {project.description}
                </p>
                {project.caseStudy && (
                  <div className="space-y-6 text-lg text-secondary leading-relaxed font-sans">
                    {project.caseStudy.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <h3 className="text-secondary text-xs font-sans tracking-[0.2em] uppercase mb-8">Tech Stack</h3>
                  <ul className="space-y-4">
                    {project.tags?.map((tag, i) => (
                      <li key={i} className="text-primary border-b border-borderBase pb-4 flex justify-between">
                        <span>{tag}</span>
                        <span className="text-xs text-accent/50 selection:bg-transparent">▹</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-16 space-y-6">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-between group">
                        <span className="text-accent font-medium group-hover:text-accent-hover transition-colors text-lg">Live Deployment</span>
                        <ExternalLink size={20} className="text-accent group-hover:text-accent-hover group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-between group">
                        <span className="text-secondary group-hover:text-primary transition-colors text-lg">Source Code</span>
                        <Github size={20} className="text-secondary group-hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
            


          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectOverlay;
