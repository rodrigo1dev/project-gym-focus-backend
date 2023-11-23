import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { WorkoutsController } from './controllers/workouts.controller';
import { CreateWorkoutHistoriesRepository } from './repositories/create-workout-historic.repository';
import { CreateWorkoutsRepository } from './repositories/create-workouts.repository';
import { FindAllWorkoutByDivisionRepository } from './repositories/find-all-workout-by-division.repository';
import { FindExerciseInfoRepository } from './repositories/find-exercise-info.repository';
import { FindWorkoutsByUserIdAndExerciseIdRepository } from './repositories/find-workout-by-id.repository';
import { UpdateWorkoutsRepository } from './repositories/update-workouts.repository';
import { CreateWorkoutHistoricService } from './services/create-workout-historic.service';
import { CreateWorkoutsUseCase } from './use-cases/create-workouts.use-case';
import { FindAllWorkoutByDivisionUseCase } from './use-cases/find-all-workouts-by-division.use-case';
import { FindExerciseInfoByNameUseCase } from './use-cases/find-exercise-info-by-name.use-case';
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
    FindExerciseInfoRepository,
    FindAllWorkoutByDivisionRepository,
    FindAllWorkoutByDivisionUseCase,
    FindExerciseInfoByNameUseCase,
  ],
})
export class WorkoutsModule {}
