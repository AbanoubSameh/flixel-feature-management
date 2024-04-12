import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/table";
import { FeatureFlagService } from "@/lib/prisma/data/feature-flags/feature-flags.data.service";
import { featureFlagsTableColumns } from "./feature-flags-table/columns";

export default async function FeatureFlagListPage() {
  const data = await FeatureFlagService.getFeatureFlags();
  return (
    <div className="flex flex-col">
      <div className=" flex justify-end mb-3">
        <Button>Create</Button>
      </div>
      <DataTable columns={featureFlagsTableColumns} data={data} />
    </div>
  );
}
