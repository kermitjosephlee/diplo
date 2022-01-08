/*
  Warnings:

  - You are about to drop the column `mapId` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `mapId` on the `Turn` table. All the data in the column will be lost.
  - You are about to drop the `Map` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `svg` to the `Turn` table without a default value. This is not possible if the table is not empty.
  - Made the column `gameId` on table `Turn` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Map" DROP CONSTRAINT "Map_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Turn" DROP CONSTRAINT "Turn_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Turn" DROP CONSTRAINT "Turn_mapId_fkey";

-- DropIndex
DROP INDEX "Game_mapId_key";

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "mapId";

-- AlterTable
ALTER TABLE "Turn" DROP COLUMN "mapId",
ADD COLUMN     "svg" TEXT NOT NULL,
ALTER COLUMN "gameId" SET NOT NULL;

-- DropTable
DROP TABLE "Map";

-- AddForeignKey
ALTER TABLE "Turn" ADD CONSTRAINT "Turn_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_originId_fkey" FOREIGN KEY ("originId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
