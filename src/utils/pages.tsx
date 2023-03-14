import { Car, Gear, Package, Users, Wrench } from "phosphor-react";

export type IPages = "service" | "users";

export const pages = [
  {
    name: "Serviços",
    path: "/",
    icon: <Wrench size={32} />,
    text: <span>Serviços</span>,
    permission: "all",
  },
  {
    name: "Serviços",
    path: "/service",
    icon: <Wrench size={32} />,
    text: <span>Serviços</span>,
    permission: "none",
  },
  {
    name: "Produtos",
    path: "/products",
    icon: <Package size={32} />,
    text: <span>Produtos</span>,
    permission: "master",
  },
  {
    name: "Produtos",
    path: "/products/create",
    icon: <Package size={32} />,
    text: <span>Produtos</span>,
    permission: "none",
  },
  {
    name: "Clientes",
    path: "/clients",
    icon: <Users size={32} />,
    text: <span>Clientes</span>,
    permission: "master",
  },
  {
    name: "Clientes",
    path: "/clients/create",
    icon: <Users size={32} />,
    text: <span>Clientes</span>,
    permission: "none",
  },
  {
    name: "Veículos",
    path: "/vehicles",
    icon: <Car size={32} />,
    text: <span>Veículos</span>,
    permission: "master",
  },
  {
    name: "Ajustes",
    path: "/settings",
    icon: <Gear size={32} />,
    text: <span>Ajustes</span>,
    permission: "master",
  },
];
