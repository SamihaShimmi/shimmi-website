import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My research projects and academic work",
};

function ProjectCard({ project }: { project: any }) {
  const categoryColors = {
    "research": {
      bg: "bg-slate-50 dark:bg-slate-900/30",
      badge: "bg-slate-600",
      border: "border-slate-200 dark:border-slate-700",
      icon: "🔬"
    },
    "software": {
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      badge: "bg-emerald-600",
      border: "border-emerald-200 dark:border-emerald-800",
      icon: "💻"
    },
    "collaboration": {
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      badge: "bg-indigo-600",
      border: "border-indigo-200 dark:border-indigo-800",
      icon: "🤝"
    },
    "coursework": {
      bg: "bg-amber-50 dark:bg-amber-900/20",
      badge: "bg-amber-600",
      border: "border-amber-200 dark:border-amber-800",
      icon: "📚"
    }
  };

  const statusColors = {
    "completed": "bg-emerald-600",
    "ongoing": "bg-blue-600",
    "planned": "bg-amber-600"
  };

  const categoryStyle = categoryColors[project.category as keyof typeof categoryColors];

  return (
    <div className={`${categoryStyle.bg} p-6 rounded-lg border ${categoryStyle.border} mb-6 shadow-sm hover:shadow-md transition-all duration-300`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className={`w-10 h-10 ${categoryStyle.badge} rounded-full flex items-center justify-center mr-4 shadow-sm`}>
            <span className="text-white text-lg">{categoryStyle.icon}</span>
          </div>
          <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 pr-4">
            {project.title}
          </h3>
        </div>
        <div className="flex gap-2">
          <span className={`text-xs px-3 py-1 rounded-full text-white whitespace-nowrap ${categoryStyle.badge} shadow-sm`}>
            {project.category}
          </span>
          <span className={`text-xs px-3 py-1 rounded-full text-white whitespace-nowrap ${statusColors[project.status as keyof typeof statusColors]} shadow-sm`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 flex items-center">
        <span className="mr-2">📅</span>
        <strong>Year:</strong> <span className="ml-1">{project.year}</span>
      </p>
      
      <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      {project.technologies && (
        <div className="mb-4">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-2 flex items-center">
            <span className="mr-2">🛠️</span>
            Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="text-xs bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm text-slate-600 dark:text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {project.collaborators && (
        <div className="mb-4">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1 flex items-center">
            <span className="mr-2">👥</span>
            Collaborators:
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {project.collaborators.join(", ")}
          </p>
        </div>
      )}
      
      {project.publications && (
        <div className="mb-4">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1 flex items-center">
            <span className="mr-2">📄</span>
            Publications:
          </p>
          <ul className="text-sm text-slate-600 dark:text-slate-400">
            {project.publications.map((pub: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-emerald-600">•</span>
                {pub}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
          >
            🌐 Website
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
          >
            💻 GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
          >
            🚀 Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const researchProjects = projects.filter(p => p.category === "research");
  const softwareProjects = projects.filter(p => p.category === "software");
  const collaborationProjects = projects.filter(p => p.category === "collaboration");
  const courseworkProjects = projects.filter(p => p.category === "coursework");

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium text-slate-800 dark:text-slate-200">
        Projects
      </h1>
      
      <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-slate-600 dark:bg-slate-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-lg">🎯</span>
          </div>
          <h2 className="text-lg font-medium text-slate-800 dark:text-slate-200">Portfolio Overview</h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          A collection of my <span className="font-semibold text-slate-700 dark:text-slate-300">research projects</span>, 
          <span className="font-semibold text-emerald-700 dark:text-emerald-400"> software contributions</span>, and 
          <span className="font-semibold text-indigo-700 dark:text-indigo-400"> academic work</span>. 
          Each project represents a step in my journey as a researcher and developer in the field of software security.
        </p>
      </div>

      {researchProjects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4 flex items-center text-slate-800 dark:text-slate-200">
            <span className="mr-3 text-2xl">🔬</span>
            Research Projects
          </h2>
          {researchProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}

      {softwareProjects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4 flex items-center text-slate-800 dark:text-slate-200">
            <span className="mr-3 text-2xl">💻</span>
            Software & Tools
          </h2>
          {softwareProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}

      {collaborationProjects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4 flex items-center text-slate-800 dark:text-slate-200">
            <span className="mr-3 text-2xl">🤝</span>
            Collaborative Work
          </h2>
          {collaborationProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}

      {courseworkProjects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4 flex items-center text-slate-800 dark:text-slate-200">
            <span className="mr-3 text-2xl">📚</span>
            Coursework & Learning
          </h2>
          {courseworkProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
