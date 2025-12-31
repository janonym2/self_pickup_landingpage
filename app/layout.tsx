import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import CookieBanner from "@/components/CookieBanner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bench-ly.vercel.app"),
  title: {
    default: "Bench.ly",
    template: "%s | Bench.ly",
  },
  description: "Miete Bierzeltgarnituren",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="md:mx-[10%]">
        <Navbar pPhone='00491772247053' pEmail='jan-hendricks@outlook.de' />
        <Banner content={`Bierzeltgarnituren mieten \n in Essen`} contentMobile='Bierzeltgarnituren mieten' />
        <main>{children}</main>
        <CookieBanner />
        <Footer />
      </body>
    </html>
  );
}