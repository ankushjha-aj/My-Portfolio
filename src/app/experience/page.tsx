import { Network, CheckCircle2, ArrowRight, Trophy, Users, LineChart, ServerCog } from 'lucide-react';
import Link from 'next/link';
import './experience.css';

export default function Experience() {
  return (
    <div className="exp-container">
      {/* Header */}
      <div className="exp-header">
        <div className="exp-label">
          <Network size={16} />
          <span>Professional Journey</span>
        </div>
        <h1 className="exp-title">Work Experience</h1>
        <p className="exp-desc">
          A detailed record of my professional evolution, the infrastructure I've optimized, and the technical milestones I've achieved.
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        
        {/* Role 1 */}
        <div className="timeline-node group">
          <div className="timeline-dot active-dot"></div>
          
          <div className="timeline-card">
            <div className="card-header">
              <div className="company-info">
                <div className="company-logo-wrapper">
                  <div className="company-logo placeholder-logo">OP</div>
                </div>
                <div>
                  <h3 className="role-title">DevOps Engineer</h3>
                  <p className="company-name">OpsBee Technologies</p>
                </div>
              </div>
              <div className="role-meta">
                <span className="role-badge active-badge">JUN 2024 — PRESENT</span>
                <span className="role-location">Delhi, India</span>
              </div>
            </div>
            
            <div className="role-details">
              <p className="role-summary">
                Leading multi-cloud infrastructure deployment and establishing automated CI/CD pipelines to ensure scalable, secure delivery.
              </p>
              
              <ul className="role-highlights-grid">
                <li>
                  <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                  <span>Designed and deployed NDMC infrastructure on-site using Red Hat OpenShift from scratch.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                  <span>Created comprehensive Terraform frameworks across AWS, GCP, and Hetzner.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                  <span>Engineered custom Python/Bash automation for GCP firewall rules and address groups.</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                  <span>Collaborated with seniors to implement robust CI/CD via GitHub Actions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Role 2 */}
        <div className="timeline-node group">
          <div className="timeline-dot inactive-dot"></div>
          
          <div className="timeline-card">
            <div className="card-header">
              <div className="company-info">
                <div className="company-logo-wrapper inactive-wrapper">
                  <div className="company-logo placeholder-logo">OP</div>
                </div>
                <div>
                  <h3 className="role-title">DevOps Engineer Intern</h3>
                  <p className="company-name">OpsBee Technologies</p>
                </div>
              </div>
              <div className="role-meta">
                <span className="role-badge inactive-badge">MAR 2024 — JUN 2024</span>
                <span className="role-location">Delhi, India</span>
              </div>
            </div>
            
            <div className="role-details">
              <p className="role-summary">
                Established foundational knowledge in modern DevOps practices, cloud native technologies, and continuous integration concepts.
              </p>
              
              <div className="tech-stack-row">
                <span className="tech-pill">AWS</span>
                <span className="tech-pill">LINUX</span>
                <span className="tech-pill">DOCKER</span>
                <span className="tech-pill">BASH</span>
              </div>
              
              <ul className="role-highlights-list">
                <li>
                  <ArrowRight size={16} className="text-primary mt-1 shrink-0" />
                  <span>Assisted senior engineers in managing and monitoring cloud infrastructure.</span>
                </li>
                <li>
                  <ArrowRight size={16} className="text-primary mt-1 shrink-0" />
                  <span>Gained hands-on experience troubleshooting containerized applications.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Responsibilities */}
      <div className="highlights-section">
        <h2 className="highlights-title">
          <Trophy className="text-primary" size={28} />
          Key Responsibilities & Highlights
        </h2>
        
        <div className="highlights-grid">
          <div className="highlight-card">
            <ServerCog className="text-primary mb-4" size={36} />
            <h4 className="highlight-card-title">Infrastructure as Code</h4>
            <p className="highlight-card-desc">Comprehensive expertise in Terraform and Ansible to ensure repeatable, scalable deployments.</p>
          </div>
          
          <div className="highlight-card">
            <LineChart className="text-primary mb-4" size={36} />
            <h4 className="highlight-card-title">CI/CD Optimization</h4>
            <p className="highlight-card-desc">Dramatically reducing deployment times while increasing code quality and security gates.</p>
          </div>
          
          <div className="highlight-card">
            <Users className="text-primary mb-4" size={36} />
            <h4 className="highlight-card-title">Cross-functional Collaboration</h4>
            <p className="highlight-card-desc">Working directly with developers and stakeholders to align infrastructure with business needs.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="exp-cta">
        <h3 className="exp-cta-title">Interested in working together?</h3>
        <p className="exp-cta-desc">
          I'm currently open to full-time engineering roles and high-impact cloud architecture projects. Let's discuss how I can help your team scale.
        </p>
        <div className="exp-cta-actions">
          <Link href="/contact" className="btn-primary">Contact Me</Link>
          <button className="btn-secondary-white">Download Resume</button>
        </div>
      </div>
    </div>
  );
}
