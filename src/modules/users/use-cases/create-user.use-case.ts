import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserKeycloakService } from 'src/modules/keycloak/services/create-user.keycloak.service';
import { HashProvider } from 'src/modules/shared/providers/hash-value.provider';
import { createUserDTO } from '../dtos/create-user.dto';
import { CreateUserRepository } from '../repositories/create-user.repository';
import { FindUserByEmailRepository } from '../repositories/find-user-by-email.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly hashProvider: HashProvider,
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
    private readonly createUserKeycloakService: CreateUserKeycloakService,
  ) {}

  async execute(data: createUserDTO): Promise<void> {
    const { name, email, password } = data;

    const userAlreadyExists =
      await this.findUserByEmailRepository.execute(email);

    if (userAlreadyExists) throw new BadRequestException('User already exists');

    const hashedPassword = await this.hashProvider.hash(password, 11);

    await this.createUserKeycloakService.execute(email, password);

    await this.createUserRepository.execute({
      email,
      name,
      password: hashedPassword,
    });
  }
}
