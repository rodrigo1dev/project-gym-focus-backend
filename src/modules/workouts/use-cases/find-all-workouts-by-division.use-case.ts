import { Injectable } from '@nestjs/common';
import { Division, Workout } from '@prisma/client';
import { FindUserByEmailRepository } from 'src/modules/users/repositories/find-user-by-email.repository';
import { FindAllWorkoutByDivisionRepository } from '../repositories/find-all-workout-by-division.repository';

@Injectable()
export class FindAllWorkoutByDivisionUseCase {
  constructor(
    private readonly findAllWorkoutByDivisionRepository: FindAllWorkoutByDivisionRepository,
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
  ) {}

  async execute(email: string, division: Division): Promise<Workout[]> {
    const user = await this.findUserByEmailRepository.execute(email);

    return await this.findAllWorkoutByDivisionRepository.execute(
      user.id,
      division,
    );
  }
}
