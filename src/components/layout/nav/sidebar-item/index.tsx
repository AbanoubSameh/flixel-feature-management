"use client";
import Link from "next/link";
import styles from "./styles.module.css";

import { usePathname } from "next/navigation";
import { ReactElement } from "react";

export interface SidebarItem {
  text: string;
  link: string;
  icon: ReactElement;
}

export function SidebarItemComponent({
  sidebarItem,
}: {
  sidebarItem: SidebarItem;
}) {
  const pathname = usePathname();
  return (
    <Link
      className={`${styles["sidebar-icon"]} group ${pathname === sidebarItem?.link ? styles["sidebar-icon-active"] : ""}`}
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
