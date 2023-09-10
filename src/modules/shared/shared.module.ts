import { Global, Module } from '@nestjs/common';
import { HashProvider } from './providers/hash-value.provider';
import { PrismaService } from './services';

@Global()
@Module({
  providers: [PrismaService, HashProvider],
  exports: [PrismaService, HashProvider],
})
export class SharedModule {}
