import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';


@Injectable()
export class FileService {
  private readonly uploadPath = join(__dirname, '..', 'uploads');

  constructor() {
    if (!existsSync(this.uploadPath)) {
      mkdirSync(this.uploadPath, { recursive: true });
    }
  }

  uploadFile(file: Express.Multer.File): string {
    const filePath = join(this.uploadPath, file.originalname);
    writeFileSync(filePath, file.buffer);
    return `File uploaded successfully: ${file.originalname}`;
  }

  getFilePath(fileName: string): string {
    const filePath = join(this.uploadPath, fileName);
    if (!existsSync(filePath)) {
      throw new Error('File not found');
    }
    return filePath;
  }
}
