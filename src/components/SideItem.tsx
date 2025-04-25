import { NavLink } from "react-router-dom";
import { SideItemProps } from "@/models/site-item";

export default function SideItem({ item, isHovered }: SideItemProps) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) => `
        flex items-center gap-3 lg:px-6 lg:py-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300
        ${isActive ? "bg-background-400 text-secondary-500 hover:bg-background-600 hover:text-secondary-700" : "text-secondary-300 hover:text-secondary-500 hover:bg-background-400"}
        ${isHovered ? "w-full justify-start" : "w-14 md:w-full md:justify-start justify-center"}
        focus:outline-none focus:ring-2 focus:ring-secondary-500
      `}
      aria-label={item.name}
    >
      {item.icon}
      <span
        className={`${isHovered ? "block" : "hidden md:block"} transition-all`}
      >
        {item.name}
      </span>
    </NavLink>
  );
}
