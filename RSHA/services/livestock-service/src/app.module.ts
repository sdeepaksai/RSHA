import { Module } from '@nestjs/common';
import { LivestockController } from './livestock.controller';
import { LivestockService } from './livestock.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livestock } from './entities/livestock.entity';
import { Checkpoint } from './entities/checkpoint.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: process.env.DB_USER || 'rfid',
      password: process.env.DB_PASS || 'rfid',
      database: process.env.DB_NAME || 'rfid_livestock',
      entities: [Livestock, Checkpoint],
      synchronize: false
    }),
    TypeOrmModule.forFeature([Livestock, Checkpoint])
  ],
  controllers: [LivestockController],
  providers: [LivestockService]
})
export class AppModule {}
