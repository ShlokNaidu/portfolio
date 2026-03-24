import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import ProjectCard from './ProjectCard';
import TextReveal from './TextReveal';
import ProjectOverlay from './ProjectOverlay';

const projectsData = [
  {
    title: "HELIX",
    tagline: "Gene-Guided Prescribing Platform",
    description: "Built the complete product architecture around a pharmacogenomic rule engine — REST API for VCF file ingestion, a multi-stage processing pipeline (variant parsing → diplotype construction → CPIC rule application → risk classification), LLM integration for explanation generation, strict JSON schema validation, and MongoDB logging. Designed for explainability and clinical reliability.",
    role: "Full system architecture · Node.js backend · Pipeline design · LLM integration · Frontend",
    tags: ["Node.js", "Express", "REST API", "MongoDB", "React", "Pipeline Architecture", "LLM Integration"],
    link: "https://helix-fa85.vercel.app/",
    caseStudy: "HELIX was engineered to solve a critical bottleneck in precision medicine: the automated interpretation of raw genomic data against clinical protocols. The core challenge was designing a deterministic pipeline that could ingest massive VCF files, extract specific pharmacogenomic variants, and instantly reconstruct patient diplotypes with 100% accuracy.\n\nTo achieve this, I architected a multi-stage processing engine using Node.js and Express. The system strictly validates variant data against defined JSON schemas before piping it through a CPIC rule engine to calculate medication risk profiles. To bridge the gap between complex genomic outputs and clinician readability, I integrated a fine-tuned LLM layer. This layer acts as a translator, reading the risk classifications and generating clear, actionable prescribing adjustments while maintaining strict clinical reliability."
  },
  {
    title: "EyeOnSite",
    tagline: "Construction Site Safety Monitor",
    description: "Architected a three-service system (AI Service / Node.js Backend / React Frontend) communicating over HTTP and WebSockets. Built the real-time alert broadcasting system, MJPEG live stream delivery, interactive zone editor UI, camera management REST APIs, MongoDB alert history, safety scoring, and a live analytics dashboard — integrating a YOLO-based CV service as an internal microservice.",
    role: "Full system architecture · Backend APIs · WebSocket pipeline · Frontend dashboard · Zone editor UI",
    tags: ["Node.js", "Express", "WebSockets", "React", "MongoDB", "REST API", "Microservices", "TailwindCSS"],
    link: "https://github.com/ShlokNaidu/EyeOnSite",
    caseStudy: "EyeOnSite tackles the latency and orchestration challenges of live computer vision on active construction sites. The architecture required a highly decoupled three-tier system capable of processing high-frequency video streams and broadcasting safety infractions in real-time without blocking the main thread.\n\nThe AI microservice, running a YOLO-based inference model, processes MJPEG streams and fires bounding-box alerts to the central Node.js backend. I designed a robust WebSocket pipeline to instantly push these alerts to the React frontend dashboard without state staleness. One of the most complex features I implemented was the Interactive Zone Editor, which translates user-drawn SVG polygons into geospatial mathematical boundaries on the backend, ensuring the AI only triggers alerts within strictly defined hazardous zones."
  },
  {
    title: "Linkrythm",
    tagline: "Context-Aware Link Management",
    description: "Designed and built the entire platform — JWT-authenticated creator accounts, a deterministic rule engine that scores and reorders links by device, time, and location context, click tracking with backend redirect logic, a visual analytics dashboard, CSV export, QR code generation, and a fully custom CSS design system with no UI framework.",
    role: "Full-stack · Backend API · Rule engine · Auth system · Frontend · Analytics · UI/UX design",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Chart.js", "REST API", "Custom CSS"],
    link: "https://linkrythm.vercel.app/",
    caseStudy: "Linkrythm goes completely beyond standard URL redirection by implementing a dynamic, context-aware routing engine. Traditional link-in-bio tools are static, but Linkrythm dynamically restructures the entire user payload based on the visitor's device, geographic location, and local time.\n\nThe backend architecture revolves around a custom deterministic rule engine built in Node.js. When a request hits the server, the engine instantly evaluates the visitor's headers and context against the creator's defined rulesets to calculate a priority score for every link, sorting them before rendering the UI payload. I additionally built the entire analytics dashboard using Chart.js mounted on React, powered by optimized MongoDB aggregation pipelines to ensure rapid data visualization even with thousands of daily link clicks."
  },
  {
    title: "Pashu Pehchan",
    tagline: "Cattle Breed Identification App",
    description: "Built the complete web platform — JWT auth with bcrypt, full forgot-password email flow, Cloudinary image upload pipeline, on-the-fly PDF report generation with PDFKit, scan history dashboard with search and filter, MongoDB aggregation-powered analytics with Recharts, and a global toast notification system. Integrated a Python/FastAPI ML inference service as an internal API.",
    role: "Full-stack · Node.js backend · React frontend · Auth system · PDF generation · Analytics",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "PDFKit", "FastAPI", "TailwindCSS"],
    link: "https://github.com/shrashtimaheshwari/pashu-pehchan",
    caseStudy: "Pashu Pehchan was designed to digitize and automate cattle breed identification for agricultural use. The platform required a seamless operational bridge between a consumer-facing mobile web app and a heavy, backend machine learning inference service.\n\nI architected the Node.js backend to handle heavy media payloads, streaming image uploads directly to Cloudinary and shipping the secure URLs to the FastAPI Python microservice for breed classification. Once the ML engine returns the inference confidence scores, the Node.js layer dynamically constructs a fully formatted diagnostic PDF report on-the-fly using PDFKit. The entire system is secured with JWT authentication and features an aggregation-driven React dashboard to visualize historical scan data and demographic trends."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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
              <ProjectCard project={project} onOpenCaseStudy={() => setSelectedProject(project)} />
            </ScrollReveal>
          ))}
        </div>

        <ProjectOverlay 
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default Projects;
