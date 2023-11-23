import { IsString } from 'class-validator';

export class findExerciseInfoByNameValidator {
  @IsString()
  name: string;
}
