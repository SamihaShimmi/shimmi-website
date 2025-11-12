export interface Project {
  title: string;
  year: number;
  description: string;
  url?: string;
  category: "research" | "software" | "collaboration" | "coursework";
  status: "completed" | "ongoing" | "planned";
  technologies?: string[];
  collaborators?: string[];
  publications?: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Predicting Future Cyber Attacks through Attack-Defense Co-evolution",
    year: 2024,
    description: "Dissertation research analyzing how security vulnerabilities and their fixes co-evolve over time. Focuses on identifying vulnerability-reintroducing patterns across semantic, syntactic, and contextual dimensions of code changes in open-source software repositories to predict future vulnerabilities based on risky fix patterns.",
    category: "research",
    status: "ongoing",
    technologies: ["Python", "Deep Learning", "LLMs", "Machine Learning", "Git Analysis", "AST Parsing"],
    collaborators: ["Dr. Mona Rahimi", "NIU Computer Science Department"],
    github: "https://github.com/yourusername/attack-defense-coevolution",
    publications: ["Dissertation in progress", "Conference paper under review"]
  },
  {
    title: "Large Language Models for Vulnerability Pattern Recognition",
    year: 2024,
    description: "Research project leveraging transformer-based models and LLMs to identify and classify vulnerability-reintroducing patterns in code changes. Explores how modern AI can understand semantic and contextual aspects of security-related code modifications.",
    category: "research",
    status: "ongoing",
    technologies: ["Transformers", "BERT", "GPT", "PyTorch", "Hugging Face", "Python"],
    collaborators: ["Argonne National Laboratory", "Dr. Mona Rahimi"],
    github: "https://github.com/yourusername/llm-vulnerability-patterns",
    publications: ["Workshop paper submitted"]
  },
  {
    title: "Semantic Analysis Framework for Security Fixes",
    year: 2023,
    description: "Automated framework for analyzing semantic, syntactic, and contextual dimensions of security-related code changes. Developed tools to understand how well-intentioned security fixes can unintentionally introduce new vulnerabilities.",
    category: "software",
    status: "completed",
    technologies: ["Python", "AST Analysis", "Code2Vec", "Tree-sitter", "Git", "Docker"],
    collaborators: ["NIU Research Team"],
    github: "https://github.com/yourusername/semantic-security-analysis",
    publications: ["Tool demo paper accepted"]
  },
  {
    title: "Vulnerability Co-evolution Dataset",
    year: 2023,
    description: "Comprehensive dataset of vulnerability fixes and their evolution patterns collected from major open-source repositories. Includes semantic, syntactic, and contextual features of security-related code changes for research community use.",
    category: "software",
    status: "completed",
    technologies: ["Python", "GitHub API", "CVE Database", "PostgreSQL", "Docker"],
    github: "https://github.com/yourusername/vulnerability-coevolution-dataset",
    demo: "https://vuln-dataset.research.niu.edu",
    publications: ["Dataset paper published"]
  },
  {
    title: "Advanced Machine Learning for Cybersecurity Course Project",
    year: 2022,
    description: "Graduate course project implementing novel deep learning approaches for vulnerability detection. Achieved 15% improvement over baseline methods in detecting security-critical code patterns using attention mechanisms.",
    category: "coursework",
    status: "completed",
    technologies: ["TensorFlow", "Keras", "Attention Mechanisms", "Python"],
    github: "https://github.com/yourusername/ml-cybersecurity-project"
  },
  {
    title: "Software Security Metrics Analysis",
    year: 2022,
    description: "Research collaboration analyzing security metrics across different programming languages and frameworks. Contributed to understanding how different development practices affect vulnerability introduction rates.",
    category: "collaboration",
    status: "completed",
    technologies: ["R", "Statistical Analysis", "Python", "Jupyter"],
    collaborators: ["Florida State University Alumni", "Industry Partners"],
    github: "https://github.com/yourusername/security-metrics-analysis",
    publications: ["Co-authored conference paper"]
  }
];
