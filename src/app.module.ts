import { Module } from '@nestjs/common';
import { SharedModule } from './modules/shared/shared.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [SharedModule, UsersModule],
})
export class AppModule {}
