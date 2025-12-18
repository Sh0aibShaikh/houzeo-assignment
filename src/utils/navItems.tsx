import { NavItem } from "../types/navItem";
import { DownArrow } from "../components/Icons";

export const navItems: NavItem[] = [
  { key: "product", type: "button", label: "Product", icon: <DownArrow /> },
  { key: "how", type: "link", label: "How Houzeo Works", href: "#" },
  { key: "reviews", type: "link", label: "Reviews", href: "#" },
  { key: "buy", type: "button", label: "Buy", icon: <DownArrow /> },
  { key: "sell", type: "button", label: "Sell", icon: <DownArrow /> },
  { key: "pricing", type: "link", label: "Pricing", href: "#" },
  { key: "resources", type: "button", label: "Resources", icon: <DownArrow /> },
  { key: "signin", type: "link", label: "Sign In", href: "#" },
];
