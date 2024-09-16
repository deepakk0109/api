/* eslint-disable no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Widget } from './widget.schema';

@Injectable()
export class WidgetsService {
  constructor(
    @InjectModel('Widget') private readonly widgetModel: Model<Widget>,
  ) {}

  // Create single widget
  async create(widget: Widget): Promise<Widget> {
    const newWidget = new this.widgetModel(widget);
    return newWidget.save();
  }

  // Create multiple widgets
  async createMany(widgets: Widget[]): Promise<Widget[]> {
    return this.widgetModel.insertMany(widgets);
  }

  // Find all widgets
  async findAll(): Promise<Widget[]> {
    return this.widgetModel.find().exec();
  }

  // Find a single widget by ID
  async findOne(id: string): Promise<Widget | null> {
    return this.widgetModel.findById(id).exec();
  }

  // Update a single widget by ID
  async update(id: string, widget: Widget): Promise<Widget | null> {
    return this.widgetModel.findByIdAndUpdate(id, widget, { new: true }).exec();
  }

  // Delete a single widget by ID
  async delete(id: string): Promise<Widget | null> {
    return this.widgetModel.findByIdAndDelete(id).exec();
  }
}

// /* eslint-disable no-unused-vars */
// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Widget } from './widget.schema';

// @Injectable()
// export class WidgetsService {
//   constructor(
//     @InjectModel('Widget') private readonly widgetModel: Model<Widget>,
//   ) {}

//   async create(widget: Widget[]): Promise<Widget> {
//     const newWidget = new this.widgetModel(widget);
//     return newWidget.save();
//   }

//   async findAll(): Promise<Widget[]> {
//     return this.widgetModel.find().exec();
//   }

//   async findOne(id: string): Promise<Widget> {
//     return this.widgetModel.findById(id).exec();
//   }

//   async update(id: string, widget: Widget): Promise<Widget> {
//     return this.widgetModel.findByIdAndUpdate(id, widget, { new: true }).exec();
//   }

//   async delete(id: string): Promise<Widget> {
//     return this.widgetModel.findByIdAndDelete(id).exec();
//   }
// }
