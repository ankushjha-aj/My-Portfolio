import Link from "next/link";
import { TerminalSquare, Server, Shield, Activity, Container, Cloud } from "lucide-react";
import Terminal from "@/components/Terminal";

const TECH_ITEMS = [
  "Docker", "Kubernetes", "Terraform", "Ansible", "AWS", "GCP", "Azure",
  "Hetzner", "GitHub Actions", "GitLab CI/CD", "Jenkins", "ECS", "EKS",
  "GKE", "Red Hat OpenShift", "CloudWatch", "Python", "Bash", "Git",
  "SonarQube", "Lambda", "Route53", "Docker Compose", "Nginx",
];

export default function Home() {
  return (
    <div className="w-full relative z-10">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white/80 dark:bg-slate-900/80 py-12 lg:py-16 border-b border-slate-200 dark:border-slate-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left animate-slideInLeft">
              <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
                DevOps Engineer
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                Hi, I'm <span className="text-primary">Ankush Kumar Jha</span>
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Highly motivated DevOps Engineer with hands-on experience in automation, cloud infrastructure optimization, and security implementation. Specializing in multi-cloud technologies, Red Hat OpenShift, Infrastructure as Code, and advanced CI/CD pipelines.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link href="/experience" className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-custom shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all">
                  View My Stack
                </Link>
                <Link href="/projects" className="px-6 py-2.5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-semibold rounded-custom hover:border-primary transition-all">
                  Latest Work
                </Link>
              </div>
            </div>
            <div className="w-full">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Tech Stack Marquee */}
      <section className="py-6 bg-slate-50/80 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="w-full px-4 mb-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white text-center">Technical Stack</h2>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee w-max gap-3">
            {[...TECH_ITEMS, ...TECH_ITEMS].map((tech, i) => (
              <span key={i} className="shrink-0 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 rounded-custom shadow-sm hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-colors cursor-default whitespace-nowrap">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Areas */}
      <section className="py-10 bg-white/80 dark:bg-slate-900/80 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 w-full">
            <div className="p-6 bg-slate-900 dark:bg-slate-800 rounded-custom text-white border border-transparent dark:border-slate-700 animate-fadeInUp">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold mb-2 text-white">Multi-Cloud Infrastructure</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                AWS, GCP, Azure & Hetzner Cloud. EC2, ECS, EKS, GKE, Compute Engine, Route53 — scalable solutions across providers.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-custom hover:border-primary transition-colors animate-fadeInUp" style={{animationDelay: "0.1s"}}>
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-slate-900 dark:text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">IaC & Automation</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Terraform frameworks for multi-cloud environments, Ansible playbooks, Shell & Python scripts — automated provisioning through CI/CD.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-custom hover:border-primary transition-colors animate-fadeInUp" style={{animationDelay: "0.2s"}}>
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-5 h-5 text-slate-900 dark:text-white" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">CI/CD & OpenShift</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                GitHub Actions, GitLab CI/CD, AWS CodePipeline, Jenkins. Red Hat OpenShift deployment for government infrastructure (NDMC).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-slate-100/80 dark:bg-slate-800/50 w-full border-t border-slate-200 dark:border-slate-800">
        <div className="w-full px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Ready to Scale?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm max-w-xl mx-auto">
            Available for consulting, full-time roles, and infrastructure optimization projects.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-white text-sm font-bold bg-primary rounded-custom shadow-lg hover:opacity-90 transition-all gap-2">
            Let's Talk <TerminalSquare size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
