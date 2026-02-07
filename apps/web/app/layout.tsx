import { Lexend, Zilla_Slab } from 'next/font/google'
import './globals.css'

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
      <body className="bg-violet-100">
        <header className="bg-slate-900 text-white p-6 font-sans">
          <ul className="flex gap-6">  
            <li>Download Resume</li>
            <li><a href="/full-portfolio">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </header>
        <div id="app-root">{children}</div>
        <footer className="bg-slate-900 text-white p-6 font-sans">
          <p className='flex gap-6'>© 2026 <a href="mailto:nfamula@gmail.com" className="hover:underline">nfamula@gmail.com</a> <a href="https://www.linkedin.com/in/nataliefamula/" className="hover:underline">LinkedIn</a> <a href="https://github.com/nfamula" className="hover:underline">GitHub</a></p>
        </footer>
      </body>
    </html>
  )
}
