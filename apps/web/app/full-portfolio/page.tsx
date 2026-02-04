export default function FullPortfolioPage() {
  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <h1 className="text-4xl font-bold text-purple-600 mb-8">
        Full Portfolio - grid layout for now
      </h1>

      <p className="text-gray-700 text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">Project 1</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">Project 2</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">Project 3</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">Project 4</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  )
}
