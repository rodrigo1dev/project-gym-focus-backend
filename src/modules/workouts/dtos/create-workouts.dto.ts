import { Division } from '@prisma/client';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export interface createWorkoutServiceDTO {
  exerciseInfoId: string;
  amountOfRepetitions: number;
  amountOfSeries: number;
  division: Division;
  weight: number;
}

export interface createWorkoutRepositoryDTO {
  userId: string;
  exerciseInfoId: string;
  amountOfRepetitions: number;
  amountOfSeries: number;
  division: Division;
  weight: number;
}

export class createWorkoutValidator {
  @IsString()
  exerciseInfoId: string;

  @IsNumber()
  amountOfRepetitions: number;

  @IsNumber()
  amountOfSeries: number;

  @IsEnum(Division)
  division: Division;

  @IsNumber()
  weight: number;
}
