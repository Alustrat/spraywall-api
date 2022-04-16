import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Gym from '../base/gym.base.model';

@Entity({ name: 'gyms' })
export default class GymDbModel implements Gym {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;
}
