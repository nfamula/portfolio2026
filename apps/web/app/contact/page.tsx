export default function ContactPage() {
  return (
    <main className="p-10 bg-violet-50 min-h-[calc(100vh-9rem)]">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 font-sans">
        Get in Touch - I&apos;d love to hear from you!
      </h1>
      <p className="text-slate-700 text-lg mb-6 font-serif">I&apos;m open to new opportunities and collaborations. Feel free to reach out to me via email or connect with me on LinkedIn.</p>
      <ul className="text-slate-700 text-lg font-serif list-inside">
        <li>Email: <a href="mailto:nfamula@gmail.com" className="text-slate-700 hover:underline">nfamula@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/nataliefamula/" className="text-slate-700 hover:underline">linkedin.com/in/nataliefamula</a></li>
        <li>GitHub: <a href="https://github.com/nfamula" className="text-slate-700 hover:underline">@nfamula</a></li>
      </ul>
    </main>
  )
}
