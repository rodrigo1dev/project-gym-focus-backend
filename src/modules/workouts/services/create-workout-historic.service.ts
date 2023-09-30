import { Injectable } from '@nestjs/common';
import { createWorkoutHistoriesDTO } from '../dtos/create-workout-histories.dto';
import { CreateWorkoutHistoriesRepository } from '../repositories/create-workout-historic.repository';

@Injectable()
export class CreateWorkoutHistoricService {
  constructor(
    private readonly createWorkoutHistoriesRepository: CreateWorkoutHistoriesRepository,
  ) {}

  async execute(data: createWorkoutHistoriesDTO): Promise<void> {
    await this.createWorkoutHistoriesRepository.execute(data);
  }
}
