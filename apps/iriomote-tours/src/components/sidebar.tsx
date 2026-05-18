import { Sidebar as SharedSidebar, type SidebarCategoryNavItem } from "@repo/ui";
import { sidebarConfig } from "../lib/site-config";

export function Sidebar({ categoryNavItems }: { categoryNavItems: SidebarCategoryNavItem[] }) {
  return <SharedSidebar categoryNavItems={categoryNavItems} {...sidebarConfig} />;
}
