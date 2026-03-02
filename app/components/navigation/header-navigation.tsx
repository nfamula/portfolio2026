"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-slate-900 text-white">
      <nav className="flex items-center gap-4 justify-between mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="pl-2 py-2">
            <Image
              src="/images/NF-logo-dark.png"
              alt="NF monogram logo Natalie Famula"
              width={124}
              height={60}
            />
          </Link>
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center">
            <li>
              <a
                href="/downloads/NatalieFamula_Resume.pdf"
                download="NatalieFamula_Resume.pdf"
                className="hover:underline"
              >
                Resume
              </a>
            </li>
            <li>
              <Link href="/full-portfolio" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col gap-1.5 mr-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-4 p-4">
            <a
              href="/downloads/NatalieFamula_Resume.pdf"
              download="NatalieFamula_Resume.pdf"
              className="hover:underline"
            >
              Resume
            </a>
            <Link href="/full-portfolio" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
