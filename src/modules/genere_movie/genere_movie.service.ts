import { Injectable } from '@nestjs/common';
import { CreateGenereMovieDto } from './dtos/create-genere_movie.dto';
import { UpdateGenereMovieDto } from './dtos/update-genere_movie.dto';
import { GenereMovie } from './models/genere_movie.model';

@Injectable()
export class GenereMovieService {
  private genereMovies: GenereMovie[] = [];

  create(createGenereMovieDto: CreateGenereMovieDto): GenereMovie {
    const newGenereMovie = { id: this.genereMovies.length + 1, ...createGenereMovieDto };
    this.genereMovies.push(newGenereMovie);
    return newGenereMovie;
  }

  findAll(): GenereMovie[] {
    return this.genereMovies;
  }

  findOne(id: number): GenereMovie | undefined {
    return this.genereMovies.find(genereMovie => genereMovie.id === id);
  }

  update(id: number, updateGenereMovieDto: UpdateGenereMovieDto): GenereMovie | undefined {
    const movieIndex = this.genereMovies.findIndex(genereMovie => genereMovie.id === id);
    if (movieIndex === -1) return undefined;

    this.genereMovies[movieIndex] = { ...this.genereMovies[movieIndex], ...updateGenereMovieDto };
    return this.genereMovies[movieIndex];
  }

  remove(id: number): boolean {
    const movieIndex = this.genereMovies.findIndex(genereMovie => genereMovie.id === id);
    if (movieIndex === -1) return false;

    this.genereMovies.splice(movieIndex, 1);
    return true;
  }
}
