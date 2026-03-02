import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="text-slate-900">
      <section className="bg-striped p-4">
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
              className="rounded-t-full object-cover border-1 border-black"
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
          <h1 className="logo-style text-3xl">About Me</h1>
          <p className="text-lg mb-6">
            A decade in tech has taught me that{" "}
            <span className="font-accent">
              collaboration is as important as code
            </span>
            . The best projects are not just well-architected. They are well
            understood, well shared, and well supported by the people who build
            and use them.
          </p>
          <p className="text-lg mb-6">
            I&apos;ve always been drawn to the spaces between disciplines,
            teaching marketers how to confidently update their own websites,
            running engineering lunch-and-learns, and volunteering as a mentor
            with Canada Learning Code. I am passionate about helping others
            level up along the way, and I am quick to raise my hand to onboard
            new teammates or offer thoughtful, constructive code reviews.
          </p>
          <p className="text-lg mb-6">
            Proud to be Canadian, located in Toronto, and open to remote
            opportunities across time zones.
          </p>
          <a
            href="https://www.linkedin.com/in/nataliefamula/"
            className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            View my LinkedIn
          </a>
        </div>
      </section>
      <section className="md:h-120 w-full md:bg-[url('/images/TechTank-panel.png')] sm:bg-white md:bg-cover md:bg-center md:p-10 md:filter md:grayscale my-8 md:my-0">
        <div className="md:bg-linear-to-t md:from-black/60 md:to-transparent m-8 md:m-0">
          <h2 className="font-accent text-3xl text-center md:text-white sm:text-black md:text-shadow-lg">
            I stay rooted in the local tech scene through volunteer mentorship,
            and contributing to the conversations that move our industry
            forward.
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
      <section className="bg-striped p-4">
        <div className="bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-8 my-10">
          <h3 className="logo-style md:text-2xl text-xl">
            An unconventional career path
          </h3>
          <p className="text-lg mb-6">
            I did not begin my career in technology. With a BA in Linguistics, I
            started out as a Communication Disorders Assistant. The work was
            meaningful and challenging, but during a travel break I began
            documenting my experiences through a small blog. What started as a
            creative outlet quickly became a fascination. I found myself deep in
            WordPress tutorials, debugging layouts in airport terminals, and
            staying up late to understand how everything worked under the hood.
            That curiosity led me to pursue formal training at Lighthouse Labs
            in 2016. I have been working as a developer ever since.
          </p>
          <p className="text-lg mb-6">
            Outside of my development work, I am currently working towards a{" "}
            <span className="font-accent">
              {" "}
              DevOps certificate at the University of Toronto
            </span>{" "}
            and training for the Toronto marathon. Both keep me honest about
            discipline, endurance, and the value of steady progress.
          </p>
          <p className="text-lg mb-6">
            Whether you have a project in mind, want to collaborate, or just
            want to say hi, let&apos;s get in touch!
          </p>
          <a
            href="mailto:nfamula@gmail.com"
            className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Reach out via email
          </a>
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
      </section>
    </main>
  );
}
