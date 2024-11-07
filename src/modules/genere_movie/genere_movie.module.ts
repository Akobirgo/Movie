import { Module } from '@nestjs/common';
import { GenereMovieService } from './genere_movie.service';
import { GenereMovieController } from './genere_movie.controller';

@Module({
  providers: [GenereMovieService],
  controllers: [GenereMovieController],
  exports: [GenereMovieService],
})
export class GenereMovieModule {}
