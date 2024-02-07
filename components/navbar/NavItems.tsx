import { NAV_ITEMS } from "@/constants";

import NavItem from "./NavItem";
import NavItemWithDropdown from "./NavItemWithDropdown";

const NavItems: React.FC = () => {



  return (
    <ul
      className="hidden gap-x-0 text-sm text-white md:flex lg:text-base items-center h-full"
    >
      {NAV_ITEMS.map((item) => {
        if (item.label === "Services") {
          return (
            <NavItemWithDropdown
              key={item.label}
              navItem={item}
            />
          );
        }
        return (
          <NavItem
            key={item.label}
            navItem={item}
          />
        );
      })}
    </ul>
  );
};

export default NavItems;
