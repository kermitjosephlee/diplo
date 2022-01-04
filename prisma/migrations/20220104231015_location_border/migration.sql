/*
  Warnings:

  - You are about to drop the column `phaseId` on the `Turn` table. All the data in the column will be lost.
  - You are about to drop the `Phase` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `phase` to the `Turn` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PhaseEnum" AS ENUM ('BUILD', 'MOVEMENT', 'RETREAT');

-- CreateEnum
CREATE TYPE "SeasonEnum" AS ENUM ('FALL', 'SPRING', 'SUMMER', 'WINTER');

-- DropForeignKey
ALTER TABLE "Turn" DROP CONSTRAINT "Turn_phaseId_fkey";

-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "locationId" INTEGER;

-- AlterTable
ALTER TABLE "Turn" DROP COLUMN "phaseId",
ADD COLUMN     "phase" "PhaseEnum" NOT NULL;

-- DropTable
DROP TABLE "Phase";

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" "LocationAbbreviation" NOT NULL,
    "isMaritime" BOOLEAN NOT NULL,
    "isTerrestrial" BOOLEAN NOT NULL,
    "isLandLocked" BOOLEAN NOT NULL,
    "isSupplyCenter" BOOLEAN NOT NULL,
    "occupyingNationsId" INTEGER NOT NULL,
    "initialNation" "CountryName",
    "coasts" "Coast"[],

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_borderingLocations" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_borderingLocations_AB_unique" ON "_borderingLocations"("A", "B");

-- CreateIndex
CREATE INDEX "_borderingLocations_B_index" ON "_borderingLocations"("B");

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_borderingLocations" ADD FOREIGN KEY ("A") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_borderingLocations" ADD FOREIGN KEY ("B") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
