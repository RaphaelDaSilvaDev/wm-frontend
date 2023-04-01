import { Wallet } from "@phosphor-icons/react";
import {
  Car,
  Gear,
  IdentificationBadge,
  IdentificationCard,
  Package,
  Tag,
  Users,
  Wrench,
} from "phosphor-react";

export type IPages = "service" | "users";

export const pages = [
  {
    name: "Serviços",
    path: "/service",
    icon: <Wrench size={32} />,
    text: <span>Serviços</span>,
    permission: "all",
  },
  {
    name: "Serviços",
    path: "/service/create",
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
    name: "Veículos",
    path: "/vehicles/create",
    icon: <Car size={32} />,
    text: <span>Veículos</span>,
    permission: "none",
  },
  {
    name: "Ajustes",
    icon: <Gear size={32} />,
    text: <span>Ajustes</span>,
    path: "/settings",
    permission: "master",
    options: [
      {
        name: "Dados da Conta",
        path: "/settings/account",
        icon: <IdentificationCard size={32} />,
        text: <span>Ajustes</span>,
        permission: "master",
      },
      {
        name: "Categorias",
        path: "/settings/categories",
        icon: <Tag size={32} />,
        text: <span>Ajustes</span>,
        permission: "master",
      },
      {
        name: "Categorias",
        path: "/settings/categories/create",
        icon: <Tag size={32} />,
        text: <span>Ajustes</span>,
        permission: "nones",
      },
      {
        name: "Funcionários",
        path: "/settings/employees",
        icon: <IdentificationBadge size={32} />,
        text: <span>Ajustes</span>,
        permission: "master",
      },
      {
        name: "Funcionários",
        path: "/settings/employees/create",
        icon: <IdentificationBadge size={32} />,
        text: <span>Ajustes</span>,
        permission: "none",
      },
      {
        name: "Pagamentos",
        path: "/settings/payments",
        icon: <Wallet size={32} />,
        text: <span>Ajustes</span>,
        permission: "master",
      },
    ],
  },
];
