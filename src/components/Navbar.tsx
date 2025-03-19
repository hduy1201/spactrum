import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { ThemeSwitch } from "@/components/ThemeSwitch.tsx";
import { SideItems } from "@/config/site.tsx";
import { useLocation } from "react-router-dom";
import { NotificationIcon, TemptAvatar } from "@/components/Icons.tsx";

export const Navbar = () => {
  const location = useLocation();

  const currentRoute = SideItems.find(
    (route) => route.path === location.pathname,
  );
  const title = currentRoute ? currentRoute.name : "Spactrum";

  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      className="border-b border-background-400 justify-between"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <p className="font-semibold text-2xl cursor-default">{title}</p>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full gap-6"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex p-3 rounded-full hover:bg-background-300">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex p-3 rounded-full hover:bg-background-300">
          <NotificationIcon />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <TemptAvatar />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
