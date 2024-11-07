import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UserDeviceService } from './user_device.service';
import { CreateUserDeviceDto } from './dtos/create-user_device.dto';
import { UpdateUserDeviceDto } from './dtos/update-user_device.dto';

@Controller('user-devices')
export class UserDeviceController {
  constructor(private readonly userDeviceService: UserDeviceService) {}

  @Post()
  create(@Body() createUserDeviceDto: CreateUserDeviceDto) {
    return this.userDeviceService.create(createUserDeviceDto);
  }

  @Get()
  findAll() {
    return this.userDeviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDeviceService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDeviceDto: UpdateUserDeviceDto) {
    return this.userDeviceService.update(+id, updateUserDeviceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDeviceService.remove(+id);
  }
}
