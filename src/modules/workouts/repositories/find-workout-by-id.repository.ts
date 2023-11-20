import { Injectable } from '@nestjs/common';
import { Workout } from '@prisma/client';
import { PrismaService } from 'src/modules/shared/services';

@Injectable()
export class FindWorkoutsByUserIdAndExerciseIdRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(userId: string, exerciseInfoId: string): Promise<Workout[]> {
    const workout = await this.prisma.workout.findMany({
      where: {
        userId,
        exerciseInfoId,
      },
    });
    return workout;
  }
}
