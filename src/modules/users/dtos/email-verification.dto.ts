import { IsEmail, IsString } from 'class-validator';

export interface emailVerificationDTO {
  email: string;
}

export class emailVerificationValidator {
  @IsString()
  @IsEmail()
  email: string;
}
