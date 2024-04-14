import { FaUsers } from "react-icons/fa";
import { GiToggles } from "react-icons/gi";
import { SidebarItem, SidebarItemComponent } from "./sidebar-item";

const sidebarItems: SidebarItem[] = [
  {
    text: "Features",
    icon: <GiToggles size="28" />,
    link: "/features/list",
  },
  { text: "Contacts", icon: <FaUsers size="28" />, link: "/users/list" },
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
