import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/modules/auth/guards/jwt.guard';
import { createWorkoutValidator } from '../dtos/create-workouts.dto';
import { CreateWorkoutsUseCase } from '../use-cases/create-workouts.use-case';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly createWorkoutsUseCase: CreateWorkoutsUseCase) {}

  @Post('create')
  @UseGuards(JwtGuard)
  async createWorkouts(
    @Req() req,
    @Body() requestBody: createWorkoutValidator,
  ) {
    await this.createWorkoutsUseCase.execute(req.user.email, requestBody);
  }
}
