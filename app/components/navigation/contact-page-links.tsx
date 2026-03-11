"use client";

export default function ContactPageLinks() {
  return (
    <ul className="text-slate-900 text-lg list-inside text-center">
      <li>
        <a
          href="mailto:nfamula@gmail.com"
          className="hover:underline"
          onClick={() => {
            window.dataLayer?.push({
              event: "external_link_click",
              link_text: "email",
              link_location: "contact_page",
            });
          }}
        >
          nfamula@gmail.com
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/nataliefamula/"
          className="hover:underline"
          onClick={() => {
            window.dataLayer?.push({
              event: "external_link_click",
              link_text: "linkedin",
              link_location: "contact_page",
            });
          }}
        >
          linkedin.com/in/nataliefamula
        </a>
      </li>
      <li>
        GitHub:{" "}
        <a
          href="https://github.com/nfamula"
          className="hover:underline"
          onClick={() => {
            window.dataLayer?.push({
              event: "external_link_click",
              link_text: "github",
              link_location: "contact_page",
            });
          }}
        >
          @nfamula
        </a>
      </li>
      <li>Located in Toronto, Canada 🇨🇦</li>
    </ul>
  );
}
