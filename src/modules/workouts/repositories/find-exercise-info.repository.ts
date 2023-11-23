import { Injectable } from '@nestjs/common';
import { ExerciseInfo } from '@prisma/client';
import { PrismaService } from 'src/modules/shared/services';

@Injectable()
export class FindExerciseInfoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async FindById(id: string): Promise<ExerciseInfo | null> {
    const exerciseInfo = await this.prisma.exerciseInfo.findUnique({
      where: {
        id,
      },
    });
    return exerciseInfo;
  }

  async FindByName(name: string): Promise<ExerciseInfo[]> {
    const exerciseInfo = await this.prisma.exerciseInfo.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
    return exerciseInfo;
  }
}
