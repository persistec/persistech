export interface Client {
  id: string;
  name: string;
}

export const persistecClients: Client[] = [
  { id: "interscorp", name: "Interscorp, Lda" },
  { id: "southco", name: "SOUTHCO" },
  { id: "tsco", name: "TSCO - Tecnologias Consultorias e Sistemas, S.A" },
  { id: "siac", name: "SIAC - Serviço Integrado de Atendimento Ao Cidadão" },
  { id: "ddm", name: "DDM - Distribuidora de Mercadorias" },
  { id: "ucan", name: "Universidade Católica de Angola" },
  {
    id: "fundecit",
    name: "Fundação para Desenvolvimento Científico e Tecnológico (FUNDECIT)",
  },
  { id: "saesp-bai", name: "S.A de Ensino Superior-SAESP-BAI" },
  { id: "catoca", name: "SOCIEDADE MINEIRA DE CATOCA LDA" },
  { id: "africell", name: "Africell" },
  { id: "biocom", name: "BIOCOM – Companhia de Bioenergia de Angola Limitada" },
  { id: "sonils", name: "SONILS LD" },
  { id: "odonto-excellence", name: "Odonto Excellence" },
];
