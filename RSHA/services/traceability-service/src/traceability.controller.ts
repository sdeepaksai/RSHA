import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TraceabilityService } from './traceability.service';

@Controller('traceability')
export class TraceabilityController {
  constructor(private readonly traceabilityService: TraceabilityService) {}

  @Get('pack/:id')
  getPack(@Param('id') id: string) {
    return this.traceabilityService.getPack(id);
  }

  @Get('carcass/:id')
  getCarcass(@Param('id') id: string) {
    return this.traceabilityService.getCarcass(id);
  }

  @Post('pack')
  createPack(@Body() createPackDto: any) {
    return this.traceabilityService.createPack(createPackDto);
  }

  @Post('carcass')
  createCarcass(@Body() createCarcassDto: any) {
    return this.traceabilityService.createCarcass(createCarcassDto);
  }
}
