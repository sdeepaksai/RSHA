import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RfidService } from './rfid.service';

@Controller('rfid')
export class RfidController {
  constructor(private readonly rfidService: RfidService) {}

  @Get('scan/:tagId')
  scanTag(@Param('tagId') tagId: string) {
    return this.rfidService.scanTag(tagId);
  }

  @Post('event')
  recordEvent(@Body() eventData: any) {
    return this.rfidService.recordEvent(eventData);
  }

  @Get('active-tags')
  getActiveTags() {
    return this.rfidService.getActiveTags();
  }
}
