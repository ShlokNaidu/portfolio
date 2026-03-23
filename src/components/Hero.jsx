import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import Magnetic from './Magnetic';
import TextReveal from './TextReveal';

const FloatingShape = () => {
  const meshRef = useRef(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;
    
    // Add a dramatic scroll-triggered rotation burst
    const scrollY = window.scrollY;
    meshRef.current.rotation.z = scrollY * 0.002;
    
    // Offset to the right half on desktop
    const isMobile = window.innerWidth < 768;
    const basePositionX = isMobile ? 0 : 2.5;
    
    // Stronger parallax reaction to mouse
    const x = (state.mouse.x * 0.8);
    const y = (state.mouse.y * 0.8);
    
    // As you scroll down the page, it lifts out of view and out of the way!
    const scrollDriftY = scrollY * 0.005;
    
    meshRef.current.position.x += ((basePositionX + x) - meshRef.current.position.x) * 0.05;
    meshRef.current.position.y += ((y + scrollDriftY) - meshRef.current.position.y) * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.5, 0.4, 128, 16]} />
      <meshStandardMaterial 
        color="#d4956a" 
        wireframe 
        transparent 
        opacity={0.3} 
      />
    </mesh>
  );
};

const Hero = () => {
  const titles = ["Full-Stack Developer", "Backend Architect", "Product Engineer"];
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background breathing gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background animate-pulse style={{ animationDuration: '10s' }}"></div>
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#d4956a" intensity={1} />
          <FloatingShape />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-start justify-center">
        <ScrollReveal>
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-surface-dark border border-borderBase text-secondary text-sm tracking-wider uppercase font-medium">
            The Digital Curator
          </div>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary mb-4 tracking-tight leading-tight flex flex-wrap overflow-hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
            }}
            initial="hidden"
            animate="visible"
          >
            {"Shlok Naidu.".split("").map((char, index) => (
              <motion.span 
                key={index} 
                className={char === " " ? "ml-3 md:ml-6" : "inline-block origin-bottom-left"}
                variants={{
                  hidden: { opacity: 0, y: "110%", rotateZ: 4 },
                  visible: { opacity: 1, y: 0, rotateZ: 0, transition: { duration: 1, ease: [0.2, 0, 0, 1] } }
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <div className="h-[40px] md:h-[60px] mb-8 overflow-hidden relative font-sans text-2xl md:text-4xl text-accent font-light">
            <AnimatePresence mode="wait">
              <motion.span
                key={titleIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="block absolute"
              >
                {titles[titleIdx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="max-w-2xl text-lg md:text-xl text-secondary leading-relaxed mb-12">
            I design and build the systems that make AI products actually work — from REST APIs and real-time pipelines to the dashboards people use every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <Magnetic>
              <a 
                href="#projects" 
                className="px-8 py-4 rounded-sm bg-gradient-to-br from-accent to-accent-hover text-background font-medium hover:scale-[1.02] transition-transform duration-300 shadow-[0_40px_80px_rgba(212,149,106,0.06)]"
              >
                View My Work
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-sm border border-primary/30 text-primary font-medium hover:border-primary/50 hover:bg-surface-light transition-all duration-300"
              >
                Get in Touch
              </a>
            </Magnetic>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
