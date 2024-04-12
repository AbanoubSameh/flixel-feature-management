import prisma from "@/lib/prisma";
import { FeatureFlag, Prisma } from "@prisma/client";
import { BaseDataService } from "../core/base-data.service";

export class FeatureFlagService extends BaseDataService<FeatureFlagService> {
  public async createFeatureFlag(data: Prisma.FeatureFlagCreateInput) {
    return await prisma.featureFlag.create({ data });
  }

  public async getFeatureFlags(): Promise<FeatureFlag[]> {
    return await prisma.featureFlag.findMany();
  }
}
