import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Element, ElementSchema } from '../../models/element.schema';
@Schema()
class LayoutItem extends Document {
  @Prop({ required: true })
  i: string;

  @Prop({ required: true })
  x: number;

  @Prop({ required: true })
  y: number;

  @Prop({ required: true })
  w: number;

  @Prop({ required: true })
  h: number;

  @Prop({ required: true })
  static: boolean;

  @Prop({ type: [ElementSchema], default: [] })
  elements: Element[];

  @Prop({ required: false, default: false })
  moved: boolean;
}

const LayoutItemSchema = SchemaFactory.createForClass(LayoutItem);

@Schema()
export class Layout extends Document {
  @Prop({ type: [LayoutItemSchema], default: [] })
  layoutItems: LayoutItem[];
}

export type LayoutDocument = Layout & Document;
export const LayoutSchema = SchemaFactory.createForClass(Layout);
