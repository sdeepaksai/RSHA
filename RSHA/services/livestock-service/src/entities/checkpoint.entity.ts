import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'checkpoint' })
export class Checkpoint {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tagId: string;

  @Column()
  entityType: string;

  @Column()
  status: string;

  @Column()
  facility: string;

  @Column()
  zone: string;

  @Column()
  eventType: string;

  @Column({ type: 'timestamp' })
  timestampUtc: Date;

  @Column({ type: 'jsonb', nullable: true })
  metadata: any;
}
