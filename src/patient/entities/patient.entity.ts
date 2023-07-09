import { Doctor } from 'src/doctor/entities/doctor.entity';
import { Hospital } from 'src/hospital/entities/hospital.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
} from 'typeorm';


@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;
  @Column()
  dni: string;
 
  @ManyToOne(() => Hospital, (hospital) => hospital.patients, { cascade: true })
  hospital: Hospital;

  @ManyToMany(() => Doctor)
  @JoinTable()
  doctors: Doctor[];
}
