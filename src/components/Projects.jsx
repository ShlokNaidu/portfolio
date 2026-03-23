import React from 'react';
import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';
import TextReveal from './TextReveal';

const projectsData = [
  {
    title: "HELIX",
    tagline: "Gene-Guided Prescribing Platform",
    description: "Built the complete product architecture around a pharmacogenomic rule engine — REST API for VCF file ingestion, a multi-stage processing pipeline (variant parsing → diplotype construction → CPIC rule application → risk classification), LLM integration for explanation generation, strict JSON schema validation, and MongoDB logging. Designed for explainability and clinical reliability.",
    role: "Full system architecture · FastAPI backend · Pipeline design · LLM integration · Frontend",
    tags: ["FastAPI", "Python", "REST API", "MongoDB", "React", "Pipeline Architecture", "LLM Integration"],
    link: "https://helix-fa85.vercel.app/"
  },
  {
    title: "EyeOnSite",
    tagline: "Construction Site Safety Monitor",
    description: "Architected a three-service system (AI Service / Node.js Backend / React Frontend) communicating over HTTP and WebSockets. Built the real-time alert broadcasting system, MJPEG live stream delivery, interactive zone editor UI, camera management REST APIs, MongoDB alert history, safety scoring, and a live analytics dashboard — integrating a YOLO-based CV service as an internal microservice.",
    role: "Full system architecture · Backend APIs · WebSocket pipeline · Frontend dashboard · Zone editor UI",
    tags: ["Node.js", "Express", "WebSockets", "React", "MongoDB", "REST API", "Microservices", "TailwindCSS"],
    link: "https://github.com/ShlokNaidu/EyeOnSite"
  },
  {
    title: "Linkrythm",
    tagline: "Context-Aware Link Management",
    description: "Designed and built the entire platform — JWT-authenticated creator accounts, a deterministic rule engine that scores and reorders links by device, time, and location context, click tracking with backend redirect logic, a visual analytics dashboard, CSV export, QR code generation, and a fully custom CSS design system with no UI framework.",
    role: "Full-stack · Backend API · Rule engine · Auth system · Frontend · Analytics · UI/UX design",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Chart.js", "REST API", "Custom CSS"],
    link: "https://linkrythm.vercel.app/"
  },
  {
    title: "Pashu Pehchan",
    tagline: "Cattle Breed Identification App",
    description: "Built the complete web platform — JWT auth with bcrypt, full forgot-password email flow, Cloudinary image upload pipeline, on-the-fly PDF report generation with PDFKit, scan history dashboard with search and filter, MongoDB aggregation-powered analytics with Recharts, and a global toast notification system. Integrated a Python/FastAPI ML inference service as an internal API.",
    role: "Full-stack · Node.js backend · React frontend · Auth system · PDF generation · Analytics",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "PDFKit", "FastAPI", "TailwindCSS"],
    link: "https://github.com/shrashtimaheshwari/pashu-pehchan"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex flex-col items-center md:items-start mb-16">
            <TextReveal>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                Selected Work.
              </h2>
            </TextReveal>
            <div className="w-12 h-px bg-accent/40" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
          {projectsData.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} className="w-full h-full">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
