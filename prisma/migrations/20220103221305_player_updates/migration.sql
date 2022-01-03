/*
  Warnings:

  - You are about to drop the column `country` on the `Player` table. All the data in the column will be lost.
  - Changed the type of `name` on the `Country` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `adjective` on the `Country` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `countryId` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CountryName" AS ENUM ('England', 'France', 'Germany', 'Austria', 'Italy', 'Russia', 'Turkey');

-- CreateEnum
CREATE TYPE "CountryAdjective" AS ENUM ('English', 'French', 'Germany', 'Austrian', 'Italian', 'Russian', 'Turkish');

-- CreateEnum
CREATE TYPE "Coast" AS ENUM ('NORTH', 'SOUTH', 'EAST');

-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('Maritime', 'Terrestrial');

-- CreateEnum
CREATE TYPE "LocationAbbreviation" AS ENUM ('NAO', 'NWG', 'BAR', 'STP', 'FIN', 'BOT', 'SWE', 'NWY', 'NTH', 'EDI', 'CLY', 'LVP', 'YOR', 'IRI', 'WAL', 'LON', 'ENG', 'BEL', 'HOL', 'HEL', 'DEN', 'SKA', 'BAL', 'LVN', 'MOS', 'WAR', 'PRU', 'BER', 'KIE', 'RUH', 'MUN', 'BUR', 'PIC', 'PAR', 'BRE', 'GAS', 'MAO', 'POR', 'SPA', 'MAR', 'LYO', 'PIE', 'TYR', 'VEN', 'TUS', 'ROM', 'APU', 'NAP', 'TYS', 'WES', 'NAF', 'TUN', 'ION', 'ADR', 'TRI', 'VIE', 'BOH', 'SIL', 'GAL', 'BUD', 'GRE', 'BUL', 'RUM', 'SEV', 'BLA', 'CON', 'ANK', 'ARM', 'SYR', 'EAS', 'AEG', 'SMY', 'ALB');

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "name",
ADD COLUMN     "name" "CountryName" NOT NULL,
DROP COLUMN "adjective",
ADD COLUMN     "adjective" "CountryAdjective" NOT NULL;

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "country",
ADD COLUMN     "countryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
