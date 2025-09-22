import { FaHome, FaShoppingCart } from "react-icons/fa";
import { type IconType } from "react-icons";
import { FaUser } from "react-icons/fa6";

export interface Tab {
  label: string;
  icon: IconType;
}

export const MOBILE_TABS: Tab[] = [
  { label: "Home", icon: FaHome },
  { label: "Cart", icon: FaShoppingCart },
  { label: "Profile", icon: FaUser },
];
