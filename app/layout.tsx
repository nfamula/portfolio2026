import {
  Baskervville,
  Libre_Baskerville,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-heading",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
  variable: "--font-playfair-display",
});

export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
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
    <html
      lang="en"
      className={`${baskervville.variable} ${playfairDisplay.variable} ${libreBaskerville.variable}`}
    >
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <header className="bg-slate-900 text-white">
          <ul className="flex gap-6 items-center">
            <li className="pl-2 py-2">
              <Link href="/">
                <Image
                  src="/images/NF-logo-dark.png"
                  alt="NF monogram logo Natalie Famula"
                  width={124}
                  height={60}
                />
              </Link>
            </li>
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
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </header>
        <div id="app-root">{children}</div>
        <footer className="bg-slate-900 text-white p-6">
          <nav className="mx-auto flex flex-col md:flex-row md:gap-6 text-center md:text-left items-center md:items-start">
            <p>© 2026</p>
            <p>coded with next.js</p>
            <p>
              <a href="mailto:nfamula@gmail.com" className="hover:underline">
                nfamula@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/nataliefamula/"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a href="https://github.com/nfamula" className="hover:underline">
                GitHub
              </a>
            </p>
          </nav>
        </footer>
      </body>
    </html>
  );
}
