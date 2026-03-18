export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  website?: string;
}

export const persistecClients: ClientLogo[] = [
  { id: "1", name: "Coca-Cola", logoUrl: "/clients/coca-cola.jpg" },
  { id: "2", name: "Sonils", logoUrl: "/clients/sonils.jpg" },
  { id: "3", name: "INAMET", logoUrl: "/clients/inamet.jpg" },
  { id: "4", name: "Catoca", logoUrl: "/clients/catoca.jpg" },
  { id: "5", name: "Embaixada Britânica", logoUrl: "/clients/embaixada-britanica.jpg" },
  { id: "6", name: "Afrideca", logoUrl: "/clients/afrideca.jpg" },
  { id: "7", name: "AKM", logoUrl: "/clients/akm.jpg" },
  { id: "8", name: "Ambergol", logoUrl: "/clients/ambergol.jpg" },
  { id: "9", name: "Bancarizado", logoUrl: "/clients/bancarizado.jpg" },
  { id: "10", name: "JMD", logoUrl: "/clients/jmd.jpg" },
  { id: "11", name: "Nadir Tati", logoUrl: "/clients/nadir-tati.jpg" },
  { id: "12", name: "Uniprev", logoUrl: "/clients/uniprev.jpg" },
];
