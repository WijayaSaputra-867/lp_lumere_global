import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "LUMERA — Rooted in Nature, Made for Tomorrow",
  description: "Artisan-crafted sustainable fashion from Indonesia. Handmade with heritage techniques and natural dyes, empowering communities from farm to closet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
