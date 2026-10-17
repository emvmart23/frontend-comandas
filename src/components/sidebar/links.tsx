import {
  AlarmClock,
  Boxes,
  CirclePlus,
  ClipboardMinus,
  ClipboardPlus,
  Combine,
  Fingerprint,
  HandCoins,
  LayoutDashboard,
  List,
  ListOrdered,
  PackageOpen,
  Settings,
  ShoppingBasket,
  SlidersHorizontal,
  SquareArrowOutUpRight,
  User,
  Users,
  Wine,
} from "lucide-react";

const sizes = {
  menu: 22,
  subMenu: 17,
};

export const links = [
  {
    icon: <LayoutDashboard size={sizes.menu} />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <ShoppingBasket size={sizes.menu} />,
    title: "Productos",
    path: "/products",
  },
  {
    icon: <ListOrdered size={sizes.menu} />,
    title: "Pedidos",
    childrens: [
      {
        icon: <CirclePlus size={sizes.subMenu} />,
        title: "Generar pedido",
        path: "/orders/create",
      },
      {
        icon: <List size={sizes.subMenu} />,
        title: "Lista de pedidos",
        path: "/orders",
      },
    ],
  },
  {
    icon: <Users size={sizes.menu} />,
    title: "Clientes",
    path: "/customers",
  },
  {
    icon: <SlidersHorizontal size={sizes.menu} />,
    title: "Categorías",
    path: "/categories",
  },
  {
    icon: <Settings size={sizes.menu} />,
    title: "Configuración",
    childrens: [
      {
        icon: <User size={sizes.subMenu} />,
        title: "Usuarios",
        path: "/users",
      },
      {
        icon: <Fingerprint size={sizes.subMenu} />,
        title: "Roles",
        path: "/settings/roles",
      },
      {
        icon: <Combine size={sizes.subMenu} />,
        title: "Unidad",
        path: "/settings/units",
      },
      {
        icon: <HandCoins size={sizes.subMenu} />,
        title: "Métodos de pago",
        path: "/settings/payment-methods",
      },
    ],
  },
  {
    icon: <AlarmClock size={sizes.menu} />,
    title: "Asistencia",
    path: "/attendance",
  },
  {
    icon: <Boxes size={sizes.menu} />,
    title: "Cajero",
    childrens: [
      {
        icon: <SquareArrowOutUpRight size={sizes.subMenu} />,
        title: "Apertura de caja",
        path: "/boxes/open",
      },
      {
        icon: <PackageOpen size={sizes.subMenu} />,
        title: "Cajas",
        path: "/boxes",
      },
    ],
  },
  {
    icon: <Wine size={sizes.menu} />,
    title: "Barman",
    childrens: [
      {
        icon: <Fingerprint size={sizes.subMenu} />,
        title: "Atención de pedidos",
        path: "/bartender/pending-orders",
      },
      {
        icon: <Combine size={sizes.subMenu} />,
        title: "Pedidos atendidos",
        path: "/bartender/served-orders",
      },
    ],
  },
  {
    icon: <ClipboardMinus size={sizes.menu} />,
    title: "Reportes",
    childrens: [
      {
        icon: <ClipboardPlus size={sizes.subMenu} />,
        title: "Anfitrionas",
        path: "/reports/hostesses",
      },
    ],
  },
];