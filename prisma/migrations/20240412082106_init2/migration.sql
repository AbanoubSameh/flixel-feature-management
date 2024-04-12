/*
  Warnings:

  - The primary key for the `Attribute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Attribute` table. All the data in the column will be lost.
  - You are about to drop the column `query` on the `FeatureFlag` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[key,accountId]` on the table `Attribute` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,accountId]` on the table `Environment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "FeatureFlagState" AS ENUM ('ACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "SchemaType" AS ENUM ('DYNAMIC', 'STATIC');

-- DropIndex
DROP INDEX "Environment_name_key";

-- AlterTable
ALTER TABLE "Attribute" DROP CONSTRAINT "Attribute_pkey",
DROP COLUMN "id",
ADD COLUMN     "accountId" TEXT,
ADD CONSTRAINT "Attribute_pkey" PRIMARY KEY ("key");

-- AlterTable
ALTER TABLE "FeatureFlag" DROP COLUMN "query",
ADD COLUMN     "state" "FeatureFlagState" NOT NULL DEFAULT 'ACTIVE';

-- CreateTable
CREATE TABLE "Schema" (
    "id" TEXT NOT NULL,
    "type" "SchemaType" NOT NULL,
    "value" TEXT NOT NULL,
    "featureFlagId" TEXT,
    "environmentName" TEXT NOT NULL,

    CONSTRAINT "Schema_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attribute_key_accountId_key" ON "Attribute"("key", "accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Environment_name_accountId_key" ON "Environment"("name", "accountId");

-- AddForeignKey
ALTER TABLE "Schema" ADD CONSTRAINT "Schema_environmentName_fkey" FOREIGN KEY ("environmentName") REFERENCES "Environment"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schema" ADD CONSTRAINT "Schema_featureFlagId_fkey" FOREIGN KEY ("featureFlagId") REFERENCES "FeatureFlag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
