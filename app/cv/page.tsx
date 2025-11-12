import type { Metadata } from "next";
import { socialLinks } from "../lib/config";

export const metadata: Metadata = {
  title: "CV",
  description: "My academic and professional curriculum vitae",
};

const education = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Northern Illinois University",
    location: "DeKalb, IL, USA",
    period: "2021--Present",
    advisor: "Dr. Mona Rahimi",
    thesis: "Predicting future cyber attacks in software by identifying attack-defense co-evolution patterns",
    gpa: "3.975/4.0",
    summary: "This research focuses on how security vulnerabilities and their fixes co-evolve over time, particularly on the unintended reintroduction of vulnerabilities during the fixing process. By analyzing open-source software repositories, it identifies vulnerability-reintroducing patterns across semantic, syntactic, and contextual dimensions of code changes, and develops techniques to predict future vulnerabilities based on the risky fix patterns discovered. This work integrates deep learning, machine learning, large language models (LLMs), and a range of software engineering techniques in the application domain of software security to enable more effective and proactive vulnerability prediction solution."
  },
  {
    degree: "Master of Science in Computer Science",
    institution: "Florida State University",
    location: "Tallahassee, FL, USA",
    period: "2017--2019",
    gpa: "3.75/4.0"
  },
  {
    degree: "Bachelor of Science (Hons) in Computer Science & Engineering",
    institution: "University of Dhaka",
    location: "Dhaka, Bangladesh",
    period: "2004--2009"
  }
];

const experience = [
  {
    title: "Research Aide Technical (Summer Intern)",
    organization: "Argonne National Laboratory",
    location: "Lemont, IL",
    period: "Summer 2025",
    description: "",
  },
  {
    title: "Graduate Research Assistant",
    organization: "Northern Illinois University, Reliable AI-enabled Software Engineering Laboratory (RAISE)",
    location: "DeKalb, IL",
    period: "2021--Present",
    description: "",
  },
  {
    title: "Graduate Research Assistant",
    organization: "Florida State University, E-Crime Investigative Technologies Laboratory (ECIT)",
    location: "Tallahassee, FL",
    period: "2018--2019",
    description: "",
  },
  {
    title: "Software Engineer",
    organization: "BASIC Bank Limited, ICT Division",
    location: "Dhaka, Bangladesh",
    period: "2010--2017",
    description: "",
  }
];

const teachingExperience = [
  {
    title: "Graduate Teaching Assistant",
    organization: "Northern Illinois University",
    location: "DeKalb, IL, USA",
    period: "2021",
    description: ""
  },
  {
    title: "Lecturer",
    organization: "Ahsanullah University of Science & Technology",
    location: "Dhaka, Bangladesh", 
    period: "2020",
    description: ""
  },
  {
    title: "Graduate Teaching Assistant",
    organization: "Florida State University",
    location: "Tallahassee, FL, USA",
    period: "2017--2018",
    description: ""
  }
];

