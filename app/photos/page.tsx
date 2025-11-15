import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "Photo gallery",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photo Gallery</h1>
      <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
        A collection of photos and memories.
      </p>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/ANLPoster.jfif",
            alt: "ALCF Student Poster Session",
            caption: "Presented 'Predicting Future Cyber Attacks in Software by Identifying Attack-Defense Co-evolution Patterns' at the ALCF Student Poster Session, Argonne National Laboratory, July 2025, while working as a student intern during the Summer",
          },
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
          {
            src: "/photos/ICST.jfif",
            alt: "ICST 2023",
            caption: "My first in-person presentation at the ICST 2023 conference, Dublin, Ireland, showcasing my research paper 'Patterns of Code-to-Test Co-evolution for Automated Test Suite Maintenance'",
          },
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
    </section>
  );
}
