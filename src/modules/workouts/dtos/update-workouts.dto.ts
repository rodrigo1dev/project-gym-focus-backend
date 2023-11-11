import { Division } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export interface updateWorkoutDTO {
  workoutId: string;
  amountOfRepetitions: number;
  amountOfSeries: number;
  division: Division;
  weight: number;
}

export class updateWorkoutValidator {
  @IsString()
  @IsNotEmpty()
  workoutId: string;

  @IsNumber()
  @IsOptional()
  amountOfRepetitions: number;

  @IsOptional()
  @IsNumber()
  amountOfSeries: number;

  @IsOptional()
  @IsEnum(Division)
  division: Division;

  @IsOptional()
  @IsNumber()
  weight: number;
}
