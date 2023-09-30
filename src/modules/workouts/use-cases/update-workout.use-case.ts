import { Injectable } from '@nestjs/common';
import { updateWorkoutDTO } from '../dtos/update-workouts.dto';
import { UpdateWorkoutsRepository } from '../repositories/update-workouts.repository';
import { CreateWorkoutHistoricService } from '../services/create-workout-historic.service';

@Injectable()
export class UpdateWorkoutsUseCase {
  constructor(
    private readonly updateWorkoutsRepository: UpdateWorkoutsRepository,
    private readonly createWorkoutHistoricService: CreateWorkoutHistoricService,
  ) {}

  async execute(data: updateWorkoutDTO): Promise<void> {
    await this.updateWorkoutsRepository.execute(data);

    if (data.amountOfRepetitions || data.amountOfSeries || data.weight) {
      await this.createWorkoutHistoricService.execute(data);
    }
  }
}
