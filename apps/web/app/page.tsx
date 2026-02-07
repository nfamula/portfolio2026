import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="bg-violet-50 text-slate-900 p-12 rounded-lg flex flex-col items-center gap-8">
      <h1 className="text-5xl font-sans text-slate-900">
        Natalie Famula
      </h1>
      <p className="text-slate-900 text-lg font-serif max-w-xl justify-center text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
      <div className="flex gap-6 justify-center">
        <Link 
          href="/full-portfolio"
          className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md font-sans hover:opacity-90 transition"
        >
        View Full Portfolio
        </Link>
        <p className="bg-slate-700 text-slate-50 px-6 py-3 rounded-md font-sans hover:opacity-90 transition">Download Resume PDF</p>
      </div>
    </div>
  )
}
