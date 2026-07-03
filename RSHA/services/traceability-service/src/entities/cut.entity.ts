import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { CarcassEntity } from './carcass.entity';
import { PackComponentEntity } from './pack-component.entity';

@Entity('cut')
export class CutEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cutType: string;

  @Column()
  weight: number;

  @Column()
  trimLevel: string;

  @Column()
  cutDate: Date;

  @ManyToOne(() => CarcassEntity, (carcass) => carcass.cuts)
  carcass: CarcassEntity;

  @OneToMany(() => PackComponentEntity, (component) => component.cut)
  packComponents: PackComponentEntity[];
}
