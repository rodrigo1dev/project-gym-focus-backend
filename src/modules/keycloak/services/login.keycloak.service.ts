import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LoginKeycloakService {
  constructor(private http: HttpService) {}

  async execute(email: string, password: string) {
    const { data } = await firstValueFrom(
      this.http.post(
        `http://host.docker.internal:8080/realms/gym-focus/protocol/openid-connect/token`,
        new URLSearchParams({
          client_id: 'gym-focus-client',
          client_secret: process.env.GYM_FOCUS_CLIENT_SECRET,
          grant_type: 'password',
          username: email,
          password,
        }),
      ),
    );

    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_in: data.expires_in,
      refresh_expires_in: data.refresh_expires_in,
    };
  }
}
