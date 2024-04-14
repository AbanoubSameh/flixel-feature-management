/*
  Warnings:

  - You are about to drop the column `accountId` on the `Attribute` table. All the data in the column will be lost.
  - You are about to drop the column `accountId` on the `Environment` table. All the data in the column will be lost.
  - You are about to drop the column `accountId` on the `FeatureFlag` table. All the data in the column will be lost.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[key,applicationId]` on the table `Attribute` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,applicationId]` on the table `Environment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `applicationId` to the `Environment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attribute" DROP CONSTRAINT "Attribute_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Environment" DROP CONSTRAINT "Environment_accountId_fkey";

-- DropForeignKey
ALTER TABLE "FeatureFlag" DROP CONSTRAINT "FeatureFlag_accountId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_accountId_fkey";

-- DropIndex
DROP INDEX "Attribute_key_accountId_key";

-- DropIndex
DROP INDEX "Environment_name_accountId_key";

-- AlterTable
ALTER TABLE "Attribute" DROP COLUMN "accountId",
ADD COLUMN     "applicationId" TEXT;

-- AlterTable
ALTER TABLE "Environment" DROP COLUMN "accountId",
ADD COLUMN     "applicationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "FeatureFlag" DROP COLUMN "accountId",
ADD COLUMN     "applicationId" TEXT;

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "attributes" JSONB NOT NULL,
    "applicationId" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Attribute_key_applicationId_key" ON "Attribute"("key", "applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "Environment_name_applicationId_key" ON "Environment"("name", "applicationId");

-- AddForeignKey
ALTER TABLE "FeatureFlag" ADD CONSTRAINT "FeatureFlag_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attribute" ADD CONSTRAINT "Attribute_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Environment" ADD CONSTRAINT "Environment_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
