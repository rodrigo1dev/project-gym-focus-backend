import { Body, Controller, Post } from '@nestjs/common';
import { RefreshTokenKeycloakService } from 'src/modules/keycloak/services/refresh-token.keycloak.service';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly refreshTokenKeycloakService: RefreshTokenKeycloakService,
  ) {}

  @Post('login')
  async login(@Body() body) {
    return await this.authService.execute(body.email, body.password);
  }

  @Post('refresh-token')
  async refreshToken(@Body() body) {
    return await this.refreshTokenKeycloakService.execute(body.refresh_token);
  }
}
