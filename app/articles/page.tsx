import Link from "next/link";
import Image from "next/image";

export default function ArticlesPage() {
  return (
    <main className="bg-violet-100 min-h-[calc(100vh-9rem)] text-slate-900">
      {/* Editorial hero band */}
      <div className="bg-striped pt-10 pb-0 flex flex-col items-center gap-4 border-b border-slate-800">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-600">
          Published Articles
        </p>
        <h1 className="font-accent italic text-5xl sm:text-7xl text-slate-900 text-center leading-tight px-6">
          Articles
        </h1>
        <p className="logo-style text-xs tracking-[0.25em] text-slate-500 uppercase">
          Open Source Writing
        </p>
        <Link href="/">
          <Image
            src="/images/NatalieFamula-allyMayChadwick2.jpg"
            alt="Portrait of Natalie Famula"
            width={100}
            height={150}
            className="rounded-t-full object-cover border border-black"
          />
        </Link>
      </div>

      {/* Article card */}
      <section className="bg-violet-100 p-6 md:p-12">
        <div className="bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-8">
          <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500 mb-3">
            Case Study Series
          </p>
          <h2 className="logo-style text-3xl border-b border-slate-800 pb-2 mb-4">
            Technical Case Studies: DevOps at Anthropic
          </h2>
          <p className="font-body text-slate-900 text-lg leading-relaxed mb-6">
            Series of case studies analyzing infrastructure and DevOps tooling
            decisions at Anthropic, covering topics including CI/CD pipeline
            architecture, continuous delivery tool selection, and multi-cloud
            deployment strategies. Please note: this analysis is based on
            publicly available information. Published on OSF (Open Science
            Framework).
          </p>
          <Link
            href="https://osf.io/det7g/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Read on OSF
          </Link>
        </div>
      </section>
      <section className="w-full py-4 mb-6 flex flex-col gap-2">
        <h2 className="logo-style text-2xl sm:text-3xl text-center">
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
      <Link href="/">
        <Image
          src="/images/NF-watermark.png"
          alt="NF monogram watermark"
          width={200}
          height={200}
          className="mx-auto pb-8"
        />
      </Link>
    </main>
  );
}
