import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Livestock } from './entities/livestock.entity';
import { Checkpoint } from './entities/checkpoint.entity';

@Injectable()
export class LivestockService {
  constructor(
    @InjectRepository(Livestock)
    private readonly livestockRepo: Repository<Livestock>,
    @InjectRepository(Checkpoint)
    private readonly checkpointRepo: Repository<Checkpoint>
  ) {}

  async getStatus(tagId: string) {
    const livestock = await this.livestockRepo.findOne({ where: { tagId } });
    if (!livestock) throw new NotFoundException('Tag not found');

    const lastCheckpoint = await this.checkpointRepo.findOne({
      where: { tagId },
      order: { timestampUtc: 'DESC' }
    });

    return {
      tagId,
      entityType: 'animal',
      status: livestock.status,
      facility: lastCheckpoint?.facility ?? null,
      zone: lastCheckpoint?.zone ?? null,
      lastCheckpoint: lastCheckpoint?.eventType ?? null,
      lastUpdatedUtc: livestock.updatedAt.toISOString(),
      farmId: livestock.farmId,
      species: livestock.species,
      historyUrl: `/api/v1/livestock/${tagId}/history`
    };
  }

  async getHistory(tagId: string) {
    return this.checkpointRepo.find({
      where: { tagId },
      order: { timestampUtc: 'ASC' }
    });
  }
}
