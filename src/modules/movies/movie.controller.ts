import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getAllMovies() {
    return this.movieService.getAllMovies();
  }

  @Get(':id')
  getMovieById(@Param('id') id: number) {
    return this.movieService.getMovieById(id);
  }

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.createMovie(createMovieDto);
  }

  @Put(':id')
  updateMovie(@Param('id') id: number, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.updateMovie(id, updateMovieDto);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: number) {
    return this.movieService.deleteMovie(id);
  }
}
