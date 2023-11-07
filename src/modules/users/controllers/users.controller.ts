import { Body, Controller, Post } from '@nestjs/common';
import { createUserValidator } from '../dtos/create-user.dto';
import { emailVerificationValidator } from '../dtos/email-verification.dto';
import { CreateUserUseCase } from '../use-cases/create-user.use-case';
import { EmailVerificationUseCase } from '../use-cases/email-verification.use-case';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly emailVerificationUseCase: EmailVerificationUseCase,
  ) {}

  @Post('create')
  async createUser(@Body() requestBody: createUserValidator) {
    await this.createUserUseCase.execute(requestBody);
  }

  @Post('verify-email')
  async verifyEmail(@Body() requestBody: emailVerificationValidator) {
    await this.emailVerificationUseCase.execute(requestBody);
  }
}
