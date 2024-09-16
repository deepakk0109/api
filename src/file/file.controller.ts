import { Controller, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { FileService } from './file.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads', // Ensure this directory exists
      filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        callback(null, uniqueSuffix + extname(file.originalname));
      }
    }),
    fileFilter: (req, file, callback) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new HttpException('Only image files are allowed!', HttpStatus.BAD_REQUEST), false);
      }
      callback(null, true);
    }
  }))
  async uploadFile(@UploadedFile() file, @Res() res: Response) {
    if (!file) {
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
    }

    try {
      // Read the file from disk
      const fileBuffer = fs.readFileSync(`./uploads/${file.filename}`);

      // Call the uploadFile method with Buffer, filename, and contentType
      const result = await this.fileService.uploadFile(fileBuffer, file.originalname, file.mimetype);
      await this.fileService.saveFileMetadata(result.fileId, file.originalname, file.mimetype, file.size);
      return res.status(HttpStatus.OK).json({ success: true, fileId: result.fileId });
    } catch (error) {
      console.error('Upload error:', error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Failed to upload file' });
    }
  }
}



// import { Controller, Post, UploadedFile, UseInterceptors, HttpException, HttpStatus, Res } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { Response } from 'express';
// import { FileService } from './file.service';
// import { diskStorage } from 'multer';
// import { extname } from 'path';

// @Controller('files')
// export class FileController {
//   constructor(private readonly fileService: FileService) {}

//   @Post('upload')
//   @UseInterceptors(FileInterceptor('file', {
//     storage: diskStorage({
//       destination: './uploads', // Ensure this directory exists
//       filename: (req, file, callback) => {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         callback(null, uniqueSuffix + extname(file.originalname));
//       }
//     }),
//     fileFilter: (req, file, callback) => {
//       if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//         return callback(new HttpException('Only image files are allowed!', HttpStatus.BAD_REQUEST), false);
//       }
//       callback(null, true);
//     }
//   }))
//   async uploadFile(@UploadedFile() file, @Res() res: Response) {
//     if (!file) {
//       throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
//     }

//     try {
//       // Read the file from disk
//       const fs = require('fs');
//       const fileBuffer = fs.readFileSync(`./uploads/${file.filename}`);

//       // Call the uploadFile method with Buffer, filename, and contentType
//       const result = await this.fileService.uploadFile(fileBuffer, file.originalname, file.mimetype);
//       await this.fileService.saveFileMetadata(result.fileId, file.originalname, file.mimetype, file.size);
//       return res.status(HttpStatus.OK).json({ success: true, fileId: result.fileId });
//     } catch (error) {
//       console.error('Upload error:', error);
//       return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Failed to upload file' });
//     }
//   }
// }
