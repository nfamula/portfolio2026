import Image from "next/image";
import ContactPageLinks from "../components/navigation/contact-page-links";

export default function ContactPage() {
  return (
    <main className="p-10 bg-violet-100 min-h-[calc(100vh-9rem)]">
      <Image
        src="/images/headshot_photographer-AllyChadwick.jpg"
        alt="Natalie Famula"
        width={175}
        height={175}
        className="rounded-full p-1 border-2 border-black shadow-lg mx-auto"
      />
      <h1 className="text-4xl font-accent mb-8 text-center">Get in touch!</h1>
      <h2 className="logo-style mb-6 text-center">
        I&apos;d love to hear from you
      </h2>
      <hr className="border-t border-black my-6" />
      <div className="flex flex-col items-center">
        <ContactPageLinks />
        <Image
          src="/images/shakinghands.svg"
          alt="handshake graphic"
          width={150}
          height={150}
          className="animate-sway object-contain mx-auto mt-4"
        />
      </div>
    </main>
  );
}
