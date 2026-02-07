export default function FullPortfolioPage() {
  return (
    <main className="min-h-screen p-10 bg-violet-50 min-h-[calc(100vh-9rem)]">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 font-sans">
        Full Portfolio - grid layout for now
      </h1>
        {/* todo: certifcations, skills, interests, projects */}
        {/* todo: blog: pull in from substack, pull in youtube videos */}
      <p className="text-slate-700 text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Placeholder for projects - replace with card component and over project data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-violet-50 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold font-sans">Project 1</h2>
          <p className="mt-2 text-slate-600 font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="p-6 bg-violet-50 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold font-sans">Project 2</h2>
          <p className="mt-2 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="p-6 bg-violet-50 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold font-sans">Project 3</h2>
          <p className="mt-2 text-slate-600 font-serif">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="p-6 bg-violet-50 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold font-sans">Project 4</h2>
          <p className="mt-2 text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </main>
  )
}
