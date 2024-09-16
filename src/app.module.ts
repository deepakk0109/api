/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WidgetsModule } from './widgets/widgets.module';
import { LayoutModule } from './layouts/layouts.module';
import { ChartCmsModule } from './chart-cms/chart-cms.module';
import { FileModule } from './file/file.module';


@Module({
  imports: [
    // MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forRoot('mongodb://localhost:27017/mydatabase'),
    WidgetsModule,
    LayoutModule,
    ChartCmsModule,
    FileModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}