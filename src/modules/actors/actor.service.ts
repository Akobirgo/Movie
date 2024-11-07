import { Injectable } from '@nestjs/common';
import { CreateActorDto, UpdateActorDto } from './dtos';
import { Actor } from './models/actor.model';

@Injectable()
export class ActorService {
  private actors: Actor[] = [];

  getAllActors(): Actor[] {
    return this.actors;
  }

  getActorById(id: number): Actor | undefined {
    return this.actors.find((actor) => actor.id === id);
  }

  createActor(createActorDto: CreateActorDto): Actor {
    const newActor: Actor = {
      id: this.actors.length + 1,
      ...createActorDto,
    };
    this.actors.push(newActor);
    return newActor;
  }

  updateActor(id: number, updateActorDto: UpdateActorDto): Actor | undefined {
    const actorIndex = this.actors.findIndex((actor) => actor.id === id);
    if (actorIndex === -1) return undefined;

    this.actors[actorIndex] = { ...this.actors[actorIndex], ...updateActorDto };
    return this.actors[actorIndex];
  }

  deleteActor(id: number): boolean {
    const actorIndex = this.actors.findIndex((actor) => actor.id === id);
    if (actorIndex === -1) return false;

    this.actors.splice(actorIndex, 1);
    return true;
  }
}
