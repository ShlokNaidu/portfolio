import { motion } from 'framer-motion';

const ScrollReveal = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 1, 
        delay, 
        ease: [0.2, 0, 0, 1] // Custom easing equivalent to power-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
