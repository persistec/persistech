import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";

import { Footer, JsonLd, Navbar } from "@/components/layout";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#F7F4EC" />
        <meta name="msapplication-navbutton-color" content="#F7F4EC" />
        <meta name="msapplication-TileColor" content="#F7F4EC" />
        <meta name="msapplication-TileImage" content="/brand/persistech-logo.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
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
