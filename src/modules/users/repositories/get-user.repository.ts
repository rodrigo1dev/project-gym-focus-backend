import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/modules/shared/services';

@Injectable()
export class GetUserByEmailRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({ where: { email } });
  }
}
