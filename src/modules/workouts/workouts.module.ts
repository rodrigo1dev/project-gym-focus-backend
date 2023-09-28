import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { WorkoutsController } from './controllers/workouts.controller';
import { CreateWorkoutsRepository } from './repositories/create-workouts.repository';
import { FindWorkoutsByUserIdAndExerciseIdRepository } from './repositories/find-workout-by-id.repository';
import { CreateWorkoutsUseCase } from './use-cases/create-workouts.use-case';

@Module({
  imports: [UsersModule],
  controllers: [WorkoutsController],
  providers: [
    CreateWorkoutsUseCase,
    CreateWorkoutsRepository,
    FindWorkoutsByUserIdAndExerciseIdRepository,
  ],
})
export class WorkoutsModule {}
