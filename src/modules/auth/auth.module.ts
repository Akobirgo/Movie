import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../users';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService],
})
export class AuthModule {}
