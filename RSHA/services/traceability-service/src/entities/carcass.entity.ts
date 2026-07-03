import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { LivestockEntity } from './livestock.entity';
import { CutEntity } from './cut.entity';

@Entity('carcass')
export class CarcassEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  carcassId: string;

  @Column()
  weight: number;

  @Column()
  processDate: Date;

  @Column()
  gradeQuality: string;

  @ManyToOne(() => LivestockEntity)
  livestock: LivestockEntity;

  @OneToMany(() => CutEntity, (cut) => cut.carcass)
  cuts: CutEntity[];
}
