"use client"; //needed for lightbox

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  content: string;
  more: string;
  projectLink?: string;
  screenshotBase: string;
  title: string;
};

export default function ProjectCard({
  content,
  more,
  projectLink,
  screenshotBase,
  title,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group bg-white rounded-lg shadow transition-all duration-300">
      <div
        onClick={() => setOpen(true)}
        className="md:cursor-pointer relative w-full h-auto aspect-video rounded-t-lg overflow-hidden"
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
      <div className="p-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-slate-600">{content}</p>
        {projectLink?.trim() ? (
          <Link href={projectLink} target="_blank" className="text-violet-700 hover:underline">
            Visit Project
          </Link>
        ) : (
          <span>
            <br />
          </span>
        )}
      </div>
      <div className="flex items-center text-slate-600 text-2xl mt-2 text-center justify-center cursor-pointer group-hover:text-slate-600 transition-colors duration-300">
        <span className="ml-1 transition-transform duration-300 group-hover:rotate-45">+</span>
      </div>
      <div
        className="
      mt-4 mb-4 text-slate-600 font-serif whitespace-pre-line px-4
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
          className="hidden md:flex fixed inset-0 z-50 items-center justify-center bg-violet-100/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-8xl p-4">
            {/* Collage layout */}
            <div
              className="grid h-[95vh] gap-3 rounded-xl bg-black/40 p-4 shadow-2xl
          grid-cols-1 md:grid-cols-[1fr_2fr_1fr] flex-1"
            >
              {/* Left */}
              <div className="relative overflow-hidden flex items-center justify-center">
                <Image
                  src={`/images/${screenshotBase}_screenshot1.png`}
                  alt="project screenshot"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* Center stack */}
              <div className="hidden md:grid grid-rows-2 gap-3">
                <div className="relative overflow-hidden">
                  <Image
                    src={`/images/${screenshotBase}_screenshot.png`}
                    alt="project screenshot"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={`/images/${screenshotBase}_screenshot3.png`}
                    alt="project screenshot"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
              </div>

              {/* Right */}
              <div className="relative overflow-hidden flex items-center justify-center">
                <Image
                  src={`/images/${screenshotBase}_screenshot2.png`}
                  alt="project screenshot"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
