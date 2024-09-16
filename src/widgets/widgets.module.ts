/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WidgetsController } from './widgets.controller';
import { WidgetsService } from './widgets.service';
import { WidgetSchema } from './widget.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Widget', schema: WidgetSchema }])],
  controllers: [WidgetsController],
  providers: [WidgetsService],
})
export class WidgetsModule {}


