import { useState } from "react";
import { Logo } from "@/components/Icons.tsx";
import SideItem from "@/components/SideItem.tsx";
import { SideItems } from "@/config/site.tsx";

export default function SideBar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-full border-r border-background-400 flex flex-col xl:px-6 xl:py-8 px-3 py-4 gap-10 transition-all duration-300
      ${isHovered ? "w-64" : "w-20 md:w-64"} `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo & Brand */}
      <div className="flex items-center gap-3 lg:justify-start justify-center">
        <Logo />
        <span
          className={`font-semibold text-3xl transition-all text-foreground ${isHovered ? "block" : "hidden md:block"}`}
        >
          Spactrum
        </span>
      </div>

      {/* SideBar Menu */}
      <nav className="flex flex-col gap-2">
        {SideItems.map((item) => (
          <SideItem key={item.path} item={item} isHovered={isHovered} />
        ))}
      </nav>
    </div>
  );
}
