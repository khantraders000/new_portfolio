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

export const metadata = {
  title: "Ayan Khan — Full-Stack Developer",
  description:
    "Full-Stack Developer | MERN Stack Developer | AI Enthusiast. Portfolio of Ayan Khan.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${urdu.variable}`}
    >
      <body className="bg-bg text-ink font-body antialiased">{children}</body>
    </html>
  );
}
