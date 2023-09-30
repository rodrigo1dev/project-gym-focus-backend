import { BadRequestException, Injectable } from '@nestjs/common';
import { FindUserByEmailRepository } from 'src/modules/users/repositories/find-user-by-email.repository';
import { createWorkoutServiceDTO } from '../dtos/create-workouts.dto';
import { CreateWorkoutsRepository } from '../repositories/create-workouts.repository';
import { FindWorkoutsByUserIdAndExerciseIdRepository } from '../repositories/find-workout-by-id.repository';

@Injectable()
export class CreateWorkoutsUseCase {
  constructor(
    private readonly createWorkoutsRepository: CreateWorkoutsRepository,
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
    private readonly findWorkoutsByUserIdAndExerciseIdRepository: FindWorkoutsByUserIdAndExerciseIdRepository,
  ) {}

  async execute(email: string, data: createWorkoutServiceDTO): Promise<void> {
    const user = await this.findUserByEmailRepository.execute(email);

    const workout =
      await this.findWorkoutsByUserIdAndExerciseIdRepository.execute(
        user.id,
        data.exerciseInfoId,
      );
    console.log(data.dayOfTheWeek);
    if (workout?.dayOfTheWeek && workout?.dayOfTheWeek === data.dayOfTheWeek) {
      throw new BadRequestException(
        'Workout already exists in this day of the week, update or create in another day',
      );
    }

    await this.createWorkoutsRepository.execute({
      userId: user.id,
      exerciseInfoId: data.exerciseInfoId,
      amountOfRepetitions: data.amountOfRepetitions,
      amountOfSeries: data.amountOfSeries,
      dayOfTheWeek: data.dayOfTheWeek,
      weight: data.weight,
    });
  }
}
