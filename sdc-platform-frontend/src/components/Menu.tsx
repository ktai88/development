import FlexRow from "src/components/FlexRow.js";
import ProfileMenu from "src/components/ProfileMenu.js";

export interface MenuProps {
  title: string;
  breadcrumbs?: { name: string; href: string }[];
}

const MenuBar = (_props: MenuProps) => {
  return (
    <FlexRow justify="between" customClass="pt-6 md:px-12 sm:px-4">
      <div>
        <img src="sdc-platform/sp-logo-text.svg" className="" />
      </div>
      <div>
        <ProfileMenu />
      </div>
    </FlexRow>
  );
};

export default MenuBar;
