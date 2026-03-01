import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Roboto } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300','400','500','700'],
  variable: '--font-roboto',
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Ebuka Moses ~ Portfolio",
  description: "Full-Stack Developer • Blockchain Engineer • WordPress Specialist • Graphic Designer | React • Next.js • Solidity • Cairo • Rust | Crafting Digital Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="font-roboto">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
        {children}
      </body>
    </html>
  );
}
