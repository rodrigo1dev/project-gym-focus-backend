import { Body, Controller, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/modules/auth/guards/jwt.guard';
import { createWorkoutValidator } from '../dtos/create-workouts.dto';
import { updateWorkoutValidator } from '../dtos/update-workouts.dto';
import { CreateWorkoutsUseCase } from '../use-cases/create-workouts.use-case';
import { UpdateWorkoutsUseCase } from '../use-cases/update-workout.use-case';

@Controller('workouts')
export class WorkoutsController {
  constructor(
    private readonly createWorkoutsUseCase: CreateWorkoutsUseCase,
    private readonly updateWorkoutsUseCase: UpdateWorkoutsUseCase,
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
}
