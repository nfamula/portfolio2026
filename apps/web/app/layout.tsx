import { Lexend, Zilla_Slab } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-lexend',
  display: 'swap',
})

const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-zilla-slab',
  display: 'swap',
})

export const metadata = {
  title: 'Natalie Famula - Web Developer Portfolio',
  description: 'Here you will find examples from my professional web development experience, and a demonstration of my coding skills.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <header className="bg-slate-900 text-white p-6 font-sans">
          <ul className="flex gap-6">  
            <li><Link href="/NatalieFamula_Resume.pdf" download="NatalieFamula_Resume.pdf">Download Resume</Link></li>
            <li><Link href="/full-portfolio">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </header>
        <div id="app-root">{children}</div>
        <footer className="bg-slate-900 text-white p-6 font-sans">
          <p className='flex gap-6'>© 2026 | coded in Toronto with next.js <Link href="mailto:nfamula@gmail.com" className="hover:underline">nfamula@gmail.com</Link> <Link href="https://www.linkedin.com/in/nataliefamula/" className="hover:underline">LinkedIn</Link> <Link href="https://github.com/nfamula" className="hover:underline">GitHub</Link></p>
        </footer>
      </body>
    </html>
  )
}
