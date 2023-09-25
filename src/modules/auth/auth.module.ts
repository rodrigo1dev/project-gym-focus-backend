import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { KeycloakModule } from '../keycloak/keycloak.module';
import { UsersModule } from '../users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
  imports: [HttpModule, UsersModule, KeycloakModule],
  controllers: [AuthController],
  providers: [JwtStrategy, AuthService],
})
export class AuthModule {}
