/*
  Warnings:

  - Changed the type of `added` on the `Files` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Files" DROP COLUMN "added",
ADD COLUMN     "added" TIMESTAMP(3) NOT NULL;
