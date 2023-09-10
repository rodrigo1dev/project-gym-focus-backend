import { BadRequestException, Injectable } from '@nestjs/common';
import { HashProvider } from 'src/modules/shared/providers/hash-value.provider';
import { createUserDTO } from '../dtos/create-user.dto';
import { CreateUserRepository } from '../repositories/create-user.repository';
import { GetUserByEmailRepository } from '../repositories/get-user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly hashProvider: HashProvider,
    private readonly getUserByEmailRepository: GetUserByEmailRepository,
  ) {}

  async execute(data: createUserDTO): Promise<void> {
    const { name, email } = data;

    const userAlreadyExists =
      await this.getUserByEmailRepository.execute(email);

    if (userAlreadyExists) throw new BadRequestException('User already exists');

    const hashedPassword = await this.hashProvider.hash(data.password, 11);

    await this.createUserRepository.execute({
      email,
      name,
      password: hashedPassword,
    });
  }
}
