/*
  Warnings:

  - You are about to drop the column `day_of_the_week` on the `workouts` table. All the data in the column will be lost.
  - Added the required column `division` to the `workouts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Division" AS ENUM ('A', 'B', 'C', 'D', 'E', 'F', 'G');

-- AlterTable
ALTER TABLE "workouts" DROP COLUMN "day_of_the_week",
ADD COLUMN     "division" "Division" NOT NULL;

-- DropEnum
DROP TYPE "DayOfWeek";
