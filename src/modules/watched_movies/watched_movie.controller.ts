import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WatchedMovieService } from './watched_movie.service';
import { CreateWatchedMovieDto } from './dtos/create-watched_movie.dto';
import { UpdateWatchedMovieDto } from './dtos/update-watched_movie.dto';

@Controller('watched-movies')
export class WatchedMovieController {
  constructor(private readonly watchedMovieService: WatchedMovieService) {}

  @Post()
  create(@Body() createWatchedMovieDto: CreateWatchedMovieDto) {
    return this.watchedMovieService.create(createWatchedMovieDto);
  }

  @Get()
  findAll() {
    return this.watchedMovieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.watchedMovieService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWatchedMovieDto: UpdateWatchedMovieDto) {
    return this.watchedMovieService.update(+id, updateWatchedMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.watchedMovieService.remove(+id);
  }
}
