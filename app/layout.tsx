import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import TableOfContents from "@/components/TableOfContents";
import ScreenSizeWarning from "@/components/ScreenSizeWarning";
import AppGuard from "@/components/AppGuard";

export const metadata: Metadata = {
  title: "Vercel Materials",
  description: "Interactive presentation deck",
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
        <AppGuard>
          <ScreenSizeWarning />
          <TableOfContents />
          {children}
        </AppGuard>
      </body>
    </html>
  );
}
