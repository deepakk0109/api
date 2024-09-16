import { Controller, Get } from '@nestjs/common';
import { ChartCmsService } from 'src/services/chart-cms.service';

@Controller('chart-cms')
export class ChartCmsController {
  constructor(private readonly chartCmsService: ChartCmsService) {}

  @Get()
  async getData() {
    return this.chartCmsService.findAll();
  }
}
