import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { File } from '../Models/file.schema';
import { GridFSBucket, MongoClient } from 'mongodb';

@Injectable()
export class FileService implements OnModuleInit {
  private readonly logger = new Logger(FileService.name);
  private bucket: GridFSBucket;

  constructor(@InjectModel('File') private readonly fileModel: Model<File>) {}

  async onModuleInit() {
    try {
      const client = new MongoClient('mongodb://localhost:27017');
      await client.connect();
      this.bucket = new GridFSBucket(client.db(), { bucketName: 'files' });
      this.logger.log('MongoDB connected and GridFSBucket initialized');
    } catch (err) {
      this.logger.error('Failed to connect to MongoDB', err.stack);
      throw err;
    }
  }

  async uploadFile(file: Buffer, filename: string, contentType: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.bucket) {
        reject(new Error('GridFSBucket is not initialized'));
        return;
      }
      const uploadStream = this.bucket.openUploadStream(filename, { contentType });
      uploadStream.on('error', reject);
      uploadStream.on('finish', () => resolve({ fileId: uploadStream.id }));
      uploadStream.end(file);
    });
  }

  async saveFileMetadata(fileId: string, filename: string, contentType: string, length: number): Promise<File> {
    const fileMetadata = new this.fileModel({
      fileId, // Store the fileId returned from GridFS
      filename,
      contentType,
      length,
    });
    return fileMetadata.save();
  }

  async findFileById(id: string): Promise<File> {
    return this.fileModel.findById(id).exec();
  }

  async deleteFileMetadata(id: string): Promise<any> {
    return this.fileModel.findByIdAndDelete(id).exec();
  }
}


// import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { File } from '../Models/file.schema';
// import { GridFSBucket, MongoClient } from 'mongodb';

// @Injectable()
// export class FileService implements OnModuleInit {
//   private readonly logger = new Logger(FileService.name);
//   private bucket: GridFSBucket;

//   constructor(@InjectModel('File') private readonly fileModel: Model<File>) {}

//   async onModuleInit() {
//     try {
//       const client = new MongoClient('mongodb://localhost:27017');
//       await client.connect();
//       this.bucket = new GridFSBucket(client.db(), { bucketName: 'files' });
//       this.logger.log('MongoDB connected and GridFSBucket initialized');
//     } catch (err) {
//       this.logger.error('Failed to connect to MongoDB', err.stack);
//       throw err;
//     }
//   }

//   async uploadFile(file: Buffer, filename: string, contentType: string): Promise<any> {
//     return new Promise((resolve, reject) => {
//       if (!this.bucket) {
//         reject(new Error('GridFSBucket is not initialized'));
//         return;
//       }
//       const uploadStream = this.bucket.openUploadStream(filename, { contentType });
//       uploadStream.on('error', reject);
//       uploadStream.on('finish', () => resolve({ fileId: uploadStream.id }));
//       uploadStream.end(file);
//     });
//   }

//   async saveFileMetadata(fileId: string, filename: string, contentType: string, length: number): Promise<File> {
//     const fileMetadata = new this.fileModel({
//       fileId, // Store the fileId returned from GridFS
//       filename,
//       contentType,
//       length,
//     });
//     return fileMetadata.save();
//   }

//   async findFileById(id: string): Promise<File> {
//     return this.fileModel.findById(id).exec();
//   }

//   async deleteFileMetadata(id: string): Promise<any> {
//     return this.fileModel.findByIdAndDelete(id).exec();
//   }
// }
