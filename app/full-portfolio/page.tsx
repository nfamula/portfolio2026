"use client";

import Link from "next/link";
import ProjectCard from "../components/project/Card";
import { cardDetails } from "../data/projectCardsData";

export default function FullPortfolioPage() {
  return (
    <main className="p-10 bg-violet-100 min-h-[calc(100vh-9rem)]">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 font-sans">
        Web projects
      </h1>
      {/* todo: certifications, skills, interests, about me */}
      {/* todo: blog: pull in from substack, pull in youtube videos */}
      <p className="text-slate-700 text-lg mb-6">
        Here are some examples of published projects from my web development
        career. I am always eager to take on new challenges and learn new
        technologies. If you are interested in learning more about my work or
        discussing potential opportunities, please don&apos;t hesitate to{" "}
        <Link href="/contact" className="text-violet-700 hover:underline">
          reach out
        </Link>
        .
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardDetails.map((projectCardData) => (
          <ProjectCard
            key={projectCardData.id}
            title={projectCardData.title}
            content={projectCardData.content}
            projectLink={projectCardData.projectLink}
            more={projectCardData.more}
            screenshotBase={projectCardData.screenshotBase}
          />
        ))}
      </div>
    </main>
  );
}
