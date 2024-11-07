import { Module } from '@nestjs/common';
import { GenereService } from './genere.service';
import { GenereController } from './genere.controller';

@Module({
  controllers: [GenereController],
  providers: [GenereService],
  exports: [GenereService],
})
export class GenereModule {}
