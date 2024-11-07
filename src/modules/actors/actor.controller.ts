import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto, UpdateActorDto } from './dtos';
import { Actor } from './models/actor.model';

@Controller('actors')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Get()
  getAllActors(): Actor[] {
    return this.actorService.getAllActors();
  }

  @Get(':id')
  getActorById(@Param('id') id: number): Actor | undefined {
    return this.actorService.getActorById(Number(id));
  }

  @Post()
  createActor(@Body() createActorDto: CreateActorDto): Actor {
    return this.actorService.createActor(createActorDto);
  }

  @Put(':id')
  updateActor(@Param('id') id: number, @Body() updateActorDto: UpdateActorDto): Actor | undefined {
    return this.actorService.updateActor(Number(id), updateActorDto);
  }

  @Delete(':id')
  deleteActor(@Param('id') id: number): boolean {
    return this.actorService.deleteActor(Number(id));
  }
}
