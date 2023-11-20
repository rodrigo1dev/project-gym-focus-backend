import { Injectable } from '@nestjs/common';
import { Division } from '@prisma/client';
import { PrismaService } from 'src/modules/shared/services';
import { OutputFindAllWorkoutByDivision } from '../dtos/find-all-workout-by-division.dto';

@Injectable()
export class FindAllWorkoutByDivisionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(
    userId: string,
    division: Division,
  ): Promise<OutputFindAllWorkoutByDivision> {
    return await this.prisma.workout.findMany({
      where: {
        userId,
        division,
      },
      include: { exerciseInfo: true },
    });
  }
}
