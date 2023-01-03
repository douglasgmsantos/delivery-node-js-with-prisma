-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_develiryman_fkey";

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "id_develiryman" DROP NOT NULL,
ALTER COLUMN "end_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_develiryman_fkey" FOREIGN KEY ("id_develiryman") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
