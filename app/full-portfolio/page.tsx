import Link from "next/link";
import Image from "next/image";
import ProjectCard from "../components/project/Card";
import { cardDetails } from "../data/projectCardsData";

export default function FullPortfolioPage() {
  return (
    <main className="p-4 bg-striped min-h-[calc(100vh-9rem)]">
      <div className="flex items-center justify-center">
        <Image
          src="/images/squiggle.svg"
          alt="Squiggle decoration"
          width={100}
          height={50}
          className="object-cover mx-4"
        />
        <Link href="/">
          <Image
            src="/images/NatalieFamula-allyMayChadwick2.jpg"
            alt="Portrait of Natalie Famula"
            width={100}
            height={150}
            className="rounded-t-full object-cover border border-black"
          />
        </Link>
        <Image
          src="/images/squiggle.svg"
          alt="Squiggle decoration"
          width={100}
          height={50}
          className="object-cover mx-4"
        />
      </div>
      <div className="bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-8 mb-10">
        <h1 className="logo-style text-3xl border-b border-slate-800 pb-2 mb-4">
          Web projects
        </h1>
        <p className="font-[family-name:var(--font-body)] text-slate-900 text-lg leading-relaxed mb-6">
          A selection of web development projects I&apos;ve built and shipped
          across startup and enterprise environments, focused on CMS-driven
          systems, platform reliability, and production web applications.
        </p>

        <Link
          href="/contact"
          className="bg-slate-900 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Contact me
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
      <Link href="/">
        <Image
          src="/images/Natalie-Famula-floral-logo.png"
          alt="Natalie Famula floral logo"
          width={100}
          height={100}
          className="object-cover rounded-xl mx-auto mb-10"
        />
      </Link>
      <Image
        src="/images/Bike.svg"
        alt="bicycle graphic"
        width={100}
        height={100}
        className="animation-trigger-view animate-bike-cross object-cover"
      />
    </main>
  );
}
