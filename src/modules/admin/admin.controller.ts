import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto } from './dtos';
import { Admin } from './models/admin.model';

@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getAllAdmins(): Admin[] {
    return this.adminService.getAllAdmins();
  }

  @Get(':id')
  getAdminById(@Param('id') id: number): Admin | undefined {
    return this.adminService.getAdminById(Number(id));
  }

  @Post()
  createAdmin(@Body() createAdminDto: CreateAdminDto): Admin {
    return this.adminService.createAdmin(createAdminDto);
  }

  @Put(':id')
  updateAdmin(@Param('id') id: number, @Body() updateAdminDto: UpdateAdminDto): Admin | undefined {
    return this.adminService.updateAdmin(Number(id), updateAdminDto);
  }

  @Delete(':id')
  deleteAdmin(@Param('id') id: number): boolean {
    return this.adminService.deleteAdmin(Number(id));
  }
}