const publications = [
  {
    title: "AI-Based Software Vulnerability Detection: A Systematic Literature Review",
    authors: ["Samiha Shimmi", "Hamed Okhravi", "Mona Rahimi"],
    venue: "arXiv preprint arXiv:2506.10280",
    year: 2025,
    type: "preprint",
    arxiv: "https://arxiv.org/abs/2506.10280"
  },
  {
    title: "Enhanced Detection of Code Vulnerability with Synergy Between Data-Driven, Rule-Based, and Unsupervised Learnings",
    authors: ["Hibah Mohammed Ghouse", "Samiha Shimmi", "Mona Rahimi"],
    venue: "Proceedings of the 6th International Workshop on Engineering and Cybersecurity of Critical Systems (EnCyCriS) @ ICSE 2025",
    year: 2025,
    type: "publication",
    pdf: "https://ieeexplore.ieee.org/document/11029526/"
  },
  {
    title: "Software Vulnerability Detection Using LLM: Does Additional Information Help?",
    authors: ["Samiha Shimmi", "Yash Saini", "Mark Schaefer", "Hamed Okhravi", "Mona Rahimi"],
    venue: "Workshop on AI for Cyber Threat Intelligence (WAITI 2024) @ ACSAC 2024",
    year: 2024,
    type: "workshop",
    pdf: "https://ieeexplore.ieee.org/document/10917361/"
  },
  {
    title: "VulSim: Leveraging similarity of Multi-Dimensional neighbor embeddings for vulnerability detection",
    authors: ["Samiha Shimmi", "Ashiqur Rahman", "Mohan Gadde", "Hamed Okhravi", "Mona Rahimi"],
    venue: "33rd USENIX Security Symposium (USENIX 2024)",
    year: 2024,
    type: "conference",
    pdf: "https://www.usenix.org/system/files/usenixsecurity24-shimmi.pdf"
  },
  {
    title: "On Association of Code Change Types and CI Build Failures in Software Repositories",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "European Journal of Information Technologies and Computer Science (Ej-Compute 2024)",
    year: 2024,
    type: "journal",
    pdf: "https://www.ej-compute.org/index.php/compute/article/view/124"
  },
  {
    title: "Software Repositories for Patternizing Attack-and-Defense Co-Evolution",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "MSR4P&S, 1st International Workshop @ ESEC/FSE 2022",
    year: 2022,
    type: "workshop",
    pdf: "https://dl.acm.org/doi/abs/10.1145/3549035.3561181"
  },
  {
    title: "Leveraging Code-Test Co-evolution Patterns for Automated Test Case Recommendation",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "3rd ACM/IEEE International Conference on Automation of Software Test (AST 2022)",
    year: 2022,
    type: "conference",
    pdf: "https://dl.acm.org/doi/pdf/10.1145/3524481.3527222?casa_token=30tQ_RhZYsQAAAAA:wFOFzZ3r4f1juROkC1F_nfHerAEmT4ptsdJbMMA6WoM6V4p87GNup5veVLL0UOvH_PCtWy4pTYT8JA"
  },
  {
    title: "Patterns of Code-to-Test Coevolution for Automated Test Suite Maintenance",
    authors: ["Samiha Shimmi", "Mona Rahimi"],
    venue: "IEEE International Conference on Software Testing (ICST 2022)",
    year: 2022,
    type: "conference",
    pdf: "https://www.computer.org/csdl/proceedings-article/icst/2022/667900a116/1E2wAm23M88"
  },
  {
    title: "Analysis of iOS SQLite Schema Evolution for Updating Forensic Data Extraction Tools",
    authors: ["Samiha S. Shimmi", "Gokila Dorai", "Umit Karabiyik", "Sudhir Aggarwal"],
    venue: "International Symposium on Digital Forensics and Security (ISDFS 2020)",
    year: 2020,
    type: "conference",
    pdf: "https://www.researchgate.net/profile/Gokila-Dorai/publication/341909154_Analysis_of_iOS_SQLite_Schema_Evolution_for_Updating_Forensic_Data_Extraction_Tools/links/6202f7950213d228780653aa/Analysis-of-iOS-SQLite-Schema-Evolution-for-Updating-Forensic-Data-Extraction-Tools.pdf"
  }
];

const researchPosters = [
  {
    title: "Process-Based Predictors of Vulnerability Re-Introductions",
    venue: "Super Computing, St. Louis (SC25)",
    year: 2025
  },
  {
    title: "Predicting Future Cyber Attacks in Software by Identifying Attack-Defense Co-evolution Patterns",
    venue: "ALCF student poster session (ALCF, Argonne)",
    year: 2025
  },
  {
    title: "VulSim: Leveraging similarity of Multi-Dimensional neighbor embeddings for vulnerability detection",
    venue: "Greater Chicago Area Systems Research Workshop (GCASR 2024)",
    year: 2024
  }
];

const talks = [
  {
    title: "From Detection to Prediction: Multi-Dimensional Embedding Similarity for Software Security",
    venue: "CS seminar series, Mathematics and Computer Science division, Argonne National Laboratory",
    location: "Lemont, IL, USA",
    year: 2025
  },
  {
    title: "Software Vulnerability Detection Using LLM: Does Additional Information Help?",
    venue: "Workshop on AI for Cyber Threat Intelligence (WAITI 2024)",
    location: "Hawaii, USA (presented online)",
    year: 2024
  },
  {
    title: "VulSim: Leveraging similarity of Multi-Dimensional neighbor embeddings for vulnerability detection",
    venue: "33rd USENIX Security Symposium 2024 (USENIX 2024)",
    location: "Philadelphia, PA, USA",
    year: 2024
  },
  {
    title: "Patterns of Code-to-Test Coevolution for Automated Test Suite Maintenance",
    venue: "IEEE International Conference on Software Testing (ICST 2023)",
    location: "Dublin, Ireland",
    year: 2023
  },
  {
    title: "Software Repositories for Patternizing Attack-and-Defense Co-Evolution",
    venue: "MSR4P&S, 1st International Workshop @ (ESEC/FSE 2022)",
    location: "Singapore (presented online)",
    year: 2022
  },
  {
    title: "Leveraging Code-Test Co-evolution Patterns for Automated Test Case Recommendation",
    venue: "3rd ACM/IEEE International Conference on Automation of Software Test (AST 2022)",
    location: "(presented online)",
    year: 2022
  },
  {
    title: "Patterns of Code-to-Test Coevolution for Automated Test Suite Maintenance",
    venue: "IEEE International Conference on Software Testing (ICST 2022)",
    location: "Online",
    year: 2022
  },
  {
    title: "Analysis of iOS SQLite Schema Evolution for Updating Forensic Data Extraction Tools",
    venue: "International Symposium on Digital Forensics and Security (ISDFS 2020)",
    location: "(presented online)",
    year: 2020
  }
];

