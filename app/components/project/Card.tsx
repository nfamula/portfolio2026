import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  badgesImage: string;
  content: string;
  more: string;
  projectLink?: string;
  screenshotBase: string;
  title: string;
};

export default function ProjectCard({
  badgesImage,
  content,
  more,
  projectLink,
  screenshotBase,
  title,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group relative bg-stone-100 border border-gray-200 rounded-lg shadow-[0_4px_10px_rgba(15,23,43,0.05)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[0_12px_24px_rgba(15,23,43,0.1)]">
      <div
        onClick={() => setOpen(true)}
        className="md:cursor-pointer relative w-full h-auto aspect-video overflow-hidden"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <Image
          src={`/images/${screenshotBase}_screenshot.png`}
          alt={`${title} screenshot`}
          fill
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          quality={100}
        />
      </div>
      <div>
        <h2 className="text-xl font-heading p-4">{title}</h2>
        <div className="my-4 px-4 flex opacity-90 grayscale-[0.2]">
          <Image
            src={badgesImage}
            alt={`${title}`}
            width={100}
            height={25}
            className="object-contain"
          />
        </div>
        <p className="font-body px-4 text-sm">{content}</p>
        {projectLink?.trim() ? (
          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-700 px-4 text-sm font-accent hover:underline"
          >
            Visit Project
          </Link>
        ) : (
          <span>
            <br />
          </span>
        )}
      </div>
      <div className="flex items-center text-slate-900 text-2xl mt-2 text-center justify-center cursor-pointer group-hover:text-slate-600 transition-colors duration-300">
        <span className="ml-1 transition-transform duration-300 group-hover:rotate-45">
          +
        </span>
      </div>
      <div
        className="
          mt-4 mb-4 text-slate-900 whitespace-pre-line px-4
          overflow-auto
          max-h-full
          md:max-h-0 md:overflow-hidden md:group-hover:max-h-500
          transition-all duration-300
        "
      >
        {more}
      </div>
      {/* Lightbox opens when click image, click anywhere to close. Disabled on small screens. */}
      {open && (
        <div
          className="hidden md:flex fixed inset-0 z-50 items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-[1000px] p-4">
            {/* Collage gird lightbox layout */}
            <div className="grid h-[90vh] gap-3 rounded-lg p-4 shadow-2xl grid-cols-1 md:grid-cols-[1fr_2fr_1fr] bg-stone-100">
              {/* Left */}
              <div className="relative overflow-hidden flex items-center justify-center max-h-[80vh]">
                <Image
                  src={`/images/${screenshotBase}_screenshot1.png`}
                  alt="project screenshot"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* Center stack */}
              <div className="hidden md:grid grid-rows-2 gap-1">
                <div className="relative overflow-hidden max-h-[40vh]">
                  <Image
                    src={`/images/${screenshotBase}_screenshot.png`}
                    alt="project screenshot"
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
                <div className="relative overflow-hidden max-h-[40vh]">
                  <Image
                    src={`/images/${screenshotBase}_screenshot3.png`}
                    alt="project screenshot"
                    fill
                    className="object-contain"
                    quality={100}
                  />
                </div>
              </div>

              {/* Right */}
              <div className="relative overflow-hidden flex items-center justify-center max-h-[80vh]">
                <Image
                  src={`/images/${screenshotBase}_screenshot2.png`}
                  alt="project screenshot"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          {/* watermark */}
          <div className="absolute bottom-2 right-2 pointer-events-none m-2">
            <Image
              src="/images/NF-watermark.png"
              alt="Natalie Famula watermark"
              width={206}
              height={250}
              className="object-contain rounded-full opacity-60 shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
