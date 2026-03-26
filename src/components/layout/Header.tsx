import Link from "next/link";

import Image from "next/image";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Quem Somos", href: "/quem-somos" },
  { name: "Soluções", href: "/solucoes" },
  { name: "Serviços", href: "/servicos" },
  { name: "Newmedia", href: "/newmedia" },
  { name: "Contactos", href: "/contactos" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-persistec-charcoal backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logótipo Persistec"
              width={180}
              height={48}
              priority
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-persistec-light transition-colors hover:text-persistec-gold"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Link
            href="https://loja.persistec.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-persistec-gold px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-opacity-90 hover:shadow-md"
          >
            Loja Online
          </Link>
        </div>
      </div>
    </header>
  );
}
