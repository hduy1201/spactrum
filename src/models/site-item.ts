import { JSX } from "react";

export interface SideItemModel {
  name: string;
  path: string;
  icon: JSX.Element;
}

export interface SideItemProps {
  item: SideItemModel;
  isHovered: boolean;
}
