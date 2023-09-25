import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginKeycloakService } from 'src/modules/keycloak/services/login.keycloak.service';
import { HashProvider } from 'src/modules/shared/providers/hash-value.provider';
import { FindUserByEmailRepository } from 'src/modules/users/repositories/find-user-by-email.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
    private readonly hashProvider: HashProvider,
    private readonly loginKeycloakService: LoginKeycloakService,
  ) {}

  async execute(email: string, password: string) {
    const user = await this.findUserByEmailRepository.execute(email);
    const passwordMatch =
      user && (await this.hashProvider.compare(password, user.password));

    if (!user || !passwordMatch) {
      throw new BadRequestException('Email, or password is incorrect');
    }
    const data = await this.loginKeycloakService.execute(email, password);
    return { user_id: user.id, data };
  }
}
