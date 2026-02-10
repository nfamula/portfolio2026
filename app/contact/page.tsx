import Image from 'next/image'

export default function ContactPage() {
  return (
    <main className="p-10 bg-violet-100">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 font-sans text-center">
        Get in Touch - I&apos;d love to hear from you!
      </h1>
      <p className="text-slate-700 text-lg mb-6 font-serif text-center">I&apos;m open to new opportunities and collaborations. Feel free to reach out to me via <a href="mailto:nfamula@gmail.com" className="text-slate-700 hover:underline">email</a> or connect with me on <a href="https://www.linkedin.com/in/nataliefamula/" className="text-slate-700 hover:underline">LinkedIn.</a></p>
      <div className="flex flex-col items-center">
        <Image
            src="/images/headshot_photographer-AllyChadwick.jpg" 
            alt="Natalie Famula" 
            width={300}
            height={300}
            className="rounded-full"
            />
        <ul className="text-slate-700 text-lg font-serif list-inside mt-4 space-y-2">
            <li>Email: <a href="mailto:nfamula@gmail.com" className="text-slate-700 hover:underline">nfamula@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/nataliefamula/" className="text-slate-700 hover:underline">linkedin.com/in/nataliefamula</a></li>
            <li>GitHub: <a href="https://github.com/nfamula" className="text-slate-700 hover:underline">@nfamula</a></li>
            <li>Located in Toronto, Canada 🇨🇦</li>
        </ul>
      </div>
    </main>
  )
}
