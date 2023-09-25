import { Module } from '@nestjs/common';
import { KeycloakModule } from '../keycloak/keycloak.module';
import { SharedModule } from '../shared/shared.module';
import { UsersController } from './controllers/users.controller';
import { CreateUserRepository } from './repositories/create-user.repository';
import { FindUserByEmailRepository } from './repositories/find-user-by-email.repository';
import { CreateUserUseCase } from './use-cases/create-user.use-case';

@Module({
  imports: [SharedModule, KeycloakModule],
  controllers: [UsersController],
  providers: [
    CreateUserRepository,
    CreateUserUseCase,
    FindUserByEmailRepository,
  ],
  exports: [FindUserByEmailRepository],
})
export class UsersModule {}
