/*
  Warnings:

  - The values [Germany] on the enum `CountryAdjective` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `uuid` on the `Game` table. All the data in the column will be lost.
  - The `initialNation` column on the `Location` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `uuid` on the `User` table. All the data in the column will be lost.
  - Made the column `locationId` on table `Country` required. This step will fail if there are existing NULL values in that column.
  - Made the column `playerId` on table `Order` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `season` to the `Turn` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CountryAdjective_new" AS ENUM ('English', 'French', 'German', 'Austrian', 'Italian', 'Russian', 'Turkish');
ALTER TABLE "Country" ALTER COLUMN "adjective" TYPE "CountryAdjective_new" USING ("adjective"::text::"CountryAdjective_new");
ALTER TYPE "CountryAdjective" RENAME TO "CountryAdjective_old";
ALTER TYPE "CountryAdjective_new" RENAME TO "CountryAdjective";
DROP TYPE "CountryAdjective_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_playerId_fkey";

-- DropIndex
DROP INDEX "Game_uuid_key";

-- DropIndex
DROP INDEX "User_uuid_key";

-- AlterTable
ALTER TABLE "Country" ALTER COLUMN "locationId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "uuid";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "initialNation",
ADD COLUMN     "initialNation" "CountryAbbreviation";

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "playerId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Turn" ADD COLUMN     "season" "SeasonEnum" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "uuid";

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
