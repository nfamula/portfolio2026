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
        <p className="text-center">
          this project was built with{" "}
          <b>Next.js | React.js | Javascript | Typescript</b> styled with{" "}
          <b>Tailwind CSS </b>deployed on <b>Vercel</b> and hosted on{" "}
          <b>GitHub</b>
        </p>
      </div>
      <div className="flex gap-6 justify-center">
        <a href="https://skillicons.dev">
          <img
            src="https://skillicons.dev/icons?i=nextjs,react,javascript,typescript&theme=dark&perline=15"
            alt="Next.js, React.js, Javascript, Typescript"
          />
        </a>
        <a href="https://skillicons.dev">
          <img
            src="https://skillicons.dev/icons?i=css,tailwindcss&theme=dark&perline=15"
            alt="CSS and TailwindCSS"
          />
        </a>
        <a href="https://skillicons.dev">
          <img
            src="https://skillicons.dev/icons?i=github,githubactions,git,vercel&theme=dark&perline=15"
            alt="Git, Github, Github Actions, Vercel"
          />
        </a>
      </div>
    </main>
  );
}
