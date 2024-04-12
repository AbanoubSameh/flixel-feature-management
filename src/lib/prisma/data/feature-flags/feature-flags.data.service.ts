import prisma from "@/lib/prisma";
import { FeatureFlag, Prisma } from "@prisma/client";
export class FeatureFlagService {
  public static async createFeatureFlag(data: Prisma.FeatureFlagCreateInput) {
    return await prisma.featureFlag.create({ data });
  }

  public static async getFeatureFlags(): Promise<FeatureFlag[]> {
    return await prisma.featureFlag.findMany();
  }
}
