/*
  Warnings:

  - You are about to drop the column `initialNation` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `occupyingNation` on the `Location` table. All the data in the column will be lost.
  - Added the required column `initialNationId` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupyingNationId` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "initialNation",
DROP COLUMN "occupyingNation",
ADD COLUMN     "initialNationId" INTEGER NOT NULL,
ADD COLUMN     "occupyingNationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_initialNationId_fkey" FOREIGN KEY ("initialNationId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_occupyingNationId_fkey" FOREIGN KEY ("occupyingNationId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
