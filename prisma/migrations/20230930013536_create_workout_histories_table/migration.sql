-- CreateTable
CREATE TABLE "workout_histories" (
    "id" TEXT NOT NULL,
    "workoutId" TEXT NOT NULL,
    "amount_of_repetitions" INTEGER,
    "amount_of_series" INTEGER,
    "weight" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "workout_histories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "workout_histories" ADD CONSTRAINT "workout_histories_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "workouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
