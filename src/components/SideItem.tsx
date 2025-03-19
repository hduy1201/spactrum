import { NavLink } from "react-router-dom";
import { SideItemProps } from "@/models/side-item.ts";

export default function SideItem({ item, isHovered }: SideItemProps) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) => {
        return `
          flex items-center justify-center lg:justify-start gap-3 lg:px-6 lg:py-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300
          ${isActive ? "bg-background-400 text-secondary-500 hover:bg-background-600 hover:text-secondary-700" : "text-secondary-300 hover:text-secondary-500 hover:bg-background-400"}
          ${isHovered ? "w-full" : "w-14 md:w-full"}
        `;
      }}
    >
      {item.icon}
      <span className={`${isHovered ? "block" : "hidden md:block"}`}>
        {item.name}
      </span>
    </NavLink>
  );
}
