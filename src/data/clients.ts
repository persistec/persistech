export interface Client {
  id: string;
  name: string;
  image: string;
}

/** Logos live in `public/clients/`; display name + path kept in sync. */
export const persistecClients: Client[] = [
  { id: "afrideca", name: "Afrideca", image: "/clients/afrideca.jpg" },
  { id: "akm", name: "AKM", image: "/clients/akm.jpg" },
  { id: "ambergol", name: "Ambergol", image: "/clients/ambergol.jpg" },
  { id: "bancarizado", name: "Bancarizado", image: "/clients/bancarizado.jpg" },
  { id: "catoca", name: "Catoca", image: "/clients/catoca.jpg" },
  { id: "coca-cola", name: "Coca-Cola", image: "/clients/coca-cola.jpg" },
  { id: "ddm", name: "DDM", image: "/clients/ddm.jpg" },
  { id: "dentalclinic", name: "Dental Clinic", image: "/clients/dentalclinic.jpg" },
  {
    id: "embaixada-britanica",
    name: "Embaixada Britânica",
    image: "/clients/embaixada-britanica.jpg",
  },
  { id: "inamet", name: "INAMET", image: "/clients/inamet.jpg" },
  { id: "interscorp", name: "Interscorp", image: "/clients/interscorp.jpg" },
  { id: "jmd", name: "JMD", image: "/clients/jmd.jpg" },
  { id: "nadir-tati", name: "Nadir Tati", image: "/clients/nadir-tati.jpg" },
  { id: "ripro", name: "Ripro", image: "/clients/ripro.jpg" },
  { id: "sonils", name: "SONILS", image: "/clients/sonils.jpg" },
  { id: "uniprev", name: "Uniprev", image: "/clients/uniprev.jpg" },
];
