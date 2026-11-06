"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Licenciamento", href: "/licenciamento" },
  { label: "Serviços", href: "/servicos" },
  { label: "Newmedia", href: "/newmedia" },
  { label: "Contactos", href: "/contactos" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-hairline bg-canvas/92 backdrop-blur-[20px]">
        <div className="container-aurum flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Persistech">
            <Image
              src="/brand/persistech-logo.png"
              alt="Logótipo Persistech"
              width={195}
              height={94}
              priority
              className="h-11 w-auto sm:h-12 md:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-2 text-[13px] font-medium tracking-[0.01em] transition-colors duration-150 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-200 hover:text-ink hover:after:scale-x-100",
                    active ? "text-ink after:scale-x-100" : "text-graphite",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button
                variant="outline"
                size="sm"
                href="https://loja.persistec.com"
                target="_blank"
                rel="noopener noreferrer"
                arrow
              >
                Loja Online
              </Button>
            </div>

            <button
              type="button"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="menu-mobile"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-hairline text-ink transition-colors hover:border-gold/60 hover:text-gold-deep lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-executive/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="menu-mobile"
        role={isMenuOpen ? "dialog" : undefined}
        aria-modal={isMenuOpen ? true : undefined}
        aria-label="Menu de navegação"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-dvh w-[min(88vw,24rem)] flex-col border-l border-hairline bg-canvas px-5 pb-8 pt-24 transition-transform duration-300 ease-out lg:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setIsMenuOpen(false)}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-[4px] border border-hairline text-ink transition-colors hover:border-gold/60 hover:text-gold-deep"
        >
          <X className="h-5 w-5" />
        </button>

        <nav className="flex flex-col" aria-label="Navegação móvel">
          {navLinks.map((link, index) => {
            const active = isActivePath(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "flex items-center justify-between border-b border-hairline py-4 text-base transition-colors",
                  active ? "text-ink" : "text-graphite hover:text-ink",
                )}
              >
                <span className="flex items-center gap-3">
                  {active ? <span className="h-4 w-0.5 bg-gold" aria-hidden="true" /> : null}
                  {link.label}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-8">
          <Button
            variant="outline"
            size="md"
            href="https://loja.persistec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            arrow
          >
            Loja Online
          </Button>
        </div>
      </aside>
    </>
  );
}
