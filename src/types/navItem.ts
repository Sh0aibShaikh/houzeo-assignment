export type NavItem = {
  key: string;
  type: "button" | "link";
  label: string;
  icon?: React.ReactNode;
  href?: string;
};
