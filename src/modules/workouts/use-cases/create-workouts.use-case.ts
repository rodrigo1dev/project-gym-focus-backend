import { BadRequestException, Injectable } from '@nestjs/common';
import { FindUserByEmailRepository } from 'src/modules/users/repositories/find-user-by-email.repository';
import { createWorkoutServiceDTO } from '../dtos/create-workouts.dto';
import { CreateWorkoutsRepository } from '../repositories/create-workouts.repository';
import { FindExerciseInfoRepository } from '../repositories/find-exercise-info.repository';
import { FindWorkoutsByUserIdAndExerciseIdRepository } from '../repositories/find-workout-by-id.repository';

@Injectable()
export class CreateWorkoutsUseCase {
  constructor(
    private readonly createWorkoutsRepository: CreateWorkoutsRepository,
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
    private readonly findWorkoutsByUserIdAndExerciseIdRepository: FindWorkoutsByUserIdAndExerciseIdRepository,
    private readonly findExerciseInfoRepository: FindExerciseInfoRepository,
  ) {}

  async execute(email: string, data: createWorkoutServiceDTO): Promise<void> {
    const exerciseInfo = await this.findExerciseInfoRepository.FindById(
      data.exerciseInfoId,
    );

    if (!exerciseInfo) {
      throw new BadRequestException('ExerciseInfo does not exists');
    }

    const user = await this.findUserByEmailRepository.execute(email);

    const existingWorkout =
      await this.findWorkoutsByUserIdAndExerciseIdRepository.execute(
        user.id,
        data.exerciseInfoId,
      );

    if (existingWorkout.some((workout) => workout.division === data.division)) {
      throw new BadRequestException(
        'Workout with the same exerciseInfoId and division already exists',
      );
    }

    await this.createWorkoutsRepository.execute({
      userId: user.id,
      exerciseInfoId: data.exerciseInfoId,
      amountOfRepetitions: data.amountOfRepetitions,
      amountOfSeries: data.amountOfSeries,
      division: data.division,
      weight: data.weight,
    });
  }
}
