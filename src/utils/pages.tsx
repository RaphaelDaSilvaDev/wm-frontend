import { Users, Wrench } from "phosphor-react";

export type IPages = "service" | "users";

export const pages = [
  {
    name: "Serviços",
    path: "/",
    icon: <Wrench size={32} />,
    text: <span>Serviços</span>,
  },
  {
    name: "Usuários",
    path: "/users",
    icon: <Users size={32} />,
    text: <span>Usuários</span>,
  },
];
