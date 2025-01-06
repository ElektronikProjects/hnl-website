import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { icons } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getIcon(icon: string) {
  const LucideIcon = Object.keys(icons).includes(icon)
    ? //@ts-expect-error The icons array has all the icons
      icons[icon]
    : icons["OctagonX"];
  return LucideIcon;
}
