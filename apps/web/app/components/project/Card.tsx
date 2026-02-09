export default function ProjectCard({ title, content }: { title: string, content: string }) {
  return (
    <div className="p-6 bg-violet-50 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold font-sans">{title}</h2>
      <p className="mt-2 text-slate-600 font-serif">{content}</p>
    </div>
  )
}