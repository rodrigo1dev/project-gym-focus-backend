import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/shared/services';

@Injectable()
export class EmailValidationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createOrUpdate(email: string, code: string): Promise<void> {
    await this.prisma.emailValidation.upsert({
      create: {
        email,
        code,
      },
      update: {
        code,
      },
      where: {
        email,
      },
    });
  }

  async delete(email: string): Promise<void> {
    await this.prisma.emailValidation.delete({
      where: {
        email,
      },
    });
  }

  async findByEmail(email: string): Promise<string> {
    const emailValidation = await this.prisma.emailValidation.findUnique({
      where: {
        email,
      },
    });

    return emailValidation?.code;
  }
}
