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
    default: "Persistech",
    template: "%s | Persistech",
  },
  description: "Soluções de excelência tecnológica e infraestrutura IT em Angola.",
  appleWebApp: {
    title: "Persistech",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  openGraph: {
    siteName: "Persistech",
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
        <meta name="apple-mobile-web-app-title" content="Persistech" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/logo_persistech.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
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
