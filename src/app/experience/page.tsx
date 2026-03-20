import { CheckCircle2, Briefcase } from "lucide-react";

export default function Expertise() {
  return (
    <div className="w-full relative z-10">
      {/* Hero */}
      <section className="py-10 md:py-14 bg-white/80 dark:bg-slate-900/80 border-b border-slate-100 dark:border-slate-800 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 animate-slideInLeft">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight">
            Professional <span className="text-primary">Experience</span>
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            Specializing in multi-cloud infrastructure, Red Hat OpenShift, CI/CD automation, and Infrastructure as Code. Proven track record in fast-paced DevOps environments.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-8 bg-slate-50/80 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-custom border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-xs text-primary uppercase tracking-wider mb-2">Cloud Platforms</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">AWS (EC2, ECR, ECS, EKS, CodePipeline, KMS, Route53), GCP (GKE, Compute Engine, Artifact Registry, CloudSQL, Machine Images), Azure, Hetzner, DigitalOcean</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-custom border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-xs text-primary uppercase tracking-wider mb-2">CI/CD & Automation</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">GitHub Actions, AWS CodePipeline, GitLab Pipeline, Jenkins, AWS Lambda, Task Definitions, Bash, Python</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-custom border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-xs text-primary uppercase tracking-wider mb-2">Infrastructure & Containers</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Terraform, Ansible, Docker, ECS, EKS, GKE, Red Hat OpenShift</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-custom border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-xs text-primary uppercase tracking-wider mb-2">Monitoring & OS</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">AWS CloudWatch, GCP Uptime Checks, Signoz, Ubuntu, Windows, Git</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-10 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1 text-center">Professional Journey</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8 rounded-full"></div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {/* Role 1 */}
            <div className="relative pl-6 border-l-2 border-primary">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full shadow-lg"></div>
              <div className="mb-1">
                <span className="text-primary text-xs font-bold">Jun 2024 — Present</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">DevOps Engineer</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">OpsBee Technologies</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-custom shadow-sm border border-slate-100 dark:border-slate-700 mt-2">
                <ul className="space-y-2">
                  <li className="flex gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    <span><strong>Red Hat OpenShift:</strong> Designed and deployed infrastructure for Delhi Government (NDMC) on-site. Led migration from RHEV to OpenShift. Integrated external ONTAP SAN storage, configured networking, nodes, and DNS.</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    <span><strong>Multi-Cloud Infrastructure:</strong> Hands-on with AWS (EC2, ECR, ECS, EKS, CodePipeline, KMS, Route53) and GCP (GKE, Compute Engine, Artifact Registry, CloudSQL, Machine Images) for scalable cloud solutions.</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    <span><strong>Terraform Frameworks:</strong> Created comprehensive IaC for multi-cloud environments (AWS, GCP, Hetzner Cloud) with automated resource provisioning, ECR-ECS deployment workflows, SSL renewal, and reusable workflows.</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    <span><strong>CI/CD Pipelines:</strong> Designed robust pipelines across GitHub Actions, GitLab CI/CD, and GCP Cloud Build for automated testing, building, and deployment.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Role 2 */}
            <div className="relative pl-6 border-l-2 border-slate-300 dark:border-slate-700">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-400 dark:bg-slate-600 rounded-full shadow"></div>
              <div className="mb-1">
                <span className="text-primary text-xs font-bold">Mar 2024 — Jun 2024</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">DevOps Engineer Intern</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">OpsBee Technologies</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-custom shadow-sm border border-slate-100 dark:border-slate-700 mt-2">
                <ul className="space-y-2">
                  <li className="flex gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    <span><strong>CI/CD Pipeline:</strong> Collaborated with senior DevOps engineers to design and implement CI/CD pipelines for various applications and platforms via GitHub Actions.</span>
                  </li>
                  <li className="flex gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    <span><strong>Automation:</strong> Created automation scripts in Shell Scripting, reducing manual effort. Created Python scripts for GCP automation, including firewall rules and address groups.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
