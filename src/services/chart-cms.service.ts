import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Data } from 'src/chart-cms/chart-cms.schema';
// Import your schema

@Injectable()
export class ChartCmsService {
  constructor(@InjectModel('chart-cms') private readonly dataModel: Model<Data>) {}

  async findAll(): Promise<Data[]> {
    return this.dataModel.find().exec();
  }
}
