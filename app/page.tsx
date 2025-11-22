import Image from "next/image";
import { socialLinks } from "./lib/config";
import { ObfuscatedEmail } from "./components/obfuscated-email";

const newsHighlights = [
  {
    date: "November 2025",
    description:
      "Presented poster \"Process-Based Predictors of Vulnerability Reintroduction\" at SC25 (Super Computing 2025) in St. Louis, a collaborative work between Northern Illinois University and Loyola University Chicago"
  },
  {
    date: "July 2025",
    description:
      "Delivered an invited talk titled \"From Detection to Prediction: Multi-Dimensional Embedding Similarity for Software Security\" at the CS seminar series, Mathematics and Computer Science division, Argonne National Laboratory"
  },
  {
    date: "July 2025",
    description:
      "Presented \"Predicting Future Cyber Attacks in Software by Identifying Attack-Defense Co-evolution Patterns\" at the ALCF Student Poster Session, Argonne National Laboratory"
  },
  {
    date: "Summer 2025",
    description:
      "Served as a Research Aide Technical (Summer Intern) at Argonne National Laboratory.",
  },
  {
    date: "May 2025",
    description:
      "Awarded the Trudy Nicholls Graduate Scholarship in Computer Science at Northern Illinois University.",
  },
  {
    date: "May 2025",
    description:
      "Paper titled \"Enhanced Detection of Code Vulnerability with Synergy Between Data-Driven, Rule-Based, and Unsupervised Learnings\" was published at EnCyCriS @ ICSE 2025.",
    link: "https://ieeexplore.ieee.org/document/11029526/",
  },
  {
    date: "December 2024",
    description:
      "Paper titled \"Software Vulnerability Detection Using LLM: Does Additional Information Help?\" was presented at WAITI 2024 @ ACSAC 2024.",
    link: "https://ieeexplore.ieee.org/document/10917361/",
  },
  {
    date: "August 2024",
    description:
      "Paper titled \"VulSim: Leveraging similarity of Multi-Dimensional neighbor embeddings for vulnerability detection\" was published in the 33rd USENIX Security Symposium (USENIX 2024).",
    link: "https://www.usenix.org/system/files/usenixsecurity24-shimmi.pdf",
  }
];

export default function Page() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="space-y-8">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <div className="order-2 lg:order-1 flex-1 space-y-4">
            <h1 className="text-3xl lg:text-4xl font-medium text-slate-800 dark:text-slate-200">
              Samiha Shimmi
            </h1>
            <h2 className="text-lg text-slate-700 dark:text-slate-300">
              Ph.D. Candidate in Computer Science, Northern Illinois University
            </h2>
            <div className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  Email:
                </span>
                <ObfuscatedEmail
                  encoded="c3NoaW1taXxuaXUuZWR1"
                  className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  LinkedIn:
                </span>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                >
                  linkedin.com/in/samiha-shimmi-261542aa
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="font-semibold text-slate-800 dark:text-slate-100">
                  Google Scholar:
                </span>
                <a
                  href={socialLinks.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                >
                  scholar.google.com/citations?user=GPjTq-QAAAAJ
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex-shrink-0 self-center lg:self-start">
            <div className="relative">
              <Image
                src="/Samihacropped.jpg"
                alt="Samiha Shimmi - PhD Candidate"
                className="rounded-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 transition-transform duration-500 shadow-2xl border-4 border-white dark:border-slate-700 ring-2 ring-slate-200 dark:ring-slate-600"
                unoptimized
                width={260}
                height={260}
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/15 via-purple-400/15 to-emerald-400/15 -z-10 scale-110" />
            </div>
          </div>
        </div>

        <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none space-y-4">
          <p className="text-lg leading-relaxed">
            I am a Ph.D. candidate in <span className="font-semibold text-slate-700 dark:text-slate-300">Computer Science</span> at
            <span className="font-semibold text-indigo-700 dark:text-indigo-400"> Northern Illinois University</span>, advised by
            <span className="font-semibold text-slate-700 dark:text-slate-300"> Dr. Mona Rahimi</span>, conducting my research within the Reliable AI-enabled Software Engineering Laboratory (RAISE).
          </p>
          <p className="text-lg leading-relaxed">
            My research investigates how security vulnerabilities and their fixes co-evolve over time, uncovering patterns that predict future attacks.
            I analyze semantic, syntactic, and contextual signals within software repositories to design proactive defenses for large-scale systems.
          </p>
          <p className="text-lg leading-relaxed">
            I combine ideas from deep learning, machine learning, and large language models with rigorous software engineering practices to detect, and prevent future vulnerabilities.
            I am actively seeking research and teaching opportunities beginning Summer 2026.
          </p>
        </div>
      </section>

      {/* News & Highlights */}
      <section className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100 mb-4">
          News & Highlights
        </h2>
        <div className="space-y-3">
          {newsHighlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:gap-4"
            >
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 w-28 shrink-0">
                {item.date}
              </span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 dark:text-blue-400 leading-relaxed hover:underline"
                >
                  {item.description}
                </a>
              ) : (
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
