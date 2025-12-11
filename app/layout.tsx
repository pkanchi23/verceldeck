import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import TableOfContents from "@/components/TableOfContents";
import AppGuard from "@/components/AppGuard";
import SlideJump from "@/components/SlideJump";
import ScaleWrapper from "@/components/ScaleWrapper";

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
    <html lang="en" className="h-full w-full overflow-hidden">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-black text-slate-100 h-full w-full overflow-hidden m-0 p-0`}
      >
        <TableOfContents />
        <ScaleWrapper>
          <AppGuard>
            <SlideJump />
            {children}
          </AppGuard>
        </ScaleWrapper>
      </body>
    </html>
  );
}
