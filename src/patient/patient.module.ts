import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Hospital } from 'src/hospital/entities/hospital.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patient, Doctor, Hospital])],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
