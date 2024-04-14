/*
  Warnings:

  - Made the column `applicationId` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `applicationId` on table `FeatureFlag` required. This step will fail if there are existing NULL values in that column.
  - Made the column `featureFlagId` on table `Schema` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "FeatureFlag" DROP CONSTRAINT "FeatureFlag_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "Schema" DROP CONSTRAINT "Schema_featureFlagId_fkey";

-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "applicationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "FeatureFlag" ALTER COLUMN "applicationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Schema" ALTER COLUMN "featureFlagId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "FeatureFlag" ADD CONSTRAINT "FeatureFlag_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schema" ADD CONSTRAINT "Schema_featureFlagId_fkey" FOREIGN KEY ("featureFlagId") REFERENCES "FeatureFlag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
