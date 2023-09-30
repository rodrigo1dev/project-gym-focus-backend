import { Injectable } from '@nestjs/common';
import { updateWorkoutDTO } from '../dtos/update-workouts.dto';
import { UpdateWorkoutsRepository } from '../repositories/update-workouts.repository';

@Injectable()
export class UpdateWorkoutsUseCase {
  constructor(
    private readonly updateWorkoutsRepository: UpdateWorkoutsRepository,
  ) {}

  async execute(data: updateWorkoutDTO): Promise<void> {
    await this.updateWorkoutsRepository.execute(data);
  }
}
