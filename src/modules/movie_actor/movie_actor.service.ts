import { Injectable } from '@nestjs/common';
import { CreateMovieActorDto } from './dtos/create-movie_actor.dto';
import { UpdateMovieActorDto } from './dtos/update-movie_actor.dto';
import { MovieActor } from './models/movie_actor.model';

@Injectable()
export class MovieActorService {
  private movieActors: MovieActor[] = [];

  create(createMovieActorDto: CreateMovieActorDto): MovieActor {
    const newMovieActor = { id: this.movieActors.length + 1, ...createMovieActorDto };
    this.movieActors.push(newMovieActor);
    return newMovieActor;
  }

  findAll(): MovieActor[] {
    return this.movieActors;
  }

  findOne(id: number): MovieActor | undefined {
    return this.movieActors.find(actor => actor.id === id);
  }

  update(id: number, updateMovieActorDto: UpdateMovieActorDto): MovieActor | undefined {
    const actorIndex = this.movieActors.findIndex(actor => actor.id === id);
    if (actorIndex === -1) return undefined;

    this.movieActors[actorIndex] = { ...this.movieActors[actorIndex], ...updateMovieActorDto };
    return this.movieActors[actorIndex];
  }

  remove(id: number): boolean {
    const actorIndex = this.movieActors.findIndex(actor => actor.id === id);
    if (actorIndex === -1) return false;

    this.movieActors.splice(actorIndex, 1);
    return true;
  }
}
