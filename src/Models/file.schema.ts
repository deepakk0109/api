// src/file/schemas/file.schema.ts
import { Schema, Document } from 'mongoose';

export interface File extends Document {
  filename: string;
  contentType: string;
  length: number;
  uploadDate: Date;
}

export const FileSchema = new Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  length: { type: Number, required: true },
  uploadDate: { type: Date, default: Date.now },
});
