import "server-only";

import prisma from "@/lib/prisma";
import { FeatureFlag, Prisma } from "@prisma/client";

export type CreateFeatureIN = Pick<
  Prisma.FeatureFlagCreateInput,
  "name" | "description"
> & {
  applicationId: string;
};
export class FeatureFlagDataService {
  public static async createItem({
    name,
    description,
    applicationId,
  }: CreateFeatureIN) {
    return await prisma.featureFlag.create({
      data: {
        name,
        description,
        Application: {
          connect: {
            id: applicationId,
          },
        },
      },
    });
  }

  public static async getItems(applicationId: string): Promise<FeatureFlag[]> {
    return await prisma.featureFlag.findMany({
      where: {
        Application: {
          id: applicationId,
        },
      },
    });
  }
}
