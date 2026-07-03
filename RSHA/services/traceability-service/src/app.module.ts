import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TraceabilityController } from './traceability.controller';
import { TraceabilityService } from './traceability.service';
import { PackEntity } from './entities/pack.entity';
import { PackComponentEntity } from './entities/pack-component.entity';
import { CutEntity } from './entities/cut.entity';
import { CarcassEntity } from './entities/carcass.entity';
import { LivestockEntity } from './entities/livestock.entity';
import { FarmEntity } from './entities/farm.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PackEntity,
      PackComponentEntity,
      CutEntity,
      CarcassEntity,
      LivestockEntity,
      FarmEntity,
    ]),
  ],
  controllers: [TraceabilityController],
  providers: [TraceabilityService],
})
export class AppModule {}
