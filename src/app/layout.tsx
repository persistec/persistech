import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Persistec",
  description: "Website Corporativo da Persistec",
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
        {children}
      </body>
    </html>
  );
}
