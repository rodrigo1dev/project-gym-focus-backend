import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserKeycloakService } from 'src/modules/keycloak/services/create-user.keycloak.service';
import { HashProvider } from 'src/modules/shared/providers/hash-value.provider';
import { createUserDTO } from '../dtos/create-user.dto';
import { CreateUserRepository } from '../repositories/create-user.repository';
import { EmailValidationRepository } from '../repositories/email-validation.repository';
import { FindUserByEmailRepository } from '../repositories/find-user-by-email.repository';
import { EmailVerificationUseCase } from './email-verification.use-case';
@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly hashProvider: HashProvider,
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
    private readonly createUserKeycloakService: CreateUserKeycloakService,
    private readonly emailVerificationUseCase: EmailVerificationUseCase,
    private readonly emailValidationRepository: EmailValidationRepository,
  ) {}

  async execute(data: createUserDTO): Promise<void> {
    const { name, email, password, code } = data;

    const userAlreadyExists =
      await this.findUserByEmailRepository.execute(email);

    if (userAlreadyExists) throw new BadRequestException('User already exists');

    const randomCode = await this.emailValidationRepository.findByEmail(email);

    if (code !== randomCode) throw new BadRequestException('Invalid code');

    const hashedPassword = await this.hashProvider.hash(password, 11);

    await this.createUserKeycloakService.execute(email, password);

    await this.createUserRepository.execute({
      email,
      name,
      password: hashedPassword,
      code,
    });

    await this.emailValidationRepository.delete(email);
  }
}
