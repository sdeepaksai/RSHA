import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PackEntity } from './entities/pack.entity';
import { CarcassEntity } from './entities/carcass.entity';

@Injectable()
export class TraceabilityService {
  constructor(
    @InjectRepository(PackEntity)
    private readonly packRepository: Repository<PackEntity>,
    @InjectRepository(CarcassEntity)
    private readonly carcassRepository: Repository<CarcassEntity>,
  ) {}

  async getPack(id: string) {
    return this.packRepository.findOne({ where: { id }, relations: ['components'] });
  }

  async getCarcass(id: string) {
    return this.carcassRepository.findOne({ where: { id }, relations: ['cuts'] });
  }

  async createPack(createPackDto: any) {
    const pack = this.packRepository.create(createPackDto);
    return this.packRepository.save(pack);
  }

  async createCarcass(createCarcassDto: any) {
    const carcass = this.carcassRepository.create(createCarcassDto);
    return this.carcassRepository.save(carcass);
  }
}
