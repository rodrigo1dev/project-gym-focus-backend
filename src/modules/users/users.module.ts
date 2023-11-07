import { Module } from '@nestjs/common';
import { KeycloakModule } from '../keycloak/keycloak.module';
import { MailsModule } from '../mail/mails.module';
import { SharedModule } from '../shared/shared.module';
import { UsersController } from './controllers/users.controller';
import { CreateUserRepository } from './repositories/create-user.repository';
import { EmailValidationRepository } from './repositories/email-validation.repository';
import { FindUserByEmailRepository } from './repositories/find-user-by-email.repository';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { EmailVerificationUseCase } from './use-cases/email-verification.use-case';

@Module({
  imports: [SharedModule, KeycloakModule, MailsModule],
  controllers: [UsersController],
  providers: [
    CreateUserRepository,
    CreateUserUseCase,
    FindUserByEmailRepository,
    EmailVerificationUseCase,
    EmailValidationRepository,
  ],
  exports: [FindUserByEmailRepository],
})
export class UsersModule {}
