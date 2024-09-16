/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { LayoutSchema } from './dto/layout.dto';
// import { LayoutController } from './layouts.controller';
// import { LayoutService } from './layouts.service';

// @Module({
//   imports: [MongooseModule.forFeature([{ name: 'layout', schema: LayoutSchema }])],
//   controllers: [LayoutController],
//   providers: [LayoutService],
// })
// export class LayoutModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {LayoutSchema } from './dto/layout.dto';
import { LayoutService } from './layouts.service';
import { LayoutController } from './layouts.controller';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'layout', schema: LayoutSchema }])
  ],
  providers: [LayoutService],
  controllers: [LayoutController],
})
export class LayoutModule {}
