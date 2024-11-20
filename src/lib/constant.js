


import { History, BarChart2, Users,Folder,Book, CreditCard, UsersRoundIcon, ShoppingBag, LayoutDashboard, MenuSquare } from "lucide-react";


export const navigationItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/Dashboard" },
  { name: "Orders", icon: ShoppingBag, href: "/Dashboard/Info" },
  { name: "Analytics", icon: BarChart2, href: "#" },
  { name: "Customer", icon: UsersRoundIcon, href: "/Dashboard/Apply-visa" },
  { name: "Menu", icon: MenuSquare, href: "/Dashboard/application-history" }
];

export const secondaryNavigation = [
  { name: "Website redesign", href: "/website-redesign" },
  { name: "GraphQL API", href: "/graphql-api" },
  { name: "Customer migration guides", href: "/customer-migration" },
  { name: "Profit sharing program", href: "/profit-sharing" },
];