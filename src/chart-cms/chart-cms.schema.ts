import { Schema, Document } from 'mongoose';

export interface ParameterValue {
  timestamp: number;
  value: number;
}

export interface Parameter {
  name: string;
  values: ParameterValue[];
}

export interface Device {
  name: string;
  parameters: Parameter[];
}

export interface Block {
  name: string;
  devices: Device[];
}

export interface Plant {
  name: string;
  blocks: Block[];
}

export interface Organization {
  name: string;
  plants: Plant[];
}

export interface Data extends Document {
  name: string;
  organizations: Organization[];
}

export const chartCmsSchema = new Schema({
  name: String,
  organizations: [{
    name: String,
    plants: [{
      name: String,
      blocks: [{
        name: String,
        devices: [{
          name: String,
          parameters: [{
            name: String,
            values: [{
              timestamp: Number,
              value: Number
            }]
          }]
        }]
      }]
    }]
  }]
});
