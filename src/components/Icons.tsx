import * as React from "react";
import { Image } from "@heroui/image";

import { IconSvgProps } from "@/types";
import SpactrumIcon from "@/assets/3dcube.svg";
import {
  ArrowSwapVertical,
  Call,
  Edit2,
  Eye,
  EyeSlash,
  LogoutCurve,
  Moon,
  More,
  Notification1,
  People,
  SearchNormal,
  Sun1,
  Video,
} from "iconsax-react";

export const Logo: React.FC<IconSvgProps> = ({ size = 40 }) => (
  <Image height={size} src={SpactrumIcon} width={size} className="min-w-10" />
);

export const MoonFilledIcon = ({ size = 24 }: IconSvgProps) => (
  <Sun1 size={size} variant="Broken" className="min-w-6" />
);

export const SunFilledIcon = ({ size = 24 }: IconSvgProps) => (
  <Moon size={size} variant="Broken" className="min-w-6" />
);

export const NotificationIcon = ({ size = 24 }: IconSvgProps) => (
  <Notification1
    size={size}
    variant="Broken"
    className="min-w-6 transition-opacity cursor-pointer text-secondary-300"
  />
);

export const SearchIcon = ({ size = 24 }: IconSvgProps) => (
  <SearchNormal
    size={size}
    variant="Broken"
    className="min-w-6 pointer-events-none flex-shrink-0"
  />
);

export const VideoIcon = ({ size = 24 }: IconSvgProps) => (
  <Video
    size={size}
    variant="Broken"
    className="min-w-6 pointer-events-none flex-shrink-0 text-secondary-300"
  />
);

export const CallIcon = ({ size = 24 }: IconSvgProps) => (
  <Call
    size={size}
    variant="Broken"
    className="min-w-6 pointer-events-none flex-shrink-0 text-secondary-300"
  />
);

export const GroupIcon = ({ size = 24 }: IconSvgProps) => (
  <People
    size={size}
    variant="Broken"
    className="min-w-6 pointer-events-none flex-shrink-0 text-secondary-300"
  />
);

export const EditIcon = ({ size = 24 }: IconSvgProps) => (
  <Edit2
    size={size}
    variant="Broken"
    className="min-w-6 pointer-events-none flex-shrink-0"
  />
);

export const SelectorIcon = ({ size = 16 }: IconSvgProps) => (
  <ArrowSwapVertical
    size={size}
    variant="Broken"
    className="min-w-6 pointer-events-none flex-shrink-0"
  />
);

export const MoreIcon = ({ size = 24 }: IconSvgProps) => (
  <More
    size={size}
    variant="Broken"
    className="min-w-6 pointer-events-none flex-shrink-0 text-secondary-300"
  />
);

export const EyeIcon = ({ size = 24 }: IconSvgProps) => (
  <Eye
    size={size}
    variant="Broken"
    className="min-w-6 pointer-events-none flex-shrink-0 text-secondary-300"
  />
);

export const EyeSlashIcon = ({ size = 24 }: IconSvgProps) => (
  <EyeSlash
    size={size}
    variant="Broken"
    className="min-w-6 pointer-events-none flex-shrink-0 text-secondary-300"
  />
);

export const LogoutIcon = ({ size = 24 }: IconSvgProps) => (
  <LogoutCurve
    size={size}
    variant="Broken"
    className="min-w-6 pointer-events-none flex-shrink-0"
  />
);
