import { Injectable } from '@nestjs/common';
import { Division, Workout } from '@prisma/client';
import { PrismaService } from 'src/modules/shared/services';

@Injectable()
export class FindAllWorkoutByDivisionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(userId: string, division: Division): Promise<Workout[]> {
    return await this.prisma.workout.findMany({
      where: {
        userId,
        division,
      },
    });
  }
}
