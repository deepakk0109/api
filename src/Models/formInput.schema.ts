import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class formInput extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: false, default: '' })
  value: string;

  @Prop({ type: [String], required: false, default: [] })
  options: string[];

  @Prop({ required: false, default: '' })
  fileType: string;
}

export const formInputSchema = SchemaFactory.createForClass(formInput);


// import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class formInput extends Document {
//   @Prop({ required: true })
//   i: string;

//   @Prop({ required: false, default: '' })
//   label: string;

//   @Prop({ required: false, default: '' })
//   value: string;

// }
// export const  formInputSchema = SchemaFactory.createForClass(formInput);
