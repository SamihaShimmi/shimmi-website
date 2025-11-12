"use client";

const researchAreas = [
  {
    title: "Attack-Defense Co-evolution Analysis",
    description: "Investigating how security vulnerabilities and their fixes co-evolve over time, with particular focus on the unintended reintroduction of vulnerabilities during the fixing process. This research analyzes vulnerability-reintroducing patterns across semantic, syntactic, and contextual dimensions of code changes in open-source software repositories.",
    topics: ["Vulnerability Co-evolution", "Fix Pattern Analysis", "Semantic Code Analysis", "Syntactic Pattern Recognition"],
    icon: "⚔️"
  },
  {
    title: "Predictive Vulnerability Detection",
    description: "Developing techniques to predict future cyber attacks in software by identifying risky fix patterns. This work integrates deep learning, machine learning, and large language models (LLMs) with software engineering techniques to enable more effective and proactive vulnerability prediction solutions.",
    topics: ["Cyber Attack Prediction", "Deep Learning", "Large Language Models", "Proactive Security"],
    icon: "🔮"
  },
  {
    title: "Software Security Pattern Mining",
    description: "Mining and analyzing patterns in software repositories to understand how security vulnerabilities are introduced and fixed. This includes developing automated techniques for identifying vulnerability-reintroducing patterns and understanding the contextual factors that contribute to security issues.",
    topics: ["Pattern Mining", "Repository Analysis", "Automated Detection", "Security Metrics"],
    icon: "🛡️"
  },
  {
    title: "LLM-based Code Analysis",
    description: "Applying large language models and transformer architectures to understand semantic and contextual aspects of security-related code modifications. This research explores how modern AI can identify subtle vulnerability patterns that traditional static analysis tools miss.",
    topics: ["Transformer Models", "Semantic Analysis", "Code Understanding", "AI for Security"],
    icon: "🤖"
  },
  {
    title: "Empirical Software Security",
    description: "Conducting empirical studies on large-scale software repositories to understand security trends, vulnerability lifecycles, and the effectiveness of different security practices. This work provides evidence-based insights into software security challenges.",
    topics: ["Empirical Studies", "Large-scale Analysis", "Security Metrics", "Statistical Analysis"],
    icon: "📊"
  },
  {
    title: "Contextual Security Analysis",
    description: "Analyzing the contextual factors that influence security vulnerability introduction and fixing. This includes studying developer behavior, project characteristics, and environmental factors that contribute to security issues in software development.",
    topics: ["Contextual Analysis", "Developer Behavior", "Project Factors", "Environmental Impact"],
    icon: "🔍"
  }
];

const currentProjects = [
  {
    title: "Dissertation: Predicting Future Cyber Attacks through Co-evolution Analysis",
    status: "Ongoing",
    description: "Main dissertation research focusing on identifying attack-defense co-evolution patterns to predict future vulnerabilities. Analyzing open-source repositories to understand how vulnerability fixes can unintentionally reintroduce security issues, and developing ML/DL techniques for proactive prediction.",
    collaborators: ["Dr. Mona Rahimi (Advisor)", "NIU Computer Science Department"],
    funding: "NIU Graduate Research Fellowship",
    icon: "🎓",
    statusColor: "bg-blue-600"
  },
  {
    title: "Large Language Models for Vulnerability Pattern Recognition",
    status: "Ongoing",
    description: "Leveraging LLMs to identify and classify vulnerability-reintroducing patterns in code changes. This project explores how transformer-based models can understand semantic and contextual aspects of security-related code modifications.",
    collaborators: ["Argonne National Laboratory (Upcoming)", "Dr. Mona Rahimi"],
    funding: "Argonne National Laboratory Research Aide Position",
    icon: "🤖",
    statusColor: "bg-emerald-600"
  },
  {
    title: "Semantic Analysis of Security Fix Patterns",
    status: "Ongoing",
    description: "Developing automated techniques to analyze the semantic, syntactic, and contextual dimensions of security-related code changes. Focus on understanding how well-intentioned fixes can introduce new vulnerabilities.",
    collaborators: ["NIU Research Team"],
    funding: "NIU Graduate Research Support",
    icon: "📊",
    statusColor: "bg-indigo-600"
  }
];

