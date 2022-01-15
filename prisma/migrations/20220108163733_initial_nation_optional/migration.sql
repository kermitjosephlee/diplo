-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_initialNationId_fkey";

-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_occupyingNationId_fkey";

-- AlterTable
ALTER TABLE "Location" ALTER COLUMN "initialNationId" DROP NOT NULL,
ALTER COLUMN "occupyingNationId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_initialNationId_fkey" FOREIGN KEY ("initialNationId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_occupyingNationId_fkey" FOREIGN KEY ("occupyingNationId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;
