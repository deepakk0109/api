
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChartCmsController } from './chart-cms.controller';
import { Data, chartCmsSchema} from './chart-cms.schema'
import { ChartCmsService } from 'src/services/chart-cms.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'chart-cms', schema: chartCmsSchema }])],
  providers: [ChartCmsService],
  controllers: [ChartCmsController]
})
export class ChartCmsModule {}
