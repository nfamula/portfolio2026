import Image from "next/image";
import ContactPageLinks from "../components/navigation/contact-page-links";

export default function ContactPage() {
  return (
    <main className="bg-violet-100 min-h-[calc(100vh-9rem)] flex flex-col">
      {/* Editorial hero band */}
      <div className="bg-striped py-10 flex flex-col items-center gap-4 border-b border-slate-800">
        <p className="text-[10px] uppercase tracking-[0.35em] text-slate-600">
          Natalie Famula — Available for new projects.
        </p>
        <h1 className="font-[family-name:var(--font-accent)] italic text-5xl sm:text-7xl text-slate-900 text-center leading-tight px-6">
          Let&apos;s build your
          <br />
          website.
        </h1>
        <p className="logo-style text-xs tracking-[0.25em] text-slate-500 uppercase">
          Toronto · Remote{" "}
        </p>
        <a
          href="mailto:nfamula@gmail.com"
          className="mt-2 bg-slate-900 text-slate-50 px-8 py-3 rounded-md hover:opacity-90 transition"
        >
          Email me
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-8 py-12 px-8">
        <Image
          src="/images/headshot_photographer-AllyChadwick.jpg"
          alt="Natalie Famula"
          width={120}
          height={120}
          className="rounded-full p-1 border-2 border-black shadow-lg"
        />
        <p className="font-[family-name:var(--font-body)] text-slate-900 text-lg leading-relaxed text-center max-w-md">
          Send a message and I&apos;ll get back to you within 1&ndash;2 days.
        </p>
        <hr className="border-t border-slate-800 w-full max-w-sm" />
        <ContactPageLinks />
      </div>
    </main>
  );
}
