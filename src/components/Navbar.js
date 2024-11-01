import React from "react";

import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import carLogo from "../assets/carlogo.png";



const NavBarWrapper = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Vehicles",
      link: "/Vehicles",
    },
    {
      label: "Details",
      link: "/Details",
    },
    {
      label: "About Us",
      link: "/About Us",
    },
    {
      label: "Contact Us",
      link: "/Contact Us",
    },
  ];

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <div className="flex items-center gap-3 sm:hidden">
            <Image src={carLogo} alt="carlogo" />
            <p>Car Rental</p>
        </div>

        <NavbarContent className="hidden sm:flex gap-4 w-full" justify="center">
          <div className="flex justify-between w-full items-center">
          <div className="flex items-center gap-3">
            <Image src={carLogo} />
            <p>Car Rental</p>
          </div>
          <div className="flex gap-10">
          <NavbarItem isActive={pathname === "/" ? true : false}>
            <Link color={pathname === "/" ? "primary" : "foreground"} href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/stocks" ? true : false}>
            <Link
              color={pathname === "/stocks" ? "primary" : "foreground"}
              href="/stocks"
              aria-current="page"
            >
              Vehicles
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/bankbalance" ? true : false}>
            <Link
              color={pathname === "/bankbalance" ? "primary" : "foreground"}
              href="/bankbalance"
              aria-current="page"
            >
              Details
            </Link>
          </NavbarItem>
          <NavbarItem
            isActive={pathname === "/stocktransaction" ? true : false}
          >
            <Link
              color={
                pathname === "/stocktransaction" ? "primary" : "foreground"
              }
              href="/stocktransaction"
            >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem isActive={pathname === "/dailyexpenses" ? true : false}>
            <Link
              color={pathname === "/dailyexpenses" ? "primary" : "foreground"}
              href="/dailyexpenses"
            >
              Contact Us
            </Link>
          </NavbarItem>
          </div>
          <div>
            <p>Need Help?</p>
            <p>+91 8249162635</p>
          </div>
          </div>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              isActive={pathname === item.link ? true : false}
            >
              <Link
                className="w-full"
                color={pathname === item.link ? "primary" : "foreground"}
                href={item.link}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavBarWrapper;