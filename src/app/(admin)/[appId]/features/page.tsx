import DataTable from "@/components/ui/table";
import { FeatureFlagDataService } from "@/lib/prisma/data/feature/feature-data.service";
import { ColumnDef } from "@tanstack/react-table";
import { FeatureFlag } from "@prisma/client";
import CreateFeatureComponent from "./create/form";
import { UserApplicationDataService } from "@/lib/prisma/data/application/application-data.service";
import { redirect } from "next/navigation";

export default async function FeatureFlagListPage() {
  const applicationId = (
    await UserApplicationDataService.instance.getActiveApplication()
  )?.id;

  if (!applicationId) {
    redirect("/not-found");
  }

  const data = await FeatureFlagDataService.getItems(applicationId);
  return (
    <div className="flex flex-col">
      <h1 className=" text-gray-600 font-bold text-xl mb-2">Features</h1>
      <div className="rounded-xl bg-white p-4 flex mb-3 flex-col">
        <CreateFeatureComponent applicationId={applicationId} />
      </div>
      <div className="rounded-xl bg-white p-4">
        <DataTable columns={featureFlagsTableColumns} data={data} />
      </div>
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
