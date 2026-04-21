/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import ResumeDownloadButton from "./components/navigation/resume-button";

export default function HomePage() {
  return (
    <main className="bg-violet-100 text-slate-900 rounded-lg px-8 pt-10 flex flex-col items-center min-h-[calc(100vh-9rem)]">
      <Image
        src="/images/headshot_photographer-AllyChadwick.jpg"
        alt="Natalie Famula"
        width={175}
        height={175}
        className="rounded-full p-1 border-2 border-black shadow-lg mx-auto"
      />
      <h1 className="text-2xl text-center logo-style">
        <span>Natalie</span>
        <span>Famula</span>
      </h1>
      <div className="mt-10 max-w-xl text-md justify-center text-center">
        <p>
          Senior developer with 10 years of experience in Toronto’s tech
          industry, often the primary engineer behind marketing websites. I
          build web applications that are easy to extend, maintain, and operate
          across teams and content-driven workflows.
        </p>
      </div>
      <div className="flex flex-col md:flex-row my-10 gap-6 justify-center text-center">
        <Link
          href="/full-portfolio"
          className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Explore my projects
        </Link>
        <ResumeDownloadButton />
      </div>
      <div className="flex mt-4 gap-6 justify-center">
        <p className="text-center text-sm text-slate-700">
          Built with <strong>Next.js & TypeScript</strong> styled with{" "}
          <strong>Tailwind CSS </strong>deployed on <strong>Vercel</strong> and
          hosted on <strong>GitHub</strong>
        </p>
      </div>
      <div className="flex mt-8 justify-between gap-6 sm:flex-row flex-col items-center">
        <img
          src="/images/skill-badges/JS-icons.svg"
          width={200}
          height={50}
          alt="Next.js, React.js, JavaScript, TypeScript"
        />
        <img
          src="/images/skill-badges/CSS-icons.svg"
          width={100}
          height={50}
          alt="CSS and TailwindCSS"
        />
        <img
          src="/images/skill-badges/deployment-icons.svg"
          width={200}
          height={50}
          alt="Git, GitHub, GitHub Actions, Vercel"
        />
      </div>
      <div className="flex my-8 gap-6 justify-center">
        <p className="text-center text-sm text-slate-700">
          <a
            href="https://github.com/nfamula/portfolio2026"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            view codebase
          </a>
        </p>
      </div>
    </main>
  );
}
