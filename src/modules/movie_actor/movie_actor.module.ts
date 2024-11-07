import { Module } from '@nestjs/common';
import { MovieActorService } from './movie_actor.service';
import { MovieActorController } from './movie_actor.controller';

@Module({
  providers: [MovieActorService],
  controllers: [MovieActorController],
  exports: [MovieActorService],
})
export class MovieActorModule {}
