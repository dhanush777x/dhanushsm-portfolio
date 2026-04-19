import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhanush S M | Embedded Software Engineer",
  metadataBase: new URL("https://dhanushsm.vercel.app"),
  description:
    "Terminal-based portfolio of Dhanush S M - Embedded Software Engineer specializing in Edge AI, Firmware, and TinyML development",
  keywords: [
    "Dhanush S M",
    "Embedded Software Engineer",
    "Firmware",
    "Edge AI",
    "TinyML",
    "Portfolio",
    "Developer",
    "Embedded Systems",
  ],
  authors: [{ name: "Dhanush S M" }],
  openGraph: {
    title: "Dhanush S M | Embedded Software Engineer",
    description:
      "Terminal-based portfolio of Dhanush S M - Embedded Software Engineer specializing in Edge AI, Firmware, and TinyML",
    type: "website",
    locale: "en_US",
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
    <html lang="en" className={`h-full ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
