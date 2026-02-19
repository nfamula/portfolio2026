import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-violet-100 text-slate-900 p-12 rounded-lg flex flex-col items-center gap-8 min-h-[calc(100vh-9rem)]">
      <h1 className="text-5xl font-sans text-slate-900 text-center">
        Natalie Famula
      </h1>
      <p className="text-slate-900 text-lg font-serif max-w-xl justify-center text-center">
        I build websites and tools that help teams work smarter and projects
        succeed, with 10 years of experience across various industries. I&apos;m
        open to new opportunities and collaborations, so feel free to reach out
        to connect or learn more about my work.
      </p>
      <div className="flex gap-6 justify-center">
        <Link
          href="/full-portfolio"
          className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md font-sans hover:opacity-90 transition"
        >
          Projects
        </Link>
        <a
          href="/downloads/NatalieFamula_Resume.pdf"
          download="NatalieFamula_Resume.pdf"
          className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md font-sans hover:opacity-90 transition"
        >
          Resume
        </a>
      </div>
      <div className="flex gap-6 justify-center">
        <p className="text-center font-serif text-slate-700">
          Built with <b>Next.js | React.js | JavaScript | TypeScript</b> styled
          with <b>Tailwind CSS </b>deployed on <b>Vercel</b> and hosted on{" "}
          <b>GitHub</b>
        </p>
      </div>
      <div className="flex gap-6 justify-center">
        <Image
          src="/images/skill-badges/JS-icons.svg"
          width={200}
          height={50}
          alt="Next.js, React.js, JavaScript, TypeScript"
        />
        <Image
          src="/images/skill-badges/CSS-icons.svg"
          width={100}
          height={50}
          alt="CSS and TailwindCSS"
        />
        <Image
          src="/images/skill-badges/deployment-icons.svg"
          width={200}
          height={50}
          alt="Git, GitHub, GitHub Actions, Vercel"
        />
      </div>
      <div className="flex gap-6 justify-center">
        <p className="text-center font-serif text-slate-700">
          {" "}
          view{" "}
          <a
            href="https://github.com/nfamula/portfolio2026"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            codebase
          </a>
        </p>
      </div>
    </main>
  );
}
