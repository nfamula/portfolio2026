import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="p-10 bg-violet-100 min-h-[calc(100vh-9rem)]">
      <h1 className="text-4xl m-6 font-bold text-slate-900 mb-8 font-sans">
        About Me
      </h1>
      <p className="text-slate-700 text-lg mb-6 font-serif">
        A decade in tech has taught me that{" "}
        <b>collaboration is as important as code</b>. The best projects are not
        just well-architected. They are well understood, well shared, and well
        supported by the people who build and use them.
      </p>
      <p className="text-slate-700 text-lg mb-6 font-serif">
        I&apos;ve always been drawn to the spaces between disciplines, teaching
        marketers how to confidently update their own websites, running
        engineering lunch-and-learns, and volunteering as a mentor with Canada
        Learning Code. Knowledge should not sit in silos, and I am quick to
        raise my hand to onboard new teammates or offer thoughtful, constructive
        code reviews. I am passionate about helping others level up along the
        way.
      </p>
      <h2 className="text-2xl font-bold text-slate-900 m-6 font-sans">
        An unconventional career path
      </h2>
      <p className="text-slate-700 text-lg mb-6 font-serif">
        I did not begin my career in technology. With a BA in Linguistics, I
        started out as a Communication Disorders Assistant. The work was
        meaningful and challenging, but during a travel break I began
        documenting my experiences through a small blog. What started as a
        creative outlet quickly became a fascination. I found myself deep in
        WordPress tutorials, debugging layouts in airport terminals, and staying
        up late to understand how everything worked under the hood. That
        curiosity led me to pursue formal training at Lighthouse Labs in 2016. I
        have been working as a developer ever since.
      </p>
      <p className="text-slate-700 text-lg mb-6 font-serif">
        Outside of my development work, I am currently working toward a DevOps
        certificate at the <b>University of Toronto</b> and training for the
        Toronto marathon. Both keep me honest about discipline, endurance, and
        the value of steady progress.
      </p>
      <p className="text-slate-700 text-lg mb-6 font-serif">
        Whether you have a project in mind, want to collaborate, or just want to
        say hi, feel free to send me an{" "}
        <a
          href="mailto:nfamula@gmail.com"
          className="text-slate-700 hover:underline"
        >
          email
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/nataliefamula/"
          className="text-slate-700 hover:underline"
        >
          LinkedIn.
        </a>
      </p>
      <div className="flex flex-col items-center">
        <Image
          src="/images/headshot_photographer-AllyChadwick.jpg"
          alt="Natalie Famula"
          width={300}
          height={300}
          className="rounded-full"
        />
        <ul className="text-slate-700 text-lg font-serif list-inside mt-4 space-y-2">
          <li>
            Email:{" "}
            <a
              href="mailto:nfamula@gmail.com"
              className="text-slate-700 hover:underline"
            >
              nfamula@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/nataliefamula/"
              className="text-slate-700 hover:underline"
            >
              linkedin.com/in/nataliefamula
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/nfamula"
              className="text-slate-700 hover:underline"
            >
              @nfamula
            </a>
          </li>
          <li>Located in Toronto, Canada 🇨🇦</li>
        </ul>
      </div>
    </main>
  );
}
