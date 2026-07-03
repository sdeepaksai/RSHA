import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { LivestockEntity } from './livestock.entity';

@Entity('farm')
export class FarmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  farmName: string;

  @Column()
  location: string;

  @Column()
  region: string;

  @OneToMany(() => LivestockEntity, (livestock) => livestock.farm)
  livestock: LivestockEntity[];
}
