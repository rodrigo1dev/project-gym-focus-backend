import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/shared/services';
import { createWorkoutRepositoryDTO } from '../dtos/create-workouts.dto';

@Injectable()
export class CreateWorkoutsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(data: createWorkoutRepositoryDTO): Promise<void> {
    await this.prisma.workout.create({
      data: {
        userId: data.userId,
        exerciseInfoId: data.exerciseInfoId,
        amountOfRepetitions: data.amountOfRepetitions,
        amountOfSeries: data.amountOfSeries,
        division: data.division,
        weight: data.weight,
      },
    });
  }
}
