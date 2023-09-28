import { DayOfWeek } from '@prisma/client';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export interface createWorkoutServiceDTO {
  exerciseInfoId: string;
  amountOfRepetitions: number;
  amountOfSeries: number;
  dayOfTheWeek: DayOfWeek;
  weight: number;
}

export interface createWorkoutRepositoryDTO {
  userId: string;
  exerciseInfoId: string;
  amountOfRepetitions: number;
  amountOfSeries: number;
  dayOfTheWeek: DayOfWeek;
  weight: number;
}

export class createWorkoutValidator {
  @IsString()
  exerciseInfoId: string;

  @IsNumber()
  amountOfRepetitions: number;

  @IsNumber()
  amountOfSeries: number;

  @IsEnum(DayOfWeek)
  dayOfTheWeek: DayOfWeek;

  @IsNumber()
  weight: number;
}
