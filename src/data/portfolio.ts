export type PortfolioProject = {
  name: string;
  category: string;
  domain: string;
  href?: string;
  description: string;
  screenshot?: string;
};

// Descrições neutras derivadas da categoria do trabalho; não inventar detalhes
// de projeto, resultados ou tecnologias.
export const projects: PortfolioProject[] = [
  {
    name: "Interscorp",
    category: "Programação",
    domain: "www.interscorp.net",
    href: "https://www.interscorp.net",
    description: "Website desenvolvido e programado pela Persistech.",
    screenshot: "/images/portfolio/interscorp.webp",
  },
  {
    name: "Modtech",
    category: "Web Design",
    domain: "www.modtech.co.ao",
    href: "https://www.modtech.co.ao",
    description: "Website institucional desenvolvido pela Persistech.",
    screenshot: "/images/portfolio/modtech.webp",
  },
  {
    name: "DDM Angola",
    category: "Programação",
    domain: "www.ddmangola.com",
    href: "https://www.ddmangola.com",
    description: "Website desenvolvido e programado pela Persistech.",
    screenshot: "/images/portfolio/ddm-angola.webp",
  },
  {
    name: "Fundecit",
    category: "Web Design",
    domain: "www.fundecit.ao",
    href: "https://www.fundecit.ao",
    description: "Website institucional desenvolvido pela Persistech.",
    screenshot: "/images/portfolio/fundecit.webp",
  },
  {
    name: "Ripro",
    category: "Web Design",
    domain: "www.ripro.co.ao",
    description: "Website institucional desenvolvido pela Persistech.",
  },
  {
    name: "Dental Clinic",
    category: "Web Design",
    domain: "www.dentalclinic.co.ao",
    description: "Website institucional desenvolvido pela Persistech.",
  },
];
