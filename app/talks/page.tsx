import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talks",
  description: "Available talks and presentations by Samiha Shimmi.",
};

const talks = [
  {
    title:
      "USENIX Security 2024 – VulSim: Leveraging Similarity of Multi-Dimensional Neighbor Embeddings for Vulnerability Detection",
    description:
      "Conference presentation introducing VulSim, delivered at the 33rd USENIX Security Symposium (2024).",
    youtubeId: "jSW1hOVH_ik",
    startSeconds: 117,
  },
];

export default function TalksPage() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-2xl font-medium text-slate-800 dark:text-slate-100">
          Talks & Presentations
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Watch selected recorded talks and conference presentations.
        </p>
      </header>

      <div className="space-y-10">
        {talks.map((talk) => (
          <article
            key={talk.youtubeId}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 lg:p-5 shadow-sm space-y-3 lg:space-y-4 max-w-4xl"
          >
            <div>
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                {talk.title}
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {talk.description}
              </p>
            </div>
            <div className="relative w-full lg:w-2/3 xl:w-1/2 overflow-hidden rounded-lg bg-black pt-[30%] lg:pt-[25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${talk.youtubeId}?start=${talk.startSeconds}`}
                title={talk.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


