import '../styles/globals.css'

export const metadata = {
  title: 'Natalie Famula - Web Developer Portfolio',
  description: 'Here you will find examples from my professional web development experience, and a demonstration of my coding skills.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* todo: header */}
      <body>
        <div id="root">{children}</div>
      </body>
      {/* todo: footer */}
    </html>
  )
}
