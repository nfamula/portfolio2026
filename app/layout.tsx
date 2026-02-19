import { Lexend, Zilla_Slab } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-zilla-slab",
  display: "swap",
});

export const metadata = {
  title: "Natalie Famula - Web Developer Portfolio",
  description:
    "Here you will find examples from my professional web development experience, and a demonstration of my coding skills.",
  icons: {
    icon: [
      { url: "images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "images/favicon.ico" },
    ],
    apple: "images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.variable} ${zillaSlab.variable}`}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <header className="bg-slate-900 text-white p-6 font-sans">
          <ul className="flex gap-6">
            <li>
              <a
                href="/downloads/NatalieFamula_Resume.pdf"
                download="NatalieFamula_Resume.pdf"
              >
                Download Resume
              </a>
            </li>
            <li>
              <Link href="/full-portfolio">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        <div id="app-root">{children}</div>
        <footer className="bg-slate-900 text-white p-6 font-sans">
          <nav className="mx-auto flex flex-col md:flex-row md:gap-6 text-center md:text-left items-center md:items-start">
            <p>© 2026</p>
            <p>coded with next.js</p>
            <p>
              <Link href="mailto:nfamula@gmail.com" className="hover:underline">
                nfamula@gmail.com
              </Link>
            </p>
            <p>
              <Link
                href="https://www.linkedin.com/in/nataliefamula/"
                className="hover:underline"
              >
                LinkedIn
              </Link>
            </p>
            <p>
              <Link
                href="https://github.com/nfamula"
                className="hover:underline"
              >
                GitHub
              </Link>
            </p>
          </nav>
        </footer>
      </body>
    </html>
  );
}
