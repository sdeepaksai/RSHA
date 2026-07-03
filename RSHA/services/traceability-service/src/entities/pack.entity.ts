import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PackComponentEntity } from './pack-component.entity';

@Entity('pack')
export class PackEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  packId: string;

  @Column()
  createdAt: Date;

  @Column()
  weight: number;

  @Column()
  destination: string;

  @OneToMany(() => PackComponentEntity, (component) => component.pack)
  components: PackComponentEntity[];
}
