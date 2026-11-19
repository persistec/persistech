import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { Footer, JsonLd, Navbar } from "@/components/layout";

import "./globals.css";

/* Self-hosted variable fonts (latin subset) — no build-time CDN dependency. */
const inter = localFont({
  src: "./fonts/inter.woff2",
  weight: "400 600",
  display: "swap",
  variable: "--font-inter",
});

const sora = localFont({
  src: "./fonts/sora.woff2",
  weight: "400 600",
  display: "swap",
  variable: "--font-sora",
});

const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono.woff2",
  weight: "400 500",
  display: "swap",
  variable: "--font-jetbrains",
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
    statusBarStyle: "default",
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

export const viewport: Viewport = {
  themeColor: "#F7F4EC",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-AO">
      <head>
        <JsonLd />
        <meta name="msapplication-navbutton-color" content="#F7F4EC" />
        <meta name="msapplication-TileColor" content="#F7F4EC" />
        <meta name="msapplication-TileImage" content="/brand/persistech-logo.png" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
