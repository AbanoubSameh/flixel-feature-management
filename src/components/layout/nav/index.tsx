import { FaUsers } from "react-icons/fa";
import { GiToggles } from "react-icons/gi";
import { SidebarItem, SidebarItemComponent } from "./sidebar-item";
import { RxDashboard } from "react-icons/rx";

export default function NavComponent({ appId }: { appId: string }) {
  const sidebarItems: SidebarItem[] = [
    {
      text: "Dashboard",
      icon: <RxDashboard size="28" />,
      link: `/dashboard`,
    },
    {
      text: "Features",
      icon: <GiToggles size="28" />,
      link: `/${appId}/features/list`,
    },
    {
      text: "Contacts",
      icon: <FaUsers size="28" />,
      link: `/${appId}/contacts/list`,
    },
  ];
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
