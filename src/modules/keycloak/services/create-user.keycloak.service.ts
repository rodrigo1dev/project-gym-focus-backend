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
          `${process.env.KEYCLOAK_URL}/realms/master/protocol/openid-connect/token`,
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
          `${process.env.KEYCLOAK_URL}/admin/realms/gym-focus/users`,
          {
            enabled: true,
            username: email,
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
