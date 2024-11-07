import { Module } from '@nestjs/common';
import { UserDeviceService } from './user_device.service';
import { UserDeviceController } from './user_device.controller';

@Module({
  providers: [UserDeviceService],
  controllers: [UserDeviceController],
  exports: [UserDeviceService],
})
export class UserDeviceModule {}
