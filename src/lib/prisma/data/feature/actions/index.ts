"use server";
import {
  CreateFeatureIN,
  FeatureFlagDataService,
} from "@/lib/prisma/data/feature/feature-data.service";
import { createFeatureSchema } from "../validators";
import { FormActionState } from "../../shared/form-action-base";
import { FeatureFlag } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { error } from "console";

export const createFeatureAction = async (
  _formState: FormActionState<CreateFeatureIN>,
  formData: FormData,
): Promise<FormActionState<CreateFeatureIN>> => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const validator = createFeatureSchema.safeParse({
    name: formData.get("name"),
    applicationId: formData.get("applicationId"),
    description: formData.get("description"),
  });

  if (validator.error) {
    return { formErrors: validator.error.formErrors.fieldErrors };
  }

  try {
    const result = await FeatureFlagDataService.createItem(validator.data);
    revalidatePath("/");
    return {
      result,
    };
  } catch (error) {
    return {
      error: "Failed to create the new feature toggle, please try again later",
    };
  }
};
