import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer, JsonLd, Navbar } from "@/components/layout";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://persistec.com"),
  title: {
    default: "Persistec",
    template: "%s | Persistec",
  },
  description: "Soluções de excelência tecnológica e infraestrutura IT em Angola.",
  appleWebApp: {
    title: "Persistec",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  openGraph: {
    siteName: "Persistec",
    type: "website",
    locale: "pt_AO",
  },
  twitter: {
    card: "summary_large_image",
    site: "@persistec",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO" className="dark">
      <head>
        <JsonLd />
      </head>
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
