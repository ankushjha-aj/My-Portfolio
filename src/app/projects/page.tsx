import Link from 'next/link';
import { ExternalLink, Github, MonitorPlay, HardDrive, Code2, AlertCircle } from 'lucide-react';
import './projects.css';

// 1. Fetch GitHub data server-side
async function getGithubRepos() {
  try {
    const res = await fetch('https://api.github.com/users/ankushjha-aj/repos?sort=updated&per_page=30', {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch from GitHub');
    }
    
    return await res.json();
  } catch (error) {
    console.error("GitHub API Error:", error);
    return null;
  }
}

export default async function Projects() {
  const allRepos = await getGithubRepos();

  // 2. Filter logic
  // Hardcoded featured data to ensure they always show perfectly
  const featuredProjects = [
    {
      id: "binge-plus",
      title: "Binge+ Platform",
      category: "Live Streaming Architecture",
      year: "2024",
      description: "A highly scalable movie streaming website built with robust cloud infrastructure. Deployed on Google Cloud Platform, utilizing Docker for containerization and Terraform for infrastructure as code, ensuring high availability and seamless content delivery.",
      technologies: ["GCP", "Docker", "Terraform", "Node.js"],
      icon: <MonitorPlay size={40} className="text-secondary" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      repoLink: "https://github.com/ankushjha-aj" // Fallback link
    },
    {
      id: "plakar-ui",
      title: "Plakar UI Dashboard",
      category: "CLI GUI Integration",
      year: "2023",
      description: "A custom Graphical User Interface for the Plakar CLI backup tool. Built to visually manage encrypted, versioned backups. This project bridges the gap between complex command-line operations and user-friendly visual state management.",
      technologies: ["React", "Node.js", "CLI Integration"],
      icon: <HardDrive size={40} className="text-primary" />,
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1200',
      repoLink: "https://github.com/ankushjha-aj"
    }
  ];

  // Exclude featured repos by name from the carousel (if they exist under these names)
  // Also EXPLICITLY filter out 'Army' or 'Medical' related strings per user instruction.
  let carouselRepos = [];
  if (allRepos && Array.isArray(allRepos)) {
    carouselRepos = allRepos
      .filter((repo: any) => 
        !repo.name.toLowerCase().includes('binge') && 
        !repo.name.toLowerCase().includes('plakar') &&
        !repo.name.toLowerCase().includes('army') &&
        !repo.name.toLowerCase().includes('medical')
      )
      .slice(0, 12); // Grab up to 12
  }

  return (
    <div className="projects-page-container section-padding">
      <div className="projects-page-header animate-slide-up">
        <h1 className="projects-page-title">
          Engineering <span className="text-primary">Portfolio</span>
        </h1>
        <p className="projects-page-subtitle">
          A showcase of architectural designs, infrastructure deployments, and automation tools. This data is actively fetched from my GitHub profile.
        </p>
      </div>

      {/* 3. Featured Projects (Top 2) */}
      <h2 className="section-title mb-8 reveal">Featured Deployments</h2>
      <div className="projects-list mb-24">
        {featuredProjects.map((project, index) => (
          <div key={project.id} className={`project-showcase-row reveal ${index % 2 !== 0 ? 'row-reverse' : ''}`}>
            
            <div className="project-visual-col">
              <div className="project-visual-wrapper">
                <div className="project-visual-glow"></div>
                <div 
                  className="project-visual-bg"
                  style={{ backgroundImage: `url("${project.image}")` }}
                ></div>
                <div className="project-status-badge outline-primary">
                  Featured
                </div>
              </div>
            </div>

            <div className="project-details-col">
              <div className="project-headline">
                <div className="project-meta-top">
                  {project.icon}
                  <div className="project-meta-tags">
                    <span className="tag-category">{project.category}</span>
                    <span className="tag-year text-secondary">{project.year}</span>
                  </div>
                </div>
                <h2 className="project-title-large">{project.title}</h2>
              </div>
              
              <p className="project-description-full">
                {project.description}
              </p>
              
              <div className="project-tech-stack-list">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-chip">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.repoLink} className="btn-secondary flex-center gap-2" target="_blank" rel="noopener noreferrer">
                  <span>Source Code</span>
                  <Github size={18} />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* 4. Horizontal GitHub Integration Carousel */}
      <div className="github-carousel-section reveal">
         <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="section-title">Open Source Repositories</h2>
              <p className="text-[var(--text-muted)] mt-2">Latest projects fetched dynamically from GitHub API.</p>
            </div>
            <a href="https://github.com/ankushjha-aj" target="_blank" rel="noopener noreferrer" className="view-all-link hidden md:flex">
              View full profile <ExternalLink size={18} />
            </a>
         </div>

         {!carouselRepos || carouselRepos.length === 0 ? (
           <div className="api-error-state">
              <AlertCircle size={32} className="text-secondary mb-4" />
              <p>GitHub repositories could not be fetched at this time.</p>
              <a href="https://github.com/ankushjha-aj" target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">Visit GitHub Directly</a>
           </div>
         ) : (
           <div className="carousel-container">
             <div className="carousel-track">
               {carouselRepos.map((repo: any) => (
                 <a 
                   href={repo.html_url} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   key={repo.id} 
                   className="carousel-card block group"
                 >
                    <div className="flex justify-between items-start mb-4">
                       <Code2 size={24} className="text-primary group-hover:text-secondary transition-colors" />
                       <Github size={20} className="text-[var(--text-muted)] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg text-[var(--text-color)] mb-2 truncate" title={repo.name}>
                       {repo.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] line-clamp-3 mb-4 h-[60px]">
                       {repo.description || "No description provided for this repository."}
                    </p>
                    <div className="flex justify-between items-center mt-auto border-t border-[var(--border-color)] pt-3">
                       <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span>
                          <span className="text-xs font-semibold">{repo.language || "Shell"}</span>
                       </div>
                       <span className="text-xs text-[var(--text-muted)]">⭐ {repo.stargazers_count}</span>
                    </div>
                 </a>
               ))}
             </div>
           </div>
         )}
         <a href="https://github.com/ankushjha-aj" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full text-center mt-6 flex justify-center md:hidden">
            Show More on GitHub
         </a>
      </div>
    </div>
  );
}
