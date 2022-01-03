/*
  Warnings:

  - You are about to drop the column `countryId` on the `Player` table. All the data in the column will be lost.
  - Changed the type of `abbreviation` on the `Country` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `country` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CountryAbbreviation" AS ENUM ('ENG', 'FRA', 'GER', 'AUS', 'ITA', 'RUS', 'TUR');

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "abbreviation",
ADD COLUMN     "abbreviation" "CountryAbbreviation" NOT NULL;

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "playerId" INTEGER;

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "countryId",
ADD COLUMN     "country" "CountryAbbreviation" NOT NULL;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;
