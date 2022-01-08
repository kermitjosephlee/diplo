/*
  Warnings:

  - You are about to drop the column `locationId` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `occupyingNationsId` on the `Location` table. All the data in the column will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "LocationAbbreviation" ADD VALUE 'SER';
ALTER TYPE "LocationAbbreviation" ADD VALUE 'UKR';

-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_locationId_fkey";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "locationId";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "occupyingNationsId",
ADD COLUMN     "occupyingNation" "CountryAbbreviation";
