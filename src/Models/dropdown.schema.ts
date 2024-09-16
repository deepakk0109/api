import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Dropdown extends Document {
  @Prop({ required: false, default: '' })
  dropdownSource: string;

  @Prop({ required: false, type: [String], default: [] })
  dropdownOptions: string[];

  @Prop({ required: false, default: '' })
  dropdownUrl: string;

  @Prop({ required: false, default: '' })
  dropdownFontSize: string;
}

export const DropdownSchema = SchemaFactory.createForClass(Dropdown);
