import React from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

const techTags = [
  "React", "Vite", "Node.js", "Express", "MongoDB", "FastAPI", 
  "WebSockets", "REST APIs", "TailwindCSS", "JWT Auth", "Recharts", 
  "Cloudinary", "Mongoose"
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-surface-dark relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <TextReveal>
                <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                  About Me.
                </h2>
              </TextReveal>
              <div className="w-12 h-px bg-accent/40 mb-8" />
            </div>
            
            <div className="lg:col-span-7">
              <div className="text-secondary text-lg leading-relaxed space-y-6">
                <p>
                  I'm a full-stack engineer who builds real products around complex systems. 
                  My focus isn't just on making things look good—it's on engineering the robust 
                  architecture beneath the surface: authentication flows, real-time WebSocket pipelines, 
                  REST API design, database architecture, interactive dashboards, and clean UI.
                </p>
                <p>
                  I'm incredibly comfortable integrating AI/ML services (YOLO, LLMs, CNNs) 
                  as internal API layers. I design the plumbing that makes those models 
                  actually usable in a product context, ensuring production-readiness, 
                  clean architecture, and thoughtful UX.
                </p>
              </div>

              <div className="mt-12">
                <h3 className="text-sm uppercase tracking-wider text-accent font-medium mb-6">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {techTags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 rounded-full bg-surface-light text-primary text-sm shadow-sm border border-accent/10 hover:border-accent/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
