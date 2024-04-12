import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/table";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@prisma/client";
import { UserDataService } from "@/lib/prisma/data/users/users-data.service";

export default async function UsersListPage() {
  const data: User[] = await UserDataService.getItems();
  return (
    <div className="flex flex-col">
      <DataTable columns={featureFlagsTableColumns} data={data} />
    </div>
  );
}

const featureFlagsTableColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "attributes",
    header: "attributes",
  },
];
