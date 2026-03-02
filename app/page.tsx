import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-violet-100 text-slate-900 rounded-lg px-8 flex flex-col items-center min-h-[calc(100vh-9rem)]">
      <Image
        src="/images/NF-border.png"
        alt="NF monogram logo"
        width={250}
        height={250}
      />
      <h1 className="text-2xl text-center logo-style">
        <span>Natalie</span>
        <span>Famula</span>
      </h1>
      <p className="mt-10 text-lg max-w-xl justify-center text-center">
        I build websites and tools that help projects succeed, with 10 years of
        web development experience across various industries.
        <span className="font-accent">
          {" "}
          Collaboration is as important as code.
        </span>
      </p>
      <div className="flex flex-col md:flex-row my-10 gap-6 justify-center text-center">
        <Link
          href="/full-portfolio"
          className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Explore my projects
        </Link>
        <a
          href="/downloads/NatalieFamula_Resume.pdf"
          download="NatalieFamula_Resume.pdf"
          className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Download resume PDF
        </a>
      </div>
      <div className="hidden absolute lg:flex bottom-6 right-0 px-25">
        <Image
          src="/images/airship.svg"
          alt="airship graphic"
          width={150}
          height={150}
          className="animate-float"
        />
      </div>
      <div className="flex mt-4 gap-6 justify-center">
        <p className="text-center text-slate-700">
          Built with <strong>Next.js & TypeScript</strong> styled with{" "}
          <strong>Tailwind CSS </strong>deployed on <strong>Vercel</strong> and
          hosted on <strong>GitHub</strong>
        </p>
      </div>
      <div className="flex mt-8 justify-between gap-6 sm:flex-row flex-col items-center">
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
      <div className="flex my-8 gap-6 justify-center">
        <p className="text-center text-slate-700">
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
