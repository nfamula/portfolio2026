import {
  Baskervville,
  Libre_Baskerville,
  Playfair_Display,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import HeaderNavigation from "./components/navigation/header-navigation";
import FooterNavigation from "./components/navigation/footer-navigation";

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
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <html
      lang="en"
      className={`${baskervville.variable} ${playfairDisplay.variable} ${libreBaskerville.variable}`}
    >
      <head>
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {/* fallback for GTM if JS is disabled */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <HeaderNavigation />
        <div id="app-root">{children}</div>
        <FooterNavigation />
      </body>
    </html>
  );
}
