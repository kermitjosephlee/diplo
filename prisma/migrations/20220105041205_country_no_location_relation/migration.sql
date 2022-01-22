/*
  Warnings:

  - You are about to drop the column `locationId` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `occupyingNationsId` on the `Location` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_locationId_fkey";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "locationId";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "occupyingNationsId",
ADD COLUMN     "occupyingNation" "CountryAbbreviation";
