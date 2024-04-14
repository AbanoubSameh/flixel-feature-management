import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/table";
import { ColumnDef } from "@tanstack/react-table";
import { Contact } from "@prisma/client";
import { ContactDataService } from "@/lib/prisma/data/contact/contact-data.service";

export default async function ContactsListPage() {
  const data: Contact[] = await ContactDataService.getItems();
  return (
    <div className="flex flex-col">
      <DataTable columns={featureFlagsTableColumns} data={data} />
    </div>
  );
}

const featureFlagsTableColumns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "attributes",
    header: "attributes",
  },
];
