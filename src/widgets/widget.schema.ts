/* eslint-disable prettier/prettier */
// src/widgets/schemas/widget.schema.ts
// import { Schema, Document } from 'mongoose';

// export const WidgetSchema = new Schema({
//   type: { type: String, required: true },
//   content: { type: String, default: '' },
//   x: { type: Number, required: true },
//   y: { type: Number, required: true },
//   width: { type: Number, required: true },
//   height: { type: Number, required: true },
//   id: {type: String, required:true }
// });

// export interface Widget extends Document {
//   type: string;
//   content: string;
//   x: number;
//   y: number;
//   width: number;
//   height: number;
//   id: string;
// }

// export const WidgetSchema = new Schema({
//   type: { type: String },
//   content: { type: String, default: '' },
//   x: { type: Number},
//   y: { type: Number },
//   width: { type: Number },
//   height: { type: Number},
//   id: {type: String }
// });

// /* eslint-disable prettier/prettier */
// import { Schema, Document } from 'mongoose';

// export const WidgetSchema = new Schema({
//   type: String,
//   content: String,
//   x: Number,
//   y: Number,
//   rows: Number,
//   cols: Number
// });

// export interface Widget extends Document {
//   type: string;
//   content: string;
//   x: number;
//   y: number;
//   rows: number;
//   cols: number;
// }
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WidgetDocument = Widget & Document;

@Schema()
export class Widget {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  x: number;

  @Prop({ required: true })
  y: number;

  @Prop({ required: true })
  w: number;

  @Prop({ required: true })
  h: number;

  @Prop({ required: true })
  autoPosition: boolean;

  @Prop({ required: true })
  type: string;

  @Prop({default: '' })
  content: string;
}

export const WidgetSchema = SchemaFactory.createForClass(Widget);
