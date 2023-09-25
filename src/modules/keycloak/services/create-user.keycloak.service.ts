import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { URLSearchParams } from 'url';

@Injectable()
export class CreateUserKeycloakService {
  constructor(private http: HttpService) {}

  async execute(email: string, password: string) {
    try {
      const response = await firstValueFrom(
        this.http.post(
          `http://host.docker.internal:8080/realms/master/protocol/openid-connect/token`,
          new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: 'admin-cli',
            client_secret: process.env.MASTER_CLIENT_SECRET,
          }),
        ),
      );
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${response.data.access_token}`,
        },
      };
      const { data } = await firstValueFrom(
        this.http.post(
          `http://host.docker.internal:8080/admin/realms/gym-focus/users`,
          {
            enabled: true,
            username: email,
            sub: '60cdaa63-895a-44da-8fba-b08ca2fbc2d1',
            email,
            credentials: [
              { type: 'password', value: password, temporary: false },
            ],
          },
          config,
        ),
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}
