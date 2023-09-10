import { IsEmail, IsString, MinLength } from 'class-validator';

export interface createUserDTO {
  name: string;
  email: string;
  password: string;
}

export class createUserValidator {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  password: string;
}
