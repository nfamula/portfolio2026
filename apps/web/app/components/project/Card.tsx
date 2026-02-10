import Link from "next/link"

type ProjectCardProps = {
  title: string
  content: string
  more: string
  projectLink?: string
}

export default function ProjectCard({ title, content, more, projectLink }: ProjectCardProps) {
  return (
    // todo: add logos
    // todo: add tags
    // todo: add badges for tech stack 
    // ongoing: add more projects as they are completed
    // todo: add links to github if relevant
    // todo: add link (if applicable some are too old)

  //todo: add slider with images at the top of each card, four images each use slider.js library
    //lazy load next/image for the images in the slider
  <div className="group bg-violet-50 rounded-lg shadow transition-all duration-300">
    <div className="p-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-slate-600">{content}</p>
      { projectLink?.trim() && (
        <Link href={projectLink} target="_blank" className="text-violet-700 hover:underline">Visit Project</Link>
      )}
    </div>
      <div className="flex items-center text-slate-400 text-2xl mt-2 text-center justify-center cursor-pointer group-hover:text-slate-600 transition-colors duration-300">
        <span className="ml-1 transition-transform duration-300 group-hover:rotate-45">+</span>
      </div>
    <div className="
      mt-4 mb-4 text-slate-600 font-serif whitespace-pre-line px-4
      overflow-auto
      max-h-full
      md:max-h-0 md:overflow-hidden md:group-hover:max-h-500
      transition-all duration-300
    ">
      {more}
    </div>
  </div>
  )
}