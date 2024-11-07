import { Module } from '@nestjs/common';
import { WatchedMovieService } from './watched_movie.service';
import { WatchedMovieController } from './watched_movie.controller';

@Module({
  providers: [WatchedMovieService],
  controllers: [WatchedMovieController],
  exports: [WatchedMovieService],
})
export class WatchedMovieModule {}
