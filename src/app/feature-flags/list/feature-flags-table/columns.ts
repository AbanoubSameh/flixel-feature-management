import { FeatureFlag } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const featureFlagsTableColumns: ColumnDef<FeatureFlag>[] = [
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
