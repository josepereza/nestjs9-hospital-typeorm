import { Patient } from 'src/patient/entities/patient.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @OneToMany(() => Patient, (patient) => patient.hospital)
  patients: Patient[];
}
