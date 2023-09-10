import { Body, Controller, Post } from '@nestjs/common';
import { createUserValidator } from '../dtos/create-user.dto';
import { CreateUserUseCase } from '../use-cases/create-user.use-case';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post('create')
  async createUser(@Body() requestBody: createUserValidator) {
    await this.createUserUseCase.execute(requestBody);
  }
}
