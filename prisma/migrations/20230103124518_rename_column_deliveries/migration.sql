/*
 Warnings:
 
 - You are about to drop the column `id_develiryman` on the `deliveries` table. All the data in the column will be lost.
 
 */
-- DropForeignKey
ALTER TABLE
  "deliveries" DROP CONSTRAINT "deliveries_id_develiryman_fkey";

-- AlterTable
ALTER TABLE
  "deliveries" DROP COLUMN "id_develiryman",
ADD
  COLUMN "id_deliveryman" TEXT;

-- AddForeignKey
ALTER TABLE
  "deliveries"
ADD
  CONSTRAINT "deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliveryman"("id") ON DELETE
SET
  NULL ON UPDATE CASCADE;