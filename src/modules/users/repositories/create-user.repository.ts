import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/shared/services';
import { createUserDTO } from '../dtos/create-user.dto';

@Injectable()
export class CreateUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(data: createUserDTO): Promise<void> {
    const { name, email, password } = data;
    await this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
  }
}
