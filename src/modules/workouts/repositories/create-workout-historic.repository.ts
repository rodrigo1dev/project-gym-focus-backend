import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/shared/services';
import { createWorkoutHistoriesDTO } from '../dtos/create-workout-histories.dto';

@Injectable()
export class CreateWorkoutHistoriesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(data: createWorkoutHistoriesDTO): Promise<void> {
    await this.prisma.workout_histories.create({
      data: {
        workoutId: data.workoutId,
        amountOfRepetitions: data.amountOfRepetitions,
        amountOfSeries: data.amountOfSeries,
        weight: data.weight,
      },
    });
  }
}
