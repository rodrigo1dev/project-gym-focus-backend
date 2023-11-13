import { Division } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class findAllWorkoutByDivisionValidator {
  @IsEnum(Division)
  division: Division;
}
