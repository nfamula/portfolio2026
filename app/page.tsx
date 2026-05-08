import Image from "next/image";
import Link from "next/link";
import ResumeDownloadButton from "./components/navigation/resume-button";

export default function HomePage() {
  return (
    <main className="bg-violet-100 text-slate-900 rounded-lg px-8 flex flex-col items-center min-h-[calc(100vh-9rem)]">
      <div className="w-full max-w-6xl flex flex-col md:min-h-[calc(100vh-11rem)]">
        <section className="w-full text-left pt-6">
          <h1 className="leading-[0.82] uppercase -mb-4 w-fit mx-auto">
            <span className="block text-[18vw] tracking-[-0.07em]">
              Natalie
            </span>
            <span className="-mt-2 block text-[17vw] tracking-[-0.06em] pl-[8vw] sm:pl-20">
              Famula
            </span>
          </h1>
          <p className="mt-3 mb-8 max-w-2xl mx-auto text-center text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.28em] leading-[1.35]">
            Senior Full-Stack Developer
          </p>
        </section>
        <div className="flex flex-wrap gap-4 justify-center mt-4 mb-8 md:mt-auto">
          <Link
            href="/full-portfolio"
            className="bg-slate-900 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Explore my projects
          </Link>
          <ResumeDownloadButton />
        </div>
      </div>
      <section className="w-full bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-8 mb-10 flex flex-col gap-6">
        <h2 className="logo-style text-3xl">Professional experience</h2>
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <Image
            src="/images/headshot_photographer-AllyChadwick.jpg"
            alt="Natalie Famula"
            width={233}
            height={233}
            className="rounded-full p-1 border-2 border-black shadow-lg shrink-0 mx-auto sm:mx-0"
          />
          <div>
            <p className="font-[family-name:var(--font-body)] text-slate-900 text-lg leading-relaxed mb-6">
              I&apos;m a Senior Full-Stack Developer with 10 years of experience
              building and maintaining high-traffic websites and digital
              platforms for businesses, startups, and growing teams. I help
              businesses launch reliable web platforms, improve performance,
              streamline deployments, and maintain systems with confidence.
            </p>
            <p className="font-[family-name:var(--font-body)] text-slate-900 text-lg leading-relaxed mb-6">
              Experienced across full-stack development, CMS platforms,
              third-party integrations, and infrastructure workflows, with a
              strong focus on long-term maintainability and operational
              stability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/full-portfolio"
                className="bg-slate-900 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
              >
                View work
              </Link>
              <Link
                href="/contact"
                className="bg-slate-900 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
              >
                Hire me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col lg:flex-row gap-6 mb-10">
        <section className="bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-6 md:p-7 flex flex-col gap-4 text-left shrink-0">
          <h2 className="logo-style text-3xl">Services Available</h2>
          <ul className="list-disc pl-6 text-slate-900 text-base space-y-1">
            <li>Scalable business websites</li>
            <li>Modern CMS platforms</li>
            <li>Custom internal tools</li>
            <li>Website performance &amp; reliability</li>
            <li>Infrastructure &amp; deployment workflows</li>
            <li>Long-term platform maintenance</li>
            <li>Technical problem solving</li>
            <li>Modernization of legacy systems</li>
          </ul>
        </section>
        <section className="flex-1 min-w-0 bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-6 md:p-7 flex flex-col gap-4 text-left">
          <h2 className="logo-style text-3xl">Selected Work</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 min-w-0">
              <div className="relative w-full h-48 mb-3">
                <Image
                  src="/images/Prodigy_screenshot.png"
                  alt="Prodigy Education screenshot"
                  fill
                  className="rounded-md object-cover object-top"
                />
              </div>
              <h3 className="font-[family-name:var(--font-accent)] italic text-slate-900 text-lg">
                Prodigy Education
              </h3>
              <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">
                Full-time developer role in EdTech.
              </p>
              <Link
                href="/full-portfolio"
                className="text-sm text-slate-700 underline underline-offset-2 mt-2 inline-block hover:opacity-70 transition"
              >
                Read more →
              </Link>
            </div>
            <div className="flex-1 min-w-0">
              <div className="relative w-full h-48 mb-3">
                <Image
                  src="/images/WhittenFamula_screenshot.png"
                  alt="Whitten & Famula Mediations screenshot"
                  fill
                  className="rounded-md object-cover object-top"
                />
              </div>
              <h3 className="font-[family-name:var(--font-accent)] italic text-slate-900 text-lg">
                Whitten &amp; Famula Mediations
              </h3>
              <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">
                End-to-end legal services project.
              </p>
              <Link
                href="/full-portfolio"
                className="text-sm text-slate-700 underline underline-offset-2 mt-2 inline-block hover:opacity-70 transition"
              >
                Read more →
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-8 mb-10 flex flex-col gap-4">
        <h2 className="logo-style text-3xl">About Me</h2>
        <p className="font-[family-name:var(--font-body)] text-slate-900 text-lg leading-relaxed">
          Effective collaboration is just as important to me as clean code. I
          enjoy solving technical problems, improving systems over time, and
          helping teams ship confidently. Located in Toronto, I&apos;m available
          for remote opportunities across time zones.
        </p>
        <Link
          href="/about"
          className="bg-slate-900 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition self-start"
        >
          Read more
        </Link>
      </section>

      <section className="w-full py-4 mb-4 flex flex-col gap-2">
        <h2 className="logo-style text-3xl text-center">
          Let&apos;s build your website!
        </h2>
        <h3 className="logo-style text-center">
          Available for freelance and contract projects.
        </h3>
        <a
          href="mailto:nfamula@gmail.com"
          className="bg-slate-900 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition self-center mt-4"
        >
          Email me
        </a>
      </section>
      <Image
        src="/images/NF-watermark.png"
        alt="NF monogram watermark"
        width={200}
        height={200}
        className="mx-auto py-4"
      />
      <hr className="w-full border-slate-300 my-8" />
      <div className="flex mt-4 gap-4 justify-center">
        <p className="text-center text-xs text-slate-700">
          This website was built with <strong>Next.js & TypeScript</strong>{" "}
          styled with <strong>Tailwind CSS </strong>deployed on{" "}
          <strong>Vercel</strong> and hosted on <strong>GitHub</strong>
        </p>
      </div>
      <div className="flex my-12 justify-center">
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
