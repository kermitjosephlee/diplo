/*
  Warnings:

  - You are about to drop the column `coasts` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `coast` on the `Order` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CoastEnum" AS ENUM ('NORTH', 'SOUTH', 'EAST');

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "coasts";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "coast",
ADD COLUMN     "coastId" INTEGER;

-- DropEnum
DROP TYPE "Coast";

-- CreateTable
CREATE TABLE "Coast" (
    "id" SERIAL NOT NULL,
    "locationId" INTEGER NOT NULL,
    "coastName" "CoastEnum" NOT NULL,

    CONSTRAINT "Coast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CoastLocation" (
    "id" SERIAL NOT NULL,
    "coastId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "CoastLocation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_coastId_fkey" FOREIGN KEY ("coastId") REFERENCES "Coast"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coast" ADD CONSTRAINT "Coast_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoastLocation" ADD CONSTRAINT "CoastLocation_coastId_fkey" FOREIGN KEY ("coastId") REFERENCES "Coast"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoastLocation" ADD CONSTRAINT "CoastLocation_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
