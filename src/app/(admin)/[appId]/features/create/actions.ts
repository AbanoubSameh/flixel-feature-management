import { FeatureFlagDataService } from "@/lib/prisma/data/feature/feature-data.service";
import { revalidatePath } from "next/cache";

export const getCreateFeatureAction = async (formData: FormData) => {
  "use server";
  const name = formData.get("name") as string;
  const applicationId = formData.get("applicationId") as string;
  if (name) {
    await FeatureFlagDataService.createItem({
      applicationId,
      name,
    });

    revalidatePath("/[appId]/features");
  }
};
