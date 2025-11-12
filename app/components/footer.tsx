"use client";

import React from "react";
import { metaData } from "app/lib/config";

// Static year to avoid hydration mismatches
// Both server and client will render the same value
const YEAR = 2025;

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time>{" "}
      {metaData.name}
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  );
}
