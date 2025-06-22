import { Category, Home, Icon } from "iconsax-react";

export interface SidebarItem {
  icon: Icon;
  text: string;
  route: string;
}

export const SidebarItems: SidebarItem[] = [
  {
    icon: Home,
    text: "Home",
    route: "/",
  },
  {
    icon: Category,
    text: "Category",
    route: "#",
  },
];
