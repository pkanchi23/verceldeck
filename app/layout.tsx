import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "VercelDeck - Interactive PDF Experience",
  description: "Transform your PDFs into interactive, animated presentations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-black text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
