export const status: {
  [key: string | number]: {
    color: string;
    name: string;
  };
} = {
  pending: { color: "#C4D0E0", name: "Pendente" },
  working: { color: "#D00000", name: "Em Andamento" },
  finished: { color: "#FFFF3F", name: "Finalizado" },
  delivered: { color: "#AACC00", name: "Entregue" },
};
