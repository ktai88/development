import { ApplicationLayout, IconName, Sidebar, SidebarItem, SidebarTop } from "@astron-sdc/design-system";
import { ReactNode } from "react";
import MenuBar, { MenuProps } from "src/components/Menu";

interface LayoutProps extends MenuProps {
  children?: ReactNode;
  isWithFooter?: boolean;
}

const sideBarTop: SidebarTop = {
  icon: "Apt" as IconName,
  iconCustomClass: "w-[24px]",
  text: "SP",
  textLong: "Science Platform",
  linkTo: "/",
};

const Layout = ({ title, children, isWithFooter = false }: LayoutProps) => {
  const items: SidebarItem[] = [
    {
      icon: "File",
      linkTo: "/projects",
      text: "Projects",
    },
  ];

  let className = `md:px-12 sm:px-4`;
  if (isWithFooter) {
    className += " !h-dvh justify-between";
  }
  return (
    <ApplicationLayout
      side={<Sidebar items={items} top={sideBarTop} />}
      top={<MenuBar title={title} />}
      content={<div className={className}>{children}</div>}
    />
  );
};

export default Layout;
