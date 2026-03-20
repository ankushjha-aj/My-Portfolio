import Link from "next/link";
import { FolderGit2, MoveRight, Layers, Github, ExternalLink } from "lucide-react";

const CV_PROJECTS = [
  {
    title: "BINGE-PLUS",
    desc: "Movie Streaming Website (In Development). Full-stack streaming platform with cloud-native infrastructure, encrypted storage, and automated deployment pipelines.",
    tech: ["Node.js", "MongoAtlas", "GCP", "Terraform", "CI/CD", "Ansible", "KMS", "Docker", "Cloud Storage"],
    github: "https://github.com/binge-plus/BINGE-PLUS",
    color: "from-violet-600 to-primary",
  },
  {
    title: "Plakar Dashboard",
    desc: "A custom GUI for Plakar — manage encrypted backups visually. Features backup management, restore operations, and real-time monitoring through an intuitive web interface.",
    tech: ["Plakar CLI", "Node.js", "SonarQube Cloud"],
    github: "https://github.com/ankushjha-aj/plakar-dashboard",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Indian Army Medical Database",
    desc: "Received a Certificate of Appreciation from the Indian Army for developing a secure web application for Medical Record Management. Handles sensitive patient data with encryption.",
    tech: ["Secure Web App", "Medical Records", "Database", "Encryption"],
    github: "#",
    color: "from-amber-500 to-orange-600",
  },
];

const GITHUB_REPOS = [
  { name: "Docker-to-K8", desc: "Migration guide from Docker Compose to Kubernetes manifests", url: "https://github.com/ankushjha-aj/Docker-to-K8" },
  { name: "Automation_Scripts_CLOUD_Env", desc: "Automation scripts for cloud environments (AWS/GCP)", url: "https://github.com/ankushjha-aj/Automation_Scripts_CLOUD_Env" },
  { name: "terraform-worflow-makefile", desc: "Terraform workflow automation with Makefile integration", url: "https://github.com/ankushjha-aj/terraform-worflow-makefile" },
  { name: "AWS-ECS_SETUP", desc: "Complete AWS ECS cluster setup with Terraform & CI/CD", url: "https://github.com/ankushjha-aj/AWS-ECS_SETUP" },
  { name: "devops-cheatsheet", desc: "Comprehensive DevOps commands and configuration cheatsheet", url: "https://github.com/ankushjha-aj/devops-cheatsheet" },
  { name: "AWS-SECRET-CODE-DEPLOY", desc: "AWS Secrets Manager integration for secure deployments", url: "https://github.com/ankushjha-aj/AWS-SECRET-CODE-DEPLOY" },
  { name: "Nagios-Setup", desc: "Nagios monitoring server setup and configuration guide", url: "https://github.com/ankushjha-aj/Nagios-Setup" },
  { name: "k8-actions", desc: "Kubernetes deployment automation with GitHub Actions", url: "https://github.com/ankushjha-aj/k8-actions" },
];

export default function Projects() {
  return (
    <div className="w-full relative z-10">
      {/* Header */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white py-10 border-b border-primary/20 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
            Engineering <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Real-world projects in cloud infrastructure, CI/CD automation, and secure application architecture.
          </p>
        </div>
      </section>

      {/* Main Projects (from CV) */}
      <section className="py-10 bg-white/80 dark:bg-slate-900/80 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {CV_PROJECTS.map((project) => (
              <div key={project.title} className="group rounded-custom overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-primary/50 transition-all">
                <div className={`h-28 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <h3 className="text-white text-lg font-extrabold tracking-tight text-center px-4">{project.title}</h3>
                </div>
                <div className="p-5">
                  <div className="flex gap-1.5 mb-3 flex-wrap">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="flex items-center gap-1 bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-500 dark:text-slate-400">
                        <Layers size={10} /> {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[10px] text-slate-400">+{project.tech.length - 4}</span>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-xs mb-4 leading-relaxed line-clamp-3">{project.desc}</p>
                  {project.github !== "#" ? (
                    <Link href={project.github} target="_blank" className="inline-flex items-center gap-1 text-primary text-xs font-bold hover:gap-2 transition-all">
                      View on GitHub <MoveRight size={14} />
                    </Link>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Private / Classified</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Repos — Scrolling Marquee */}
      <section className="py-8 bg-slate-50/80 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 overflow-hidden w-full">
        <div className="w-full px-4 mb-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white text-center flex items-center justify-center gap-2">
            <FolderGit2 size={18} className="text-slate-400" /> More from GitHub
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-1">Open source repositories and infrastructure templates</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee w-max gap-4">
            {[...GITHUB_REPOS, ...GITHUB_REPOS].map((repo, i) => (
              <a key={i} href={repo.url} target="_blank"
                className="shrink-0 w-64 p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-custom shadow-sm hover:border-primary hover:shadow-md transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <Github size={14} className="text-slate-400 group-hover:text-primary transition-colors" />
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors truncate">{repo.name}</h4>
                  <ExternalLink size={10} className="ml-auto text-slate-400 shrink-0" />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{repo.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Profile CTA */}
      <section className="py-8 w-full border-t border-slate-200 dark:border-slate-800">
        <div className="w-full px-4 text-center">
          <Link href="https://github.com/ankushjha-aj" target="_blank"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-custom shadow-lg hover:opacity-90 transition-opacity">
            <Github size={16} /> View All Repositories <ExternalLink size={12} />
          </Link>
        </div>
      </section>
    </div>
  );
}
