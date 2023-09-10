import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { UsersController } from './controllers/users.controller';
import { CreateUserRepository } from './repositories/create-user.repository';
import { GetUserByEmailRepository } from './repositories/get-user.repository';
import { CreateUserUseCase } from './use-cases/create-user.use-case';

@Module({
  imports: [SharedModule],
  controllers: [UsersController],
  providers: [
    CreateUserRepository,
    CreateUserUseCase,
    GetUserByEmailRepository,
  ],
})
export class UsersModule {}
