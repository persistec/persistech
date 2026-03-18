import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://persistec.com'),
  title: {
    template: '%s | Persistec',
    default: 'Persistec - Expandimos limites',
  },
  description: 'Soluções de excelência tecnológica e infraestrutura IT em Angola. Expandimos os limites do seu negócio com inovação e confiança.',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://persistec.com',
    siteName: 'Persistec',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Persistec - Excelência Tecnológica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Persistec - Expandimos limites',
    description: 'Soluções de excelência tecnológica e infraestrutura IT em Angola.',
    images: ['/og-image.jpg'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body
        className={`${inter.className} bg-white text-persistec-charcoal antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
