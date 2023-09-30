import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { WorkoutsController } from './controllers/workouts.controller';
import { CreateWorkoutsRepository } from './repositories/create-workouts.repository';
import { FindWorkoutsByUserIdAndExerciseIdRepository } from './repositories/find-workout-by-id.repository';
import { UpdateWorkoutsRepository } from './repositories/update-workouts.repository';
import { CreateWorkoutsUseCase } from './use-cases/create-workouts.use-case';
import { UpdateWorkoutsUseCase } from './use-cases/update-workout.use-case';

@Module({
  imports: [UsersModule],
  controllers: [WorkoutsController],
  providers: [
    CreateWorkoutsUseCase,
    CreateWorkoutsRepository,
    FindWorkoutsByUserIdAndExerciseIdRepository,
    UpdateWorkoutsRepository,
    UpdateWorkoutsUseCase,
  ],
})
export class WorkoutsModule {}
