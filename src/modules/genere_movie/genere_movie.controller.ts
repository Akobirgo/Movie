import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GenereMovieService } from './genere_movie.service';
import { CreateGenereMovieDto } from './dtos/create-genere_movie.dto';
import { UpdateGenereMovieDto } from './dtos/update-genere_movie.dto';

@Controller('genere-movies')
export class GenereMovieController {
  constructor(private readonly genereMovieService: GenereMovieService) {}

  @Post()
  create(@Body() createGenereMovieDto: CreateGenereMovieDto) {
    return this.genereMovieService.create(createGenereMovieDto);
  }

  @Get()
  findAll() {
    return this.genereMovieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genereMovieService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGenereMovieDto: UpdateGenereMovieDto) {
    return this.genereMovieService.update(+id, updateGenereMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genereMovieService.remove(+id);
  }
}
