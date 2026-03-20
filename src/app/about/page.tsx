import { Settings, ShieldCheck, ActivitySquare, GraduationCap, Briefcase } from "lucide-react";

const SKILLS = [
  "AWS", "GCP", "Azure", "Hetzner", "DigitalOcean", "Docker", "ECS", "EKS", "GKE",
  "Red Hat OpenShift", "Terraform", "Ansible", "GitHub Actions", "GitLab CI/CD",
  "Jenkins", "AWS CodePipeline", "Lambda", "CloudWatch", "GCP Uptime Checks",
  "Signoz", "Python", "Bash", "Git", "Ubuntu", "SonarQube",
];

export default function About() {
  return (
    <div className="w-full relative z-10">
      {/* Hero */}
      <section className="py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-slideInLeft">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                Ankush <span className="text-primary">Kumar Jha</span>
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Highly motivated DevOps Engineer with hands-on experience in automation, cloud infrastructure optimization, and security implementation. Proven track record in fast-paced environments, successfully applying expertise in multi-cloud technologies, Red Hat OpenShift, Infrastructure as Code, and advanced CI/CD pipelines to streamline software delivery processes.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                Strong academic background in Computer Science and Applications, complemented by practical experience in Security Analysis and modern DevOps and SecOps practices.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-custom border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Available for Opportunities
                </span>
                <span className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-1.5 rounded-custom border border-slate-200 dark:border-slate-700 shadow-sm text-xs font-semibold text-slate-700 dark:text-slate-300">
                  📍 Delhi, India
                </span>
              </div>
            </div>
            <div className="relative animate-slideInRight">
              <div className="aspect-square bg-slate-200 dark:bg-slate-800 rounded-custom overflow-hidden shadow-xl w-full max-w-sm mx-auto">
                <img
                  alt="Ankush Kumar Jha"
                  className="w-full h-full object-cover"
                  src="/profile.png"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 dark:bg-primary/10 -z-10 rounded-custom"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-10 bg-slate-50/80 dark:bg-slate-900/50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" size={20} /> Education
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-custom border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Master of Computer Application (MCA)</h3>
              <p className="text-primary text-xs font-semibold mt-1">VIT Bhopal University, Madhya Pradesh</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Jul 2024 • CGPA: 7.9/10</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-custom border border-slate-100 dark:border-slate-700 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm">Bachelor of Computer Application (BCA)</h3>
              <p className="text-primary text-xs font-semibold mt-1">Ambedkar Institute of Technology, Delhi</p>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Aug 2022 • CGPA: 8.3/10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-10 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1 text-center">Core Philosophy</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-custom border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-custom mb-4">
                <Settings size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Automation First</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">If a task is performed twice, it should be automated. IaC ensures consistency and speed across environments.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-custom border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-custom mb-4">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Security by Default</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">Integrating DevSecOps practices from the initial design phase to mitigate risks before code hits production.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-custom border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-custom mb-4">
                <ActivitySquare size={20} />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Total Observability</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">CloudWatch, GCP Uptime Checks, Signoz — comprehensive monitoring to identify issues proactively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="py-8 bg-slate-50/80 dark:bg-slate-900/50 w-full overflow-hidden">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">Technical Toolkit</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee w-max gap-3">
            {[...SKILLS, ...SKILLS].map((s, i) => (
              <span key={i} className="shrink-0 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 rounded-custom shadow-sm hover:border-primary transition-colors whitespace-nowrap">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-10 bg-slate-900 dark:bg-slate-950 text-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="text-primary" size={20} /> Certifications & Recognition
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 border-l-4 border-primary pl-4">
              <div>
                <h4 className="font-bold text-sm text-white">Indian Army — Certificate of Appreciation</h4>
                <p className="text-slate-400 text-xs">Developed a secure web application for Medical Record Management</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
