export default function ProjectCard({ title, content }: { title: string, content: string }) {
  return (
    // todo: add logos 
    // todo: add tags
    // todo: add badges for tech stack 
    // ongoing: add more projects as they are completed
    // todo: add links to github if relevant
    // todo: add ink (if apploicable some are too old)
    // todo: show screenshot on hover
    <div className="p-6 bg-violet-50 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold font-sans">{title}</h2>
      <p className="mt-2 text-slate-600 font-serif">{content}</p>
    </div>
    //todo: add "more" drawer for details
  )
}