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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-50 w-full border-b border-transparent transition-all duration-300 ease-out",
          isScrolled && "border-border-default bg-background-primary/85 backdrop-blur-[20px]",
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center" aria-label="Persistec">
            <Image
              src="/logo_PT.png"
              alt="Logótipo Persistec"
              width={180}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium text-text-secondary transition-all duration-200 ease-out after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent-light after:transition-transform after:duration-200 after:ease-out hover:text-text-primary hover:after:scale-x-100",
                    active && "text-accent-light after:scale-x-100",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button
                variant="outline"
                size="sm"
                href="https://loja.persistec.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Loja Online
              </Button>
            </div>
            <button
              type="button"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-default bg-background-card text-text-primary transition-all duration-200 ease-out hover:border-border-accent hover:text-accent-light md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background-primary/70 transition-opacity duration-300 ease-out md:hidden",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden={!isMenuOpen}
      />

      <aside
        role={isMenuOpen ? "dialog" : undefined}
        aria-modal={isMenuOpen ? true : undefined}
        className={cn(
          "glass fixed top-0 right-0 z-50 flex h-full w-[min(86vw,24rem)] flex-col border-l border-border-default bg-background-secondary px-6 pb-8 pt-24 shadow-glow-blue transition-transform duration-300 ease-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "rounded-lg border border-transparent px-4 py-3 text-base text-text-secondary transition-all duration-200 ease-out hover:border-border-accent hover:bg-background-elevated hover:text-text-primary",
                  active && "border-border-accent bg-background-elevated text-accent-light",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8">
          <Button
            variant="outline"
            size="sm"
            href="https://loja.persistec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Loja Online
          </Button>
        </div>
      </aside>
    </>
  );
}
