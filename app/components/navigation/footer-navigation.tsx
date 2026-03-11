"use client";

export default function FooterNavigation() {
  return (
    <footer className="bg-slate-900 text-white p-6">
      <nav className="mx-auto flex flex-col md:flex-row md:gap-6 text-center md:text-left items-center md:items-start">
        <p>© 2026</p>
        <p>coded with next.js</p>
        <p>
          <a
            href="mailto:nfamula@gmail.com"
            className="hover:underline"
            onClick={() => {
              window.dataLayer?.push({
                event: "external_link_click",
                link_text: "email",
                link_location: "footer",
              });
            }}
          >
            nfamula@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/nataliefamula/"
            className="hover:underline"
            onClick={() => {
              window.dataLayer?.push({
                event: "external_link_click",
                link_text: "linkedin",
                link_location: "footer",
              });
            }}
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://github.com/nfamula"
            className="hover:underline"
            onClick={() => {
              window.dataLayer?.push({
                event: "external_link_click",
                link_text: "github",
                link_location: "footer",
              });
            }}
          >
            GitHub
          </a>
        </p>
      </nav>
    </footer>
  );
}
