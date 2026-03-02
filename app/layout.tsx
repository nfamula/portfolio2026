import {
  Baskervville,
  Libre_Baskerville,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import HeaderNavigation from "./components/navigation/header-navigation";

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
  variable: "--font-accent",
});

export const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
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
        <HeaderNavigation />
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
