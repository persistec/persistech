import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer, Navbar } from "@/components/layout";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://persistec.com"),
  description: "Soluções de excelência tecnológica e infraestrutura IT em Angola.",
  appleWebApp: {
    title: "Persistec",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  openGraph: {
    siteName: "Persistec",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className="dark">
      <body
        className={`${inter.className} ${inter.variable} bg-background-primary text-text-primary antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
