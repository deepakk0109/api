import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { formInput, formInputSchema } from './formInput.schema';
// import { Checkbox, CheckboxSchema } from './checkbox.schema';
// import { Dropdown, DropdownSchema } from './dropdown.schema';


@Schema()
export class DropdownOption {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  value: string;
}

export const DropdownOptionSchema = SchemaFactory.createForClass(DropdownOption);


@Schema()
export class RadioOption {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true }) // Change 'value' to 'label'
  label: string;
}

export const RadioOptionSchema = SchemaFactory.createForClass(RadioOption);

@Schema()
export class Element extends Document {
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

  @Prop({ required: true })
  type: string;

  @Prop({ required: false, default: '' })
  content: string;

  @Prop({ required: false, default: false })
  moved: boolean;

  @Prop({ required: false, default: true })
  isDraggable: boolean;

  @Prop({ required: false, default: true })
  isResizable: boolean;

  @Prop({ required: false, default: '' })
  chartType: string;

  @Prop({ required: false, default: '' })
  xorganization: string;

  @Prop({ required: false, default: '' })
  xplant: string;

  @Prop({ required: false, default: '' })
  xblock: string;

  @Prop({ required: false, default: '' })
  xdevice: string;

  @Prop({ required: false, default: '' })
  xparameter: string;

  @Prop({ required: false, default: '' })
  yorganization: string;

  @Prop({ required: false, default: '' })
  yplant: string;

  @Prop({ required: false, default: '' })
  yblock: string;

  @Prop({ required: false, default: '' })
  ydevice: string;

  @Prop({ required: false, default: '' })
  yparameter: string;

  @Prop({ required: false, default: '' })
  formBackendLink: string;

  @Prop({ type: [formInputSchema], default: [] })
  formInputs: formInput[];

  @Prop({ required: false, default: '' })
  tableDataUrl: string;

  @Prop({ required: false, default: '' })
  checkboxLabel: string;

  @Prop({ required: false, default: false })
  checkboxFlag: boolean;

  @Prop({ required: false, default: '' })
  checkboxSize: string;

  @Prop({ required: false, default: '' })
  checkboxLabelFontSize: string;

  @Prop({ required: false, default: '' })
  dropdownLabel: string;
  
  @Prop({ required: false, default: '' })
  dropdownSource: string;

  @Prop({ type: [DropdownOptionSchema], default: [] })
  dropdownOptions: DropdownOption[];

  @Prop({ required: false, default: '' })
  dropdownUrl: string;

  @Prop({ required: false, default: '' })
  dropdownFontSize: string;

  @Prop({ required: false, default: '' })
  imageDataUrl: string;

  @Prop({ required: false, default: '' })
  radioLabel: string;

  @Prop({ type: [RadioOptionSchema], default: [] })
  radioOptions: RadioOption[];

  @Prop({ required: false, default: '' })
  selectedRadioOption: string;

  @Prop({ required: false, default: '' })
  radiodataSource: string;

  @Prop({ required: false, default: '' })
  radioApiUrl: string;

  @Prop({ required: false, default: '' })
  radioFontSize: string;

  // New properties for file widgets
  @Prop({ required: false, default: '' })
  fileBackendUrl: string;

  @Prop({ 
    required: false, 
    type: Object, 
    default: {
    //   backgroundColor: '#007bff',
    //   color: '#fff',
    //   padding: '10px 15px',
    //   border: 'none',
    //   borderRadius: '5px',
    }
  })
  Styles: {
    // backgroundColor: string;
    // color: string;
    // padding: string;
    // border: string;
    // borderRadius: string;
  };
  @Prop({ required: false, default: '' })
  selectedDate: string;

  @Prop({ required: false, default: '' })
  textEditorContent: string;

  @Prop({required:false,default:''})
  buttonLabel:string;

  @Prop({required:false,default:''})
  buttonOnClickAction:string;

  @Prop({ required: false, default: '' })
  lineHeight: string;

  @Prop({required:false,default:''})
  lineWidth:string;

  @Prop({required:false,default:''})
  lineColor:string;

  @Prop({required:false,default:''})
  lineRotation:string;
  
  

}

export const ElementSchema = SchemaFactory.createForClass(Element);
