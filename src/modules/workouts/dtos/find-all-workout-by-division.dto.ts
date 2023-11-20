import { Division, Workout } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class findAllWorkoutByDivisionValidator {
  @IsEnum(Division)
  division: Division;
}

export type OutputFindAllWorkoutByDivision = (Workout & {
  exerciseInfo: {
    name: string;
  };
})[];
