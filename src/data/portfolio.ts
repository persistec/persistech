export type PortfolioProject = {
  name: string;
  category: string;
  href: string;
  description: string;
};

// Descrições neutras derivadas da categoria do trabalho; não inventar detalhes
// de projeto, resultados ou tecnologias.
export const projects: PortfolioProject[] = [
  {
    name: "Ripro",
    category: "Web Design",
    href: "http://www.ripro.co.ao",
    description: "Website institucional desenvolvido pela Persistech.",
  },
  {
    name: "Interscorp",
    category: "Programação",
    href: "http://www.interscorp.net",
    description: "Website desenvolvido e programado pela Persistech.",
  },
  {
    name: "Dental Clinic",
    category: "Web Design",
    href: "http://www.dentalclinic.co.ao",
    description: "Website institucional desenvolvido pela Persistech.",
  },
  {
    name: "DDM Angola",
    category: "Programação",
    href: "http://www.ddmangola.com",
    description: "Website desenvolvido e programado pela Persistech.",
  },
  {
    name: "Modtech",
    category: "Web Design",
    href: "https://www.modtech.co.ao",
    description: "Website institucional desenvolvido pela Persistech.",
  },
  {
    name: "Fundecit",
    category: "Em curso",
    href: "https://www.fundecit.ao",
    description: "Desenvolvimento do website em curso.",
  },
];
