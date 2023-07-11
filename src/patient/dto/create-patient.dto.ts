import { IsOptional } from 'class-validator';
import { Doctor } from 'src/doctor/entities/doctor.entity';

export class CreatePatientDto {
  name: string;
  surname: string;
  dni: string;
  hospitalId: number;

  @IsOptional()
  doctors: Doctor[];
}
