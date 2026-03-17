import Link from 'next/link';
import { Terminal, Database, Server, MoveRight, ArrowRight, ShieldCheck, PlayCircle, HardDrive } from 'lucide-react';
import { TerminalVisual } from '@/components/TerminalVisual';
import './home.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="home-hero-container">
        <div className="home-hero-grid">
          <div className="hero-content animate-slide-up">
            <div className="hero-badge">
              <span className="hero-badge-text">DevOps Engineer | Automation | Cloud | CI/CD | Security</span>
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Ankush Kumar Jha</span>
            </h1>
            <p className="hero-subtitle">
              I am a DevOps Engineer with over two years of hands-on experience in automation, cloud infrastructure, and security. I specialize in multi-cloud environments, building efficient CI/CD pipelines, and optimizing systems for scalability and cost-effectiveness. I focus on delivering reliable, secure, and streamlined solutions that improve deployment speed and overall system performance.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <TerminalVisual />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="skills-container reveal active">
          <div className="skills-header">
            <h2 className="skills-title">Core Competencies</h2>
          </div>
          
          <div className="skills-grid">
            {/* Skill 1 */}
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Server size={24} />
              </div>
              <h4 className="skill-title">Cloud Infrastructure</h4>
              <p className="skill-desc">
                Architecting and managing environments across AWS, GCP, Azure, and Hetzner for high availability.
              </p>
            </div>
            
            {/* Skill 2 */}
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Terminal size={24} />
              </div>
              <h4 className="skill-title">CI/CD & Automation</h4>
              <p className="skill-desc">
                Implementing robust pipelines with GitHub Actions, Jenkins, Bash, and Python to accelerate feature delivery.
              </p>
            </div>

            {/* Skill 3 */}
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <Database size={24} />
              </div>
              <h4 className="skill-title">Container orchestration</h4>
              <p className="skill-desc">
                Scaling microservices through Docker, Kubernetes, and enterprise-grade Red Hat OpenShift.
              </p>
            </div>

            {/* Skill 4 */}
            <div className="skill-card">
              <div className="skill-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <h4 className="skill-title">Security & IaC</h4>
              <p className="skill-desc">
                Enforcing immutable infrastructure via Terraform, Ansible, and rigorous security access management protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="projects-section" id="featured-projects">
        <div className="projects-header-row reveal active">
          <div className="projects-header-left">
            <h2 className="skills-label">Portfolio</h2>
            <h3 className="projects-title">Featured Work</h3>
          </div>
          <Link href="/projects" className="view-all-link">
            Explore All Projects <MoveRight size={20} />
          </Link>
        </div>
        
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-group reveal active">
            <div className="project-image-wrapper bg-slate-800">
               <div className="project-placeholder-visual flex items-center justify-center h-full">
                  <PlayCircle size={64} className="text-secondary opacity-50" />
               </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="tag-primary">Streaming Architecture</span>
              </div>
              <h4 className="project-name">Binge+</h4>
              <p className="project-desc">A scalable movie streaming platform built using modular cloud components and automated delivery pipelines.</p>
              <div className="flex gap-2 mt-2">
                 <span className="tech-chip text-xs opacity-75">Docker</span>
                 <span className="tech-chip text-xs opacity-75">Terraform</span>
                 <span className="tech-chip text-xs opacity-75">GCP</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-group reveal active delay-100">
            <div className="project-image-wrapper bg-slate-800">
               <div className="project-placeholder-visual flex items-center justify-center h-full">
                  <HardDrive size={64} className="text-primary opacity-50" />
               </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                <span className="tag-primary">CLI GUI Tool</span>
              </div>
              <h4 className="project-name">Plakar Dashboard</h4>
              <p className="project-desc">A secure, encrypted web interface for visualizing and managing backup states via the Plakar backup CLI.</p>
              <div className="flex gap-2 mt-2">
                 <span className="tech-chip text-xs opacity-75">Node.js</span>
                 <span className="tech-chip text-xs opacity-75">React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section reveal active">
        <div className="cta-box">
          <h2 className="cta-title">Looking to optimize your <span className="text-primary">systems</span>?</h2>
          <p className="cta-desc">
            Whether you need cloud migration support, deployment automation, or infrastructure consultation, I'm here to help.
          </p>
          <Link href="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
