import Link from "next/link"
import AnimatedCard from './components/animated/Card'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-10 gap-6">
      <h1 className="text-6xl font-bold text-center text-red-600">
        404
      </h1>
      <p className="text-center text-lg">
        Oops! Page not found.
      </p>

      <AnimatedCard />

      <Link href="/">
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Back to Homepage
        </button>
      </Link>
    </main>
  );
}