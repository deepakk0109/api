// src/file/file.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { FileSchema } from '../Models/file.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'File', schema: FileSchema }]),
  ],
  providers: [FileService],
  controllers: [FileController],
})
export class FileModule {}
