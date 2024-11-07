import { Injectable } from '@nestjs/common';
import { CreateAdminDto, UpdateAdminDto } from './dtos';
import { Admin } from './models/admin.model';

@Injectable()
export class AdminService {
  private admins: Admin[] = [];

  getAllAdmins(): Admin[] {
    return this.admins;
  }

  getAdminById(id: number): Admin | undefined {
    return this.admins.find((admin) => admin.id === id);
  }

  createAdmin(createAdminDto: CreateAdminDto): Admin {
    const newAdmin: Admin = {
      id: this.admins.length + 1,
      ...createAdminDto,
    };
    this.admins.push(newAdmin);
    return newAdmin;
  }

  updateAdmin(id: number, updateAdminDto: UpdateAdminDto): Admin | undefined {
    const adminIndex = this.admins.findIndex((admin) => admin.id === id);
    if (adminIndex === -1) return undefined;

    this.admins[adminIndex] = { ...this.admins[adminIndex], ...updateAdminDto };
    return this.admins[adminIndex];
  }

  deleteAdmin(id: number): boolean {
    const adminIndex = this.admins.findIndex((admin) => admin.id === id);
    if (adminIndex === -1) return false;

    this.admins.splice(adminIndex, 1);
    return true;
  }
}
