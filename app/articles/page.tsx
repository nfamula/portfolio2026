import Link from "next/link";
import Image from "next/image";

export default function ArticlesPage() {
  return (
    <main className="p-4 bg-violet-100 min-h-[calc(100vh-9rem)]">
      <section className="bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] p-8 mb-10 mt-6">
        <h1 className="logo-style text-3xl">
          Technical Case Studies: Anthropic
        </h1>
        <p className="text-slate-900 text-lg mb-6">
          Published on OSF. Series of case studies analyzing infrastructure and
          DevOps tooling decisions at Anthropic, covering topics including CI/CD
          pipeline architecture, continuous delivery tool selection, and
          multi-cloud deployment strategies. Please Note: these analysis are
          based on publicly available information.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="https://osf.io/det7g/"
            className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Read articles
          </Link>
          <Link
            href="/contact"
            className="border border-slate-700 text-slate-700 px-6 py-3 rounded-md hover:bg-slate-700 hover:text-slate-50 transition"
          >
            Contact me
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
