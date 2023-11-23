import { Injectable } from '@nestjs/common';
import { ExerciseInfo } from '@prisma/client';
import { FindExerciseInfoRepository } from '../repositories/find-exercise-info.repository';

@Injectable()
export class FindExerciseInfoByNameUseCase {
  constructor(
    private readonly findExerciseInfoRepository: FindExerciseInfoRepository,
  ) {}

  async execute(name: string): Promise<ExerciseInfo[]> {
    const ExerciseInfo = await this.findExerciseInfoRepository.FindByName(name);

    return ExerciseInfo;
  }
}
