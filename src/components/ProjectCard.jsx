import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onOpenCaseStudy }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const lastMousePos = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const { x, y } = lastMousePos.current;

      // Check if stationary mouse intersects with card during scroll
      if (
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      ) {
        setIsHovered(true);
        const relativeX = x - rect.left;
        const relativeY = y - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((relativeY - centerY) / centerY) * -8;
        const rotateY = ((relativeX - centerX) / centerX) * 8;
        
        setStyle({ rotateX, rotateY });
      } else {
        setIsHovered(false);
        setStyle(prev => (prev.rotateX === 0 && prev.rotateY === 0) ? prev : { rotateX: 0, rotateY: 0 });
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    setIsHovered(true);
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    setStyle({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setStyle({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 w-full h-full"
    >
      <div 
        className={`w-full h-full rounded-sm bg-surface flex flex-col justify-between p-8 md:p-10 border transition-all duration-300 ease-out pointer-events-auto relative overflow-hidden ${
          isHovered 
            ? 'shadow-[0_20px_40px_rgba(212,149,106,0.1)] border-accent/30' 
            : 'shadow-none border-borderBase'
        }`}
        style={{
          transform: `rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg)`,
          transformStyle: "preserve-3d"
        }}
      >
        {/* Grainy Gradient Orb */}
        <div className={`absolute -inset-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent transition-opacity duration-700 pointer-events-none mix-blend-screen ${isHovered ? 'opacity-100' : 'opacity-0'}`}
             style={{
               transform: `translate(${style.rotateY * 2}px, ${-style.rotateX * 2}px)`
             }}
        />
        
        <div className="relative z-10">
          <h3 className={`text-2xl font-serif mb-2 transition-colors ${isHovered ? 'text-accent' : 'text-primary'}`}>
            {project.title}
          </h3>
          <p className="text-accent text-sm uppercase tracking-wider mb-6 font-medium">
            {project.tagline}
          </p>
          <p className="text-secondary leading-relaxed mb-10 border-l p-4 border-surface-light bg-surface-dark/50">
            {project.description}
          </p>
          <p className="text-secondary text-sm mb-6">
            <span className="text-primary font-medium">Role:</span> {project.role}
          </p>
        </div>
        
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs rounded-full bg-surface-dark border border-borderBase text-secondary">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between w-full relative z-20">
            <button
              onClick={onOpenCaseStudy}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[2px] bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-background transition-all font-medium text-sm"
            >
              Case Study
            </button>

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm"
              >
                View App <ExternalLink size={16} />
              </a>
            ) : project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm"
              >
                Source Code <ExternalLink size={16} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-secondary opacity-50 cursor-not-allowed text-sm">
                Private <ExternalLink size={16} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
