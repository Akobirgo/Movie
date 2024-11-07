import { Injectable } from '@nestjs/common';
import { CreateUserDeviceDto } from './dtos/create-user_device.dto';
import { UpdateUserDeviceDto } from './dtos/update-user_device.dto';
import { UserDevice } from './models/user_device.model';

@Injectable()
export class UserDeviceService {
  private userDevices: UserDevice[] = [];

  create(createUserDeviceDto: CreateUserDeviceDto): UserDevice {
    const newUserDevice = { id: this.userDevices.length + 1, ...createUserDeviceDto };
    this.userDevices.push(newUserDevice);
    return newUserDevice;
  }

  findAll(): UserDevice[] {
    return this.userDevices;
  }

  findOne(id: number): UserDevice | undefined {
    return this.userDevices.find(device => device.id === id);
  }

  update(id: number, updateUserDeviceDto: UpdateUserDeviceDto): UserDevice | undefined {
    const deviceIndex = this.userDevices.findIndex(device => device.id === id);
    if (deviceIndex === -1) return undefined;

    this.userDevices[deviceIndex] = { ...this.userDevices[deviceIndex], ...updateUserDeviceDto };
    return this.userDevices[deviceIndex];
  }

  remove(id: number): boolean {
    const deviceIndex = this.userDevices.findIndex(device => device.id === id);
    if (deviceIndex === -1) return false;

    this.userDevices.splice(deviceIndex, 1);
    return true;
  }
}
