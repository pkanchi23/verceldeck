import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import TableOfContents from "@/components/TableOfContents";
import ScreenSizeWarning from "@/components/ScreenSizeWarning";

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
        <ScreenSizeWarning />
        <TableOfContents />
        {children}
      </body>
    </html>
  );
}
