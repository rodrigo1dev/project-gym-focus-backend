import { DayOfWeek } from '@prisma/client';
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
  dayOfTheWeek: DayOfWeek;
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
  @IsEnum(DayOfWeek)
  dayOfTheWeek: DayOfWeek;

  @IsOptional()
  @IsNumber()
  weight: number;
}
