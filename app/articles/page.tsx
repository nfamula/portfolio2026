import Link from "next/link";
import Image from "next/image";

export default function ArticlesPage() {
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
      <section className="bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-8 mb-10">
        <h1 className="logo-style text-3xl">
          Technical Case Studies: DevOps at Anthropic
        </h1>
        <p className="text-slate-900 text-lg mb-6">
          Series of case studies analyzing infrastructure and DevOps tooling
          decisions at Anthropic, covering topics including CI/CD pipeline
          architecture, continuous delivery tool selection, and multi-cloud
          deployment strategies. Please note: this analysis is based on publicly
          available information. Published on OSF (Open Science Framework).
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://osf.io/det7g/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Read on OSF
          </Link>
        </div>
      </section>

      <Link href="/">
        <Image
          src="/images/Natalie-Famula-floral-logo.png"
          alt="Natalie Famula floral logo"
          width={100}
          height={100}
          className="object-cover rounded-xl mx-auto mb-10"
        />
      </Link>
    </main>
  );
}
