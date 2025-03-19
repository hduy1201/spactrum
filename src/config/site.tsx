import { SideItemModel } from "@/models/side-item.ts";
import { Category2, Message, Profile } from "iconsax-react";

export const SideItems: SideItemModel[] = [
  {
    name: "Overview",
    path: "/",
    icon: <Category2 size="24" variant="Broken" className="min-w-6" />,
  },
  {
    name: "Message",
    path: "/message",
    icon: <Message size="24" variant="Broken" className="min-w-6" />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <Profile size="24" variant="Broken" className="min-w-6" />,
  },
];
