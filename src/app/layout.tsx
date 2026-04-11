import type { Metadata } from "next";
import {
  Space_Grotesk,
  Plus_Jakarta_Sans,
  Poppins,
  Ibarra_Real_Nova,
  Great_Vibes,
  Schibsted_Grotesk,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const ibarraRealNova = Ibarra_Real_Nova({
  variable: "--font-logo",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kathleen Chen — Portfolio",
  description:
    "Aspiring UI Designer & Web Developer. Computer Science student and AI intern building modern web experiences.",
  keywords: ["portfolio", "web developer", "UI designer", "computer science"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${poppins.variable} ${ibarraRealNova.variable} ${greatVibes.variable} ${schibstedGrotesk.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        {/* Accessibility: Skip link — §1 skip-links */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
