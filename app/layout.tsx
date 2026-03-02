import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Roboto } from 'next/font/google';
import StructuredData from './components/StructuredData';

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
  title: {
    default: "Ebuka Moses Okoye | Full-Stack Developer | Blockchain Engineer | WordPress Specialist | Graphic Designer ",
    template: "%s | Ebuka Moses Okoye",
  },
  description: "Ebuka Moses Okoye is a Full-Stack Developer, Blockchain Engineer, WordPress Specialist, Graphic Designer specializing in React, Next.js, TypeScript, Rust, Cairo and Web3 development. View projects, skills, and contact details.",
  icons: {
    icon: '/images/EbukaMoses.jpg',
    shortcut: '/images/EbukaMoses.jpg',
    apple: '/images/EbukaMoses.jpg',
  },
  metadataBase: new URL("https://ebukamoses.netlify.app/"),
  keywords: [
    "Frontend Developer Nigeria",
    "React Developer",
    "Next.js Developer",
    "Web3 Developer",
    "Solidity Developer",
    "TypeScript Developer",
    "WordPress Developer & Specialist",
    "Graphic Designer"
  ],
  authors: [{ name: "Ebuka Moses Okoye" }],
  creator: "Ebuka Moses Okoye",
  openGraph: {
    title: "Ebuka Moses Okoye | Full-Stack Developer | Blockchain Engineer | WordPress Specialist | Graphic Designer",
    description:
      "Full-Stack Developer, Blockchain Engineer, WordPress Specialist, Graphic Designer specializing in React, Next.js, TypeScript, Rust, Cairo and Web3.",
    url: "https://ebukamoses.netlify.app/",
    siteName: "Ebuka Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ebuka Moses Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebuka Moses Okoye | Full-Stack Developer | Blockchain Engineer | WordPress Specialist | Graphic Designer",
    description:
      "Full-Stack Developer, Blockchain Engineer, WordPress Specialist, Graphic Designer specializing in React, Next.js, TypeScript, Rust, Cairo and Web3.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-roboto">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
        {children}
      </body>
    </html>
  );
}
