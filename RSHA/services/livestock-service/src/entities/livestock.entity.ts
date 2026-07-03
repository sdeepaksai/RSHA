import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'livestock' })
export class Livestock {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  tagId: string;

  @Column()
  farmId: string;

  @Column()
  species: string;

  @Column()
  status: string;

  @Column({ type: 'timestamp' })
  updatedAt: Date;
}
