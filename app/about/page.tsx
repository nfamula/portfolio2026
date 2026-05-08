import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="text-slate-900">
      {/* Editorial hero band */}
      <div className="bg-striped pt-10 pb-0 flex flex-col items-center gap-4 border-b border-slate-800">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-600">
          Senior Full-Stack Developer
        </p>
        <h1 className="font-accent italic text-5xl sm:text-7xl text-slate-900 text-center leading-tight px-6">
          About Me
        </h1>
        <p className="logo-style text-xs tracking-[0.25em] text-slate-500 uppercase">
          Toronto · Remote{" "}
        </p>
        <Link href="/" aria-label="Click to return to homepage">
          <Image
            src="/images/NatalieFamula-allyMayChadwick2.jpg"
            alt="Portrait of Natalie Famula"
            width={120}
            height={180}
            className="rounded-t-full object-cover border border-black"
          />
        </Link>
      </div>

      {/* Main bio */}
      <section className="bg-violet-100 p-6 md:p-12">
        <div>
          <p className="font-accent italic text-2xl text-slate-800 leading-snug mb-8 border-l-4 border-slate-800 pl-6">
            A decade in tech has taught me that collaboration matters just as
            much as code. The best work is not just well-built — it is
            understood, maintained, and shaped by the people who rely on it.
          </p>
          <p className="font-body text-lg leading-relaxed mb-6">
            I build and maintain web applications where performance and content
            flexibility need to hold up over time. Much of my work involves
            shipping features from design to production in CMS-driven systems
            with evolving requirements and multiple stakeholders. I focus on
            pragmatic engineering decisions that keep systems stable, fast, and
            easy to extend, and I prefer simple, durable solutions over
            unnecessary complexity.
          </p>
          <p className="font-body text-lg leading-relaxed mb-6">
            Over the years, I&apos;ve worked in organizations where marketing
            and product priorities evolve in parallel and platforms have to
            support both reliably. That has shaped how I approach engineering:
            prioritizing clarity, predictability, and long-term maintainability
            over short-term fixes.
          </p>
          <p className="font-body text-lg leading-relaxed mb-6">
            I also care about helping teams work better in practice, whether
            that means enabling marketers to manage content more confidently,
            running engineering lunch-and-learns, or mentoring with Canada
            Learning Code. I am often involved in onboarding new teammates and
            providing detailed, constructive code reviews.
          </p>
          <p className="font-body text-lg leading-relaxed mb-6">
            Outside of work, I recently completed the Toronto Marathon (May
            2026) after completing the half marathon last year. I enjoy the
            systems side of running: structured, iterative, and long-term. Catch
            me at the local run club!
          </p>
          <p className="font-body text-lg leading-relaxed mb-8">
            I am based in Toronto and open to remote opportunities across time
            zones.
          </p>
          <a
            href="https://www.linkedin.com/in/nataliefamula/"
            className="bg-slate-900 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            View my LinkedIn
          </a>
        </div>
      </section>

      {/* Pull quote + photo */}
      <section className="md:h-120 w-full md:bg-[url('/images/TechTank-panel.png')] sm:bg-white md:bg-cover md:bg-center md:p-10 md:filter md:grayscale md:my-0">
        <div className="md:bg-linear-to-t md:from-black/60 md:to-transparent m-8 md:m-0">
          <h2 className="font-accent italic text-3xl text-center md:text-white sm:text-black md:text-shadow-lg">
            &ldquo;I stay rooted in the local tech scene through volunteer
            mentorship, and contributing to the conversations that move our
            industry forward.&rdquo;
          </h2>
        </div>
        <Image
          src="/images/TechTank-panel.png"
          alt="Natalie Famula speaking on a panel at Tech Tank 2023"
          width={400}
          height={400}
          className="md:hidden block object-cover mt-8 w-full"
        />
      </section>

      {/* Origin story */}
      <section className="bg-striped p-6 md:p-12">
        <div className="bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-8">
          <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500 mb-3">
            Origin story
          </p>
          <h3 className="logo-style md:text-2xl text-xl border-b border-slate-800 pb-2 mb-6">
            An unconventional path into engineering
          </h3>
          <p className="font-body text-lg leading-relaxed mb-6">
            I studied Linguistics (BA) and worked as a Communication Disorders
            Assistant before moving into tech. During a travel break, I started
            a small WordPress blog just for fun, and that turned into a lot of
            late nights figuring things out, debugging layouts in airport
            terminals between flights, often while trying to understand why
            everything was breaking. That curiosity eventually led me to
            Lighthouse Labs in 2016, and I&apos;ve been working as a developer
            ever since.
          </p>
          <p className="font-body text-lg leading-relaxed mb-6">
            That background still informs how I approach engineering work. I
            like understanding how systems fit together, not just how to use
            them, and I tend to gravitate toward problems where clarity and
            structure matter.
          </p>
          <p className="font-body text-lg leading-relaxed mb-6">
            I&apos;m currently completing a DevOps certificate at the University
            of Toronto, continuing to deepen my understanding of system design
            and reliability.
          </p>
          <p className="font-body text-lg leading-relaxed mb-8">
            If you want to connect, work together, or are working on something
            interesting, I&apos;d love to hear from you.
          </p>
          <a
            href="mailto:nfamula@gmail.com"
            className="bg-slate-900 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Reach out via email
          </a>
        </div>
        <section className="text-center mx-auto">
          <h2 className="logo-style text-2xl py-6 mt-6 sm:text-3xl text-center">
            Let&apos;s build your website!
          </h2>
          <h3 className="logo-style text-center">
            Available for freelance and contract projects.
          </h3>
          <a
            href="mailto:nfamula@gmail.com"
            className="bg-slate-900 text-slate-50 block w-fit mx-auto px-6 py-3 rounded-md hover:opacity-90 transition mt-4"
          >
            Email me
          </a>
        </section>
        <Link href="/" aria-label="Click to return to homepage">
          <Image
            src="/images/Natalie-Famula-floral-logo.png"
            alt="Natalie Famula floral logo"
            width={100}
            height={100}
            className="object-cover rounded-xl mx-auto my-8"
          />
        </Link>
      </section>
    </main>
  );
}
