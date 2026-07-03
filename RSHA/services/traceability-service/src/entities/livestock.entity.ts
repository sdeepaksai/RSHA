import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { FarmEntity } from './farm.entity';

@Entity('livestock')
export class LivestockEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tagId: string;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column()
  weight: number;

  @Column()
  arrivalDate: Date;

  @ManyToOne(() => FarmEntity)
  farm: FarmEntity;
}
