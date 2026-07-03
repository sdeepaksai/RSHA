import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PackEntity } from './pack.entity';
import { CutEntity } from './cut.entity';

@Entity('pack_component')
export class PackComponentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number;

  @Column()
  unit: string;

  @ManyToOne(() => PackEntity, (pack) => pack.components)
  pack: PackEntity;

  @ManyToOne(() => CutEntity)
  cut: CutEntity;
}
