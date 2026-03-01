import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="p-10 bg-striped text-slate-900 min-h-[calc(100vh-9rem)]">
      <div className="bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-8 mb-10">
        <h1 className="logo-style text-3xl">About Me</h1>
        <p className="text-lg mb-6">
          A decade in tech has taught me that{" "}
          <span className="font-accent">
            collaboration is as important as code
          </span>
          . The best projects are not just well-architected. They are well
          understood, well shared, and well supported by the people who build
          and use them. Located in Toronto, Canada. 🇨🇦
        </p>
        <p className="text-lg mb-6">
          I&apos;ve always been drawn to the spaces between disciplines,
          teaching marketers how to confidently update their own websites,
          running engineering lunch-and-learns, and volunteering as a mentor
          with Canada Learning Code. Knowledge should not sit in silos, and I am
          quick to raise my hand to onboard new teammates or offer thoughtful,
          constructive code reviews. I am passionate about helping others level
          up along the way.
        </p>
        <a
          href="https://www.linkedin.com/in/nataliefamula/"
          className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          View my LinkedIn
        </a>
      </div>
      <div className="bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-8 mb-10">
        <h2 className="logo-style text-2xl">An unconventional career path</h2>
        <p className="text-lg mb-6">
          I did not begin my career in technology. With a BA in Linguistics, I
          started out as a Communication Disorders Assistant. The work was
          meaningful and challenging, but during a travel break I began
          documenting my experiences through a small blog. What started as a
          creative outlet quickly became a fascination. I found myself deep in
          WordPress tutorials, debugging layouts in airport terminals, and
          staying up late to understand how everything worked under the hood.
          That curiosity led me to pursue formal training at Lighthouse Labs in
          2016. I have been working as a developer ever since.
        </p>
        <p className="text-lg mb-6">
          Outside of my development work, I am currently working toward a DevOps
          certificate at the <strong>University of Toronto</strong> and training
          for the Toronto marathon. Both keep me honest about discipline,
          endurance, and the value of steady progress.
        </p>
        <p className="text-lg mb-6">
          Whether you have a project in mind, want to collaborate, or just want
          to say hi, let&apos;s get in touch.
        </p>
        <a
          href="mailto:nfamula@gmail.com"
          className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Reach out via email
        </a>
      </div>
    </main>
  );
}
