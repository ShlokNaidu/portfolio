import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if it's touch device (mobile)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }
    
    setIsMobile(false);
    
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      // Find closest interactable parent
      const isInteractable = e.target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovering(!!isInteractable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <style>{`
        body, a, button, input, textarea, select {
          cursor: none !important;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 6),
          y: mousePosition.y - (isHovering ? 24 : 6),
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          backgroundColor: isHovering ? 'transparent' : 'rgb(var(--color-accent))',
          borderColor: isHovering ? 'rgb(var(--color-primary))' : 'transparent',
          borderWidth: isHovering ? '1.5px' : '0px',
        }}
        transition={{ 
          type: "spring", 
          stiffness: 800, 
          damping: 35,
          mass: 0.5 
        }}
      />
      
      {/* Abstract Glowing "Pet" Trailer */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] rounded-full pointer-events-none"
        style={{
          backgroundColor: 'rgb(var(--color-accent))',
          filter: 'blur(12px)',
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 48 : 24),
          y: mousePosition.y - (isHovering ? 48 : 24),
          width: isHovering ? 96 : 48,
          height: isHovering ? 96 : 48,
          opacity: isHovering ? 0.3 : 0.15,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20,
          mass: 0.8 
        }}
      />
    </>
  );
};

export default CustomCursor;
