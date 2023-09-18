import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guards/jwt.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    return await this.authService.login(body.username, body.password);
  }

  @UseGuards(JwtGuard)
  @Get('test-auth')
  test(@Req() req) {
    console.log(req.user);
    return {
      message: 'You are authenticated',
    };
  }
}
