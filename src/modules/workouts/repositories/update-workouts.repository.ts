import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/shared/services';
import { updateWorkoutDTO } from '../dtos/update-workouts.dto';

@Injectable()
export class UpdateWorkoutsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(data: updateWorkoutDTO): Promise<void> {
    await this.prisma.workout.update({
      where: {
        id: data.workoutId,
      },
      data: {
        amountOfRepetitions: data.amountOfRepetitions,
        amountOfSeries: data.amountOfSeries,
        dayOfTheWeek: data.dayOfTheWeek,
        weight: data.weight,
      },
    });
  }
}
