import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Checkbox extends Document {
  @Prop({ required: false, default: '' })
  checkboxLabel: string;

  @Prop({ required: false, default: false })
  checkboxFlag: boolean;

  @Prop({ required: false, default: '' })
  checkboxSize: string;

  @Prop({ required: false, default: '' })
  checkboxLabelFontSize: string;
}

export const CheckboxSchema = SchemaFactory.createForClass(Checkbox);
