import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export interface emailVerificationDTO {
  email: string;
}

export class emailVerificationValidator {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
