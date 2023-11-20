import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CreateUserKeycloakService } from './services/create-user.keycloak.service';
import { LoginKeycloakService } from './services/login.keycloak.service';
import { RefreshTokenKeycloakService } from './services/refresh-token.keycloak.service';

@Module({
  imports: [HttpModule],
  providers: [
    CreateUserKeycloakService,
    LoginKeycloakService,
    RefreshTokenKeycloakService,
  ],
  exports: [
    CreateUserKeycloakService,
    LoginKeycloakService,
    RefreshTokenKeycloakService,
  ],
})
export class KeycloakModule {}
