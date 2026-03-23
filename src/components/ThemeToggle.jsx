import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const ThemeToggle = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('theme-light');
    } else {
      document.documentElement.classList.remove('theme-light');
    }
  }, [isLight]);

  return (
    <div className="fixed top-6 right-6 z-50 pointer-events-auto">
      <Magnetic>
        <button
          onClick={() => setIsLight(!isLight)}
          className="w-12 h-12 rounded-full bg-surface-dark border border-white/10 shadow-lg flex items-center justify-center text-primary hover:border-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Toggle Theme"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isLight ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
          </motion.div>
        </button>
      </Magnetic>
    </div>
  );
};

export default ThemeToggle;
