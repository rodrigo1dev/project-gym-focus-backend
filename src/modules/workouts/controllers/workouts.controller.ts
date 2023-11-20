import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/modules/auth/guards/jwt.guard';
import { createWorkoutValidator } from '../dtos/create-workouts.dto';
import { findAllWorkoutByDivisionValidator } from '../dtos/find-all-workout-by-division.dto';
import { updateWorkoutValidator } from '../dtos/update-workouts.dto';
import { CreateWorkoutsUseCase } from '../use-cases/create-workouts.use-case';
import { FindAllWorkoutByDivisionUseCase } from '../use-cases/find-all-workouts-by-division.use-case';
import { UpdateWorkoutsUseCase } from '../use-cases/update-workout.use-case';

@Controller('workouts')
export class WorkoutsController {
  constructor(
    private readonly createWorkoutsUseCase: CreateWorkoutsUseCase,
    private readonly updateWorkoutsUseCase: UpdateWorkoutsUseCase,
    private readonly findAllWorkoutByDivisionUseCase: FindAllWorkoutByDivisionUseCase,
  ) {}

  @Post('create')
  @UseGuards(JwtGuard)
  async createWorkouts(
    @Req() req,
    @Body() requestBody: createWorkoutValidator,
  ) {
    await this.createWorkoutsUseCase.execute(req.user.email, requestBody);
  }

  @Patch('update')
  @UseGuards(JwtGuard)
  async updateWorkouts(@Body() requestBody: updateWorkoutValidator) {
    await this.updateWorkoutsUseCase.execute(requestBody);
  }

  @Get('find-all-workouts-by-division')
  @UseGuards(JwtGuard)
  async findAllWorkoutByDivision(
    @Req() req,
    @Query() queryParam: findAllWorkoutByDivisionValidator,
  ) {
    return await this.findAllWorkoutByDivisionUseCase.execute(
      req.user.email,
      queryParam.division,
    );
  }
}
