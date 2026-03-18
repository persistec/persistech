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

export default function Footer() {
  return (
    <footer className="bg-persistec-charcoal py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand & Contact Information */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo_PT.png"
                alt="Logótipo Persistec"
                width={150}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Rua Major Kanhangulo, Prédio Ambriz, 3º Andar</p>
              <p>Luanda, Angola</p>
              <p className="pt-2">
                Email:{" "}
                <a
                  href="mailto:contacto@persistec.com"
                  className="transition-colors hover:text-persistec-gold"
                >
                  contacto@persistec.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-persistec-gold">
              Links Rápidos
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-persistec-gold">
              Corporate
            </h4>
            <p className="text-sm text-gray-400">
              Soluções tecnológicas avançadas para o crescimento do seu negócio.
              Inovação e confiança ao seu serviço.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Persistec. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
