import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('uploads')
export class UploadsController {
  @Post('serial-plate')
  @UseInterceptors(FileInterceptor('file'))
  async serialPlate(@UploadedFile() file: Express.Multer.File) {
    // In dev, pretend OCR found a serial like 'SN123'
    return { serial: 'SN123', bytes: file?.buffer?.length || 0 }
  }
}
