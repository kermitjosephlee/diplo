/*
  Warnings:

  - You are about to drop the `_borderingLocations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_borderingLocations" DROP CONSTRAINT "_borderingLocations_A_fkey";

-- DropForeignKey
ALTER TABLE "_borderingLocations" DROP CONSTRAINT "_borderingLocations_B_fkey";

-- DropTable
DROP TABLE "_borderingLocations";

-- CreateTable
CREATE TABLE "Border" (
    "locationAId" INTEGER NOT NULL,
    "locationBId" INTEGER NOT NULL,

    CONSTRAINT "Border_pkey" PRIMARY KEY ("locationAId","locationBId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Border_locationAId_locationBId_key" ON "Border"("locationAId", "locationBId");

-- AddForeignKey
ALTER TABLE "Border" ADD CONSTRAINT "Border_locationAId_fkey" FOREIGN KEY ("locationAId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Border" ADD CONSTRAINT "Border_locationBId_fkey" FOREIGN KEY ("locationBId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