export default function Research() {
  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-3xl lg:text-4xl font-medium text-slate-800 dark:text-slate-200 mb-4">
          Research
        </h1>
      </header>
      
      <section>
        <h2 className="text-2xl font-medium mb-8 flex items-center text-slate-800 dark:text-slate-200">
          <span className="mr-4 text-3xl">🔬</span>
          Research Interests
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-700 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center mr-5 shadow-md">
                  <span className="text-white text-2xl">{area.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                  {area.title}
                </h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                {area.description}
              </p>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 text-sm uppercase tracking-wide">Key Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {area.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="text-sm bg-slate-600 text-white px-3 py-1.5 rounded-full shadow-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-8 flex items-center text-slate-800 dark:text-slate-200">
          <span className="mr-4 text-3xl">🚀</span>
          Current Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-900/50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center flex-1">
                  <div className="w-12 h-12 bg-slate-600 dark:bg-slate-500 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                    <span className="text-white text-xl">{project.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 leading-tight">{project.title}</h3>
                </div>
                <span className={`text-xs text-white px-3 py-1.5 rounded-full shadow-sm ${project.statusColor} ml-4 whitespace-nowrap`}>
                  {project.status}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-start">
                  <span className="mr-3 mt-0.5 text-base">👥</span>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">Collaborators:</strong> 
                    <span className="ml-1">{project.collaborators.join(", ")}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 mt-0.5 text-base">💰</span>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">Funding:</strong> 
                    <span className="ml-1 text-emerald-700 dark:text-emerald-400 font-medium">{project.funding}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-8 flex items-center text-slate-800 dark:text-slate-200">
          <span className="mr-4 text-3xl">⚗️</span>
          Research Methodology
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-slate-50 dark:bg-slate-900/30 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-slate-600 dark:bg-slate-500 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white text-lg">📊</span>
              </div>
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">Empirical Analysis</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Large-scale analysis of real-world software repositories, vulnerability databases, 
              and attack patterns to understand current security challenges.
            </p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-200 dark:border-emerald-800">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-emerald-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white text-lg">🛠️</span>
              </div>
              <h3 className="font-semibold text-emerald-700 dark:text-emerald-400">Tool Development</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Creating practical tools and frameworks that can be adopted by industry 
              and the open source community for improved software security.
            </p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-600 dark:bg-indigo-500 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white text-lg">🧠</span>
              </div>
              <h3 className="font-semibold text-indigo-700 dark:text-indigo-400">Machine Learning</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Applying ML/AI techniques to automate vulnerability detection and 
              predict security trends in software development.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-amber-200 dark:border-amber-800">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-600 dark:bg-amber-500 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white text-lg">🧪</span>
              </div>
              <h3 className="font-semibold text-amber-700 dark:text-amber-400">Experimental Validation</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Rigorous experimental evaluation of proposed approaches using both 
              synthetic and real-world datasets to ensure practical applicability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 dark:bg-slate-900/50 p-8 lg:p-12 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-slate-600 dark:bg-slate-500 rounded-xl flex items-center justify-center mr-4">
            <span className="text-white text-xl">💭</span>
          </div>
          <h2 className="text-2xl font-medium text-slate-800 dark:text-slate-200">Research Philosophy</h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg max-w-4xl">
          My research is driven by the belief that <span className="font-semibold text-slate-700 dark:text-slate-300">software security</span> is a fundamental requirement 
          for our increasingly digital world. I am committed to developing <span className="font-semibold text-indigo-700 dark:text-indigo-400">practical, evidence-based 
          solutions</span> that can be adopted by both industry and the open source community. My approach 
          emphasizes <span className="font-semibold text-emerald-700 dark:text-emerald-400">rigorous empirical evaluation</span>, reproducible research, and the development of 
          tools that address real-world security challenges. I believe in the importance of 
          <span className="font-semibold text-blue-700 dark:text-blue-400"> interdisciplinary collaboration</span> and am passionate about mentoring the next generation 
          of cybersecurity researchers and practitioners.
        </p>
      </section>
    </div>
  );
} 