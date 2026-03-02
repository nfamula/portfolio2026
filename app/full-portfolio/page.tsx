import Link from "next/link";
import ProjectCard from "../components/project/Card";
import { cardDetails } from "../data/projectCardsData";

export default function FullPortfolioPage() {
  return (
    <main className="p-4 bg-violet-100 min-h-[calc(100vh-9rem)]">
      <div className="bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-8 mb-10">
        <h1 className="logo-style text-3xl">Web projects</h1>
        {/* todo: certifications, skills, interests, about me */}
        {/* todo: blog: pull in from substack, pull in youtube videos */}
        <p className="text-slate-900 text-lg mb-6">
          Here are some examples of published projects from my web development
          career. I am always eager to take on new challenges and learn new
          technologies. If you are interested in learning more or discussing
          potential opportunities, please don&apos;t hesitate to reach out.
        </p>
        <Link
          href="/contact"
          className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Contact me
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardDetails.map((projectCardData) => (
          <ProjectCard
            key={projectCardData.id}
            title={projectCardData.title}
            content={projectCardData.content}
            badgesImage={projectCardData.badgesImage}
            projectLink={projectCardData.projectLink}
            more={projectCardData.more}
            screenshotBase={projectCardData.screenshotBase}
          />
        ))}
      </div>
    </main>
  );
}
