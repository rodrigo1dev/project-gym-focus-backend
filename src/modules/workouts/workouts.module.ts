import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { WorkoutsController } from './controllers/workouts.controller';
import { CreateWorkoutHistoriesRepository } from './repositories/create-workout-historic.repository';
import { CreateWorkoutsRepository } from './repositories/create-workouts.repository';
import { FindWorkoutsByUserIdAndExerciseIdRepository } from './repositories/find-workout-by-id.repository';
import { UpdateWorkoutsRepository } from './repositories/update-workouts.repository';
import { CreateWorkoutHistoricService } from './services/create-workout-historic.service';
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
    CreateWorkoutHistoricService,
    CreateWorkoutHistoriesRepository,
  ],
})
export class WorkoutsModule {}
