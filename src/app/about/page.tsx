import { MapPin, Mail, ShieldCheck, Activity, Layers, GraduationCap, Briefcase, Award } from 'lucide-react';
import './about.css';

export default function About() {
  return (
    <div className="about-container section-padding">
      
      {/* Intro Narrative */}
      <section className="about-section animate-slide-up">
        <div className="section-header">
          <div className="header-line"></div>
          <h1 className="section-title">About Me</h1>
        </div>
        <div className="story-content">
          <p>
            I am a DevOps Engineer with over two years of hands-on experience in automation, cloud infrastructure, and security. My journey in the tech industry is rooted in a strong academic foundation in computer applications, which evolved into a deep specialization in multi-cloud environments, building efficient CI/CD pipelines, and optimizing systems for scalability and cost-effectiveness.
          </p>
          <p>
            I focus on delivering reliable, secure, and streamlined solutions that improve deployment speed and overall system performance. I believe that great infrastructure should be invisible—seamlessly supporting the product without causing friction. I specialize in bridging the communication gap between development and operations teams through efficient, IaC-driven workflows.
          </p>
        </div>
      </section>

      {/* Key Achievements Highlight */}
      <section className="about-section reveal">
        <div className="section-header">
          <div className="header-line"></div>
          <h2 className="section-title">Key Achievements</h2>
        </div>
        <div className="achievements-grid">
           <div className="achievement-card">
              <Award className="text-primary mb-3" size={32} />
              <h3 className="font-bold text-lg text-[var(--text-color)] mb-2">OpenShift Deployment</h3>
              <p className="text-[var(--text-muted)] text-sm">Successfully deployed and managed Red Hat OpenShift on-premise infrastructure for the Delhi Government, ensuring high availability and secure data processing.</p>
           </div>
           
           <div className="achievement-card">
              <Layers className="text-secondary mb-3" size={32} />
              <h3 className="font-bold text-lg text-[var(--text-color)] mb-2">Multi-Cloud Architecture</h3>
              <p className="text-[var(--text-muted)] text-sm">Engineered scalable solutions across AWS, GCP, Azure, and Hetzner, leveraging the unique strengths of each platform for cost-effective deployments.</p>
           </div>
           
           <div className="achievement-card">
              <Activity className="text-primary mb-3" size={32} />
              <h3 className="font-bold text-lg text-[var(--text-color)] mb-2">CI/CD Excellence</h3>
              <p className="text-[var(--text-muted)] text-sm">Dramatically reduced deployment times by architecting reliable automated pipelines using GitHub Actions, Jenkins, and containerized delivery workflows.</p>
           </div>
        </div>
      </section>

      {/* Professional Experience */}
       <section className="about-section reveal">
        <div className="section-header">
          <div className="header-line"></div>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {/* Full-time Role */}
          <div className="timeline-item">
            <div className="timeline-marker bg-primary"></div>
            <div className="timeline-content">
               <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                 <div>
                    <h3 className="font-bold text-xl text-[var(--text-color)]">DevOps Engineer</h3>
                    <p className="text-[var(--secondary)] font-medium">OpsBee Technologies</p>
                 </div>
                 <span className="text-sm font-bold text-[var(--text-muted)] bg-[rgba(255,255,255,0.05)] px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">JUN 2024 — PRESENT</span>
               </div>
               <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-3">
                 Leading multi-cloud infrastructure deployment and establishing automated CI/CD pipelines to ensure scalable, secure delivery. Specializing in Terraform architecture and Python/Bash automation toolsets.
               </p>
            </div>
          </div>

          {/* Intern Role */}
          <div className="timeline-item">
            <div className="timeline-marker bg-slate-600"></div>
            <div className="timeline-content opacity-80 transition-opacity hover:opacity-100">
               <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                 <div>
                    <h3 className="font-bold text-xl text-[var(--text-color)]">DevOps Engineer Intern</h3>
                    <p className="text-[var(--secondary)] font-medium">OpsBee Technologies</p>
                 </div>
                 <span className="text-sm font-bold text-[var(--text-muted)] bg-[rgba(255,255,255,0.05)] px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">MAR 2024 — JUN 2024</span>
               </div>
               <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                 Established foundational knowledge in modern DevOps practices, assisting senior engineers with cloud infrastructure monitoring, Docker troubleshooting, and Linux system administration.
               </p>
            </div>
          </div>
        </div>
      </section>


      {/* Education */}
      <section className="about-section reveal edu-section">
        <div className="section-header">
          <div className="header-line"></div>
          <h2 className="section-title">Education</h2>
        </div>
        
        <div className="edu-timeline">
          <div className="edu-item">
            <div className="edu-icon-col">
              <div className="edu-icon-wrapper active">
                <GraduationCap size={20} />
              </div>
              <div className="edu-line"></div>
            </div>
            <div className="edu-content">
              <div className="edu-header">
                <h3 className="edu-degree">Master of Computer Applications</h3>
                <span className="edu-date active-date">Jul 2024</span>
              </div>
              <p className="edu-school">VIT Bhopal University, Madhya Pradesh</p>
              <p className="edu-desc">CGPA: 7.9/10. Focus on advanced computing and infrastructure systems.</p>
            </div>
          </div>

          <div className="edu-item">
            <div className="edu-icon-col">
              <div className="edu-icon-wrapper inactive">
                <GraduationCap size={20} />
              </div>
            </div>
            <div className="edu-content">
              <div className="edu-header">
                <h3 className="edu-degree">Bachelor of Computer Applications</h3>
                <span className="edu-date inactive-date">Aug 2022</span>
              </div>
              <p className="edu-school">Ambedkar Institute of Technology, Delhi</p>
              <p className="edu-desc">CGPA: 8.3/10. Focus on Software Engineering and Core Computer Science.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
