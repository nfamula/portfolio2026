import Link from 'next/link'
import AnimatedCard from './components/animatedCard'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-10">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Lorem Ipsum
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
      </p>
      <AnimatedCard />
      <Link href="/full-portfolio">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
          View Full Portfolio
        </button>
      </Link>
      {/* todo resume download link */}
      {/* todo contact form */}
      {/* todo dark and light mode toggle */}
      {/* todo easter eggs */}
    </div>
  )
}
