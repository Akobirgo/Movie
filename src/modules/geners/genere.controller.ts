import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { GenereService } from './genere.service';
import { CreateGenereDto } from './dtos/create-genere.dto';
import { UpdateGenereDto } from './dtos/update-genere.dto';

@Controller('generes')
export class GenereController {
  constructor(private readonly genereService: GenereService) {}

  @Get()
  getAllGeneres() {
    return this.genereService.getAllGeneres();
  }

  @Post()
  createGenere(@Body() createGenereDto: CreateGenereDto) {
    return this.genereService.createGenere(createGenereDto);
  }

  @Put(':id')
  updateGenere(@Param('id') id: number, @Body() updateGenereDto: UpdateGenereDto) {
    return this.genereService.updateGenere(id, updateGenereDto);
  }
}
