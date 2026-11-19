export interface Client {
  id: string;
  name: string;
  image: string;
}

/** Logos live in `public/clients/`; display name + path kept in sync. */
export const persistecClients: Client[] = [
  { id: "afrideca", name: "Afrideca", image: "/clients/afrideca.webp" },
  { id: "akm", name: "AKM", image: "/clients/akm.webp" },
  { id: "ambergol", name: "Ambergol", image: "/clients/ambergol.webp" },
  { id: "anpg", name: "ANPG", image: "/clients/anpg.webp" },
  { id: "bancarizado", name: "Bancarizado", image: "/clients/bancarizado.webp" },
  { id: "catoca", name: "Catoca", image: "/clients/catoca.webp" },
  { id: "coca-cola", name: "Coca-Cola", image: "/clients/coca-cola.webp" },
  { id: "ddm", name: "DDM", image: "/clients/ddm.webp" },
  { id: "dentalclinic", name: "Dental Clinic", image: "/clients/dentalclinic.webp" },
  {
    id: "embaixada-britanica",
    name: "Embaixada Britânica",
    image: "/clients/embaixada-britanica.webp",
  },
  { id: "inamet", name: "INAMET", image: "/clients/inamet.webp" },
  { id: "interscorp", name: "Interscorp", image: "/clients/interscorp.webp" },
  { id: "jmd", name: "JMD", image: "/clients/jmd.webp" },
  { id: "nadir-tati", name: "Nadir Tati", image: "/clients/nadir-tati.webp" },
  { id: "ripro", name: "Ripro", image: "/clients/ripro.webp" },
  { id: "sonils", name: "SONILS", image: "/clients/sonils.webp" },
  { id: "uniprev", name: "Uniprev", image: "/clients/uniprev.webp" },
];
