import React from 'react';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

const Skills = () => {
  return (
    <section className="py-24 bg-surface-dark relative z-10 border-t border-borderBase">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col items-center md:items-start mb-16">
            <TextReveal>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                Expertise.
              </h2>
            </TextReveal>
            <div className="w-12 h-px bg-accent/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-serif text-primary mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Frontend
              </h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> React & Vite</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> TailwindCSS</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Recharts & Chart.js</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> React Router</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Axios & Lucide React</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif text-primary mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Backend
              </h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Node.js & Express</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> FastAPI</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> REST API Design</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> WebSockets</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> JWT Auth & bcrypt</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif text-primary mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent"></span> Data & Infra
              </h3>
              <ul className="space-y-4 text-secondary">
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> MongoDB & Mongoose</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> MongoDB Aggregations</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Microservice Architecture</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Cloudinary</li>
                <li className="flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> CI/CD (Vercel & Netlify)</li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
