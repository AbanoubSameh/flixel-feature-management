import styles from "./styles.module.css";

import Link from "next/link";
import { ReactElement } from "react";
import { FaUsers } from "react-icons/fa";
import { GiToggles } from "react-icons/gi";

export interface SidebarItem {
  text: string;
  link: string;
  icon: ReactElement;
}

const sidebarItems: SidebarItem[] = [
  {
    text: "Feature flags",
    icon: <GiToggles size="28" />,
    link: "/feature-flags/list",
  },
  { text: "Contacts", icon: <FaUsers size="28" />, link: "/" },
];

export default function NavComponent() {
  return (
    <nav className="h-full shadow-sm bg-gray-600">
      <ul className="flex gap-3 flex-col p-2 pt-4">
        {sidebarItems.map((sidebarItem) => (
          <li key={sidebarItem.link}>
            <SidebarItemComponent sidebarItem={sidebarItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SidebarItemComponent({
  sidebarItem,
}: {
  sidebarItem: SidebarItem;
}) {
  return (
    <Link
      className={`${styles["sidebar-icon"]} group`}
      href={sidebarItem?.link}
    >
      {sidebarItem.icon}
      <span className={`${styles["sidebar-tooltip"]} group-hover:scale-100`}>
        {" "}
        {sidebarItem.text}{" "}
      </span>
    </Link>
  );
}
