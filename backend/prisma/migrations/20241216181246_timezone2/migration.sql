-- AlterTable
ALTER TABLE "BoardInspection" ALTER COLUMN "date" SET DATA TYPE TIMESTAMPTZ(2),
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ(2);

-- AlterTable
ALTER TABLE "BoardInventory" ALTER COLUMN "date" SET DATA TYPE TIMESTAMPTZ(2),
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ(2);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ(2);
