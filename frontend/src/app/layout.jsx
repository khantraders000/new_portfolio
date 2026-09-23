import { Space_Grotesk, Inter, JetBrains_Mono, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-urdu",
  display: "swap",
});

const SITE_URL = "https://itsayan.in"; 

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
  default: "Ayan Khan | Full-Stack Developer",
  template: "%s | Ayan Khan",
  },
  description:
    "Ayan Khan is a Full-Stack Developer from Unchahar specializing in React, Next.js, Node.js, MongoDB and AI-powered web applications.",
  keywords: [
    "itsayan",
    "Ayan Khan",
    "Ayan Khan unchahar",
    "Ayan Khan raebareli",
    "web developer unchahar",
    "Ayan Khan developer",
    "itsayan.in",
    "MERN Stack Developer",
    "Full-Stack Developer unchahar , raebareli , India",
    "best website developer in unchahar",
    "best website developer in raebareli",
    "best website developer near me",
    "best developer near me",
    "full stack web developer near me",
    "best website developer near me",
    "best engineer near me",
    "best software engineer near me",
    "best software engineer in unchahar",
    "best software engineer in raebareli",
    "best software engineer in lucknow",
    "best software engineer in mumbra",
    "best software engineer in mumbai",
    "best software engineer in dharavi",
    "best software engineer in mahim",
    "best software engineer in sanjay nagar",
    "best iot engineer near me",
    "best iot engineer in unchahar",
    "best iot engineer in raebareli",
  ],
  authors: [{ name: "Ayan Khan", url: SITE_URL }],
  metadataBase: new URL("https://itsayan.in"),
  creator: "Ayan Khan",
  publisher: "Ayan Khan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Ayan Khan (itsayan) — Full-Stack Developer",
    description:
      "Full-Stack Developer specialising in the MERN stack, AI and real-time web applications.",
    siteName: "itsayan",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ayan Khan" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayan Khan (itsayan) — Full-Stack Developer",
    description:
      "Full-Stack Developer specialising in the MERN stack, AI and real-time web applications.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 ,"max-video-preview": -1},
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${urdu.variable}`}
    >
      <body className="bg-bg text-ink font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ayan Khan",
              alternateName: "itsayan",
              url: "https://itsayan.in",
              image: "https://itsayan.in/ayan-photo.jpg",
              jobTitle: "Full-Stack Developer",
              description:
                "Full-Stack Developer specialising in the MERN stack, AI and real-time web applications.",
              sameAs: [
                "https://github.com/khantraders000",
                "https://www.linkedin.com/in/ayan-khan-b06057354",
                "https://www.instagram.com/ayan_khan_0313._",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
