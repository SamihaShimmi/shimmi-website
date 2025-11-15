import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photo gallery",
};

export default function Photos() {
  return (
    <section className="space-y-12">
      <div>
        <h1 className="mb-2 text-2xl font-medium">Photo Gallery</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          A collection of photos and memories from conferences, presentations, and milestones.
        </p>
      </div>

      {/* 2025 */}
      <div>
        <h2 className="mb-6 text-xl font-medium text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
          2025
        </h2>
        <ImageGrid
          columns={3}
          images={[
            {
              src: "/photos/ANLPoster.jfif",
              alt: "ALCF Student Poster Session",
              caption: "Presented 'Predicting Future Cyber Attacks in Software by Identifying Attack-Defense Co-evolution Patterns' at the ALCF Student Poster Session, Argonne National Laboratory, July 2025, while working as a student intern during the Summer",
            },
          ]}
        />
      </div>

      {/* 2024 */}
      <div>
        <h2 className="mb-6 text-xl font-medium text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
          2024
        </h2>
        <ImageGrid
          columns={3}
          images={[
            {
              src: "/photos/candidacy.jfif",
              alt: "Ph.D. Candidacy Defense",
              caption: "Ph.D. Candidacy Defense: Presented 'Predicting Future Cyber Attacks in Software by Identifying Attack-Defense Co-evolution Patterns', November 2024",
            },
            {
              src: "/photos/Usenix.jfif",
              alt: "USENIX Security 2024",
              caption: "Presented 'VulSim: Leveraging similarity of Multi-Dimensional neighbor embeddings for vulnerability detection' at the 33rd USENIX Security Symposium (USENIX 2024), Philadelphia, PA, August 2024",
            },
          ]}
        />
      </div>

      {/* 2023 */}
      <div>
        <h2 className="mb-6 text-xl font-medium text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
          2023
        </h2>
        <ImageGrid
          columns={3}
          images={[
            {
              src: "/photos/ICST.jfif",
              alt: "ICST 2023",
              caption: "My first in-person presentation at the ICST 2023 conference, Dublin, Ireland, showcasing my research paper 'Patterns of Code-to-Test Co-evolution for Automated Test Suite Maintenance'",
            },
          ]}
        />
      </div>

      {/* 2022 */}
      <div>
        <h2 className="mb-6 text-xl font-medium text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-2">
          2022
        </h2>
        <ImageGrid
          columns={3}
          images={[
            {
              src: "/photos/atICSE2022PittsburgWithLabmateHamed.jpg",
              alt: "ICSE 2022",
              caption: "At ICSE 2022, Pittsburgh, PA, with labmate Hamed",
            },
            {
              src: "/photos/ASE2022,withProf.jfif",
              alt: "ASE 2022",
              caption: "At ASE 2022, October 2022, Oakland Center, Michigan, United States, with my advisor Dr. Mona Rahimi",
            },
          ]}
        />
      </div>
    </section>
  );
}
