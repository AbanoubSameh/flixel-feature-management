import "server-only";

import prisma from "@/lib/prisma";
import { FeatureFlag, Prisma } from "@prisma/client";
export class FeatureFlagDataService {
  public static async createItem(data: Prisma.FeatureFlagCreateInput) {
    return await prisma.featureFlag.create({ data });
  }

  public static async getItems(): Promise<FeatureFlag[]> {
    return await prisma.featureFlag.findMany();
  }
}
