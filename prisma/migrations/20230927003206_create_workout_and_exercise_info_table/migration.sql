-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- CreateTable
CREATE TABLE "workouts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "exercise_info_id" TEXT NOT NULL,
    "amount_of_repetitions" INTEGER NOT NULL,
    "amount_of_series" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "day_of_the_week" "DayOfWeek" NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "workouts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercise_infos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "grouping" TEXT NOT NULL,

    CONSTRAINT "exercise_infos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_exercise_info_id_fkey" FOREIGN KEY ("exercise_info_id") REFERENCES "exercise_infos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
