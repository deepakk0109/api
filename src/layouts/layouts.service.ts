import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Layout, LayoutDocument } from './dto/layout.dto';

@Injectable()
export class LayoutService {
    constructor(@InjectModel('layout') private readonly layoutModel: Model<LayoutDocument>) {}

  async create(layout: Layout): Promise<Layout> {
    const newLayout = new this.layoutModel(layout);
    return newLayout.save();
  }

  async createMany(layouts: Layout[]): Promise<Layout[]> {
    return this.layoutModel.insertMany(layouts);
  }

  async findAll(): Promise<Layout[]> {
    return this.layoutModel.find().exec();
  }

  async findOne(id: string): Promise<Layout> {
    return this.layoutModel.findById(id).exec();
  }

  async update(id: string, layout: Layout): Promise<Layout> {
    return this.layoutModel.findByIdAndUpdate(id, layout, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.layoutModel.findByIdAndDelete(id).exec();
  }
}



// /* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Layout, LayoutDocument } from './dto/layout.dto';

// @Injectable()
// export class LayoutService {
//     constructor(@InjectModel('layout') private readonly layoutModel: Model<LayoutDocument>) {}

//   async create(layout: Layout): Promise<Layout> {
//     const newLayout = new this.layoutModel(layout);
//     return newLayout.save();
//   }

//   async findAll(): Promise<Layout[]> {
//     return this.layoutModel.find().exec();
//   }

//   async findOne(id: string): Promise<Layout> {
//     return this.layoutModel.findById(id).exec();
//   }

//   async update(id: string, layout: Layout): Promise<Layout> {
//     return this.layoutModel.findByIdAndUpdate(id, layout, { new: true }).exec();
//   }

//   async delete(id: string): Promise<any> {
//     return this.layoutModel.findByIdAndDelete(id).exec();
//   }
// }
