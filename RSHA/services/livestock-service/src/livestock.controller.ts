import { Controller, Get, Param } from '@nestjs/common';
import { LivestockService } from './livestock.service';

@Controller('livestock')
export class LivestockController {
  constructor(private readonly service: LivestockService) {}

  @Get(':tagId/status')
  getStatus(@Param('tagId') tagId: string) {
    return this.service.getStatus(tagId);
  }

  @Get(':tagId/history')
  getHistory(@Param('tagId') tagId: string) {
    return this.service.getHistory(tagId);
  }
}
