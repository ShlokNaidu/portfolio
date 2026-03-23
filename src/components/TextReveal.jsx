import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ children, className = "", delay = 0 }) => {
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        initial={{ y: "110%", opacity: 0, rotateZ: 2 }}
        whileInView={{ y: 0, opacity: 1, rotateZ: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ 
          duration: 1.2, 
          delay, 
          ease: [0.2, 0, 0, 1] 
        }}
        className="origin-bottom-left"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;