const awards = [
  {
    title: "Trudy Nicholls Graduate Scholarship in Computer Science",
    organization: "Computer Science Department, Northern Illinois University",
    year: 2025
  },
  {
    title: "Smerge Family Endowment - Liberal Arts Scholarship",
    organization: "Graduate School, Northern Illinois University", 
    year: 2022
  },
  {
    title: "Travel Grant",
    organization: "Grad Cohort for Women - CRA-WP Workshop 2018",
    year: 2018
  }
];

const service = [
  {
    role: "Program Committee Member",
    organization: "CIKM 2024 Conference (long research paper track, short research paper track)",
    year: 2024
  },
  {
    role: "Program Committee Member", 
    organization: "CIKM 2023 Conference (demo track)",
    year: 2023
  },
  {
    role: "Student Volunteer",
    organization: "2nd International Conference on AI Engineering Software Engineering for AI (CAIN)",
    year: 2023
  },
  {
    role: "Student Volunteer",
    organization: "Requirement Engineering Conference (RE)",
    year: 2022
  }
];

export default function CV() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-medium">Curriculum Vitae</h1>
      </div>

      {/* Summary */}
      <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>Ph.D. candidate in Computer Science at Northern Illinois University</strong>, specializing in software engineering with applications in software security, software vulnerability detection, attack-defense co-evolution, and software testing. Actively seeking research positions starting Summer 2026.
        </p>
      </div>

      {/* Education */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg">{edu.degree}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{edu.location}</p>
              {edu.advisor && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Advisor:</strong> {edu.advisor}
                </p>
              )}
              {edu.thesis && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Thesis:</strong> {edu.thesis}
                </p>
              )}
              {edu.gpa && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>GPA:</strong> {edu.gpa}
                </p>
              )}
              {edu.summary && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <strong>Summary:</strong> {edu.summary}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Research & Professional Experience
        </h2>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg">{exp.title}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{exp.organization}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
              {exp.description && (
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Teaching Experience */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Teaching Experience
        </h2>
        <div className="space-y-4">
          {teachingExperience.map((teaching, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg">{teaching.title}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">{teaching.period}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{teaching.organization}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{teaching.location}</p>
              {teaching.description && (
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{teaching.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Publications */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Publications
        </h2>
        <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
          <a
            href={socialLinks.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            View the complete publication list on Google Scholar
          </a>
        </p>
        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-base">{pub.title}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">{pub.year}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
                <strong>Authors:</strong> {pub.authors.join(", ")}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                <strong>Venue:</strong> {pub.venue}
              </p>
              {pub.type && (
                <span className="inline-block text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded mr-2">
                  {pub.type}
                </span>
              )}
              <div className="flex gap-2 mt-2">
                {pub.arxiv && (
                  <a
                    href={pub.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    arXiv
                  </a>
                )}
                {pub.pdf && (
                  <a
                    href={pub.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Posters */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Research Posters
        </h2>
        <div className="space-y-3">
          {researchPosters.map((poster, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{poster.title}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">{poster.year}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{poster.venue}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Talks & Presentations */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Talks & Presentations
        </h2>
        <div className="space-y-3">
          {talks.map((talk, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{talk.title}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap ml-4">{talk.year}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{talk.venue}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{talk.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Awards & Honors */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Awards & Honors
        </h2>
        <div className="space-y-3">
          {awards.map((award, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
              <div>
                <h3 className="font-medium">{award.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{award.organization}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">{award.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service */}
      <div className="mb-10">
        <h2 className="text-xl font-medium mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Academic & Professional Service
        </h2>
        <div className="space-y-3">
          {service.map((srv, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
              <div>
                <h3 className="font-medium">{srv.role}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{srv.organization}</p>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{srv.year}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
} 