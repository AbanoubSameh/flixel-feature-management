import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/table";
import { FeatureFlagDataService } from "@/lib/prisma/data/feature/feature-data.service";
import { ColumnDef } from "@tanstack/react-table";
import { FeatureFlag } from "@prisma/client";

export default async function FeatureFlagListPage() {
  const data = await FeatureFlagDataService.getItems();
  return (
    <div className="flex flex-col">
      <div className=" flex justify-end mb-3">
        <Button>Create</Button>
      </div>
      <DataTable columns={featureFlagsTableColumns} data={data} />
    </div>
  );
}

const featureFlagsTableColumns: ColumnDef<FeatureFlag>[] = [
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "description",
    header: "description",
  },
  {
    accessorKey: "state",
    header: "state",
  },
];
