import { Injectable } from '@nestjs/common';
import { CreateWatchedMovieDto } from './dtos/create-watched_movie.dto';
import { UpdateWatchedMovieDto } from './dtos/update-watched_movie.dto';
import { WatchedMovie } from './models/watched_movie.model';

@Injectable()
export class WatchedMovieService {
  private watchedMovies: WatchedMovie[] = [];

  create(createWatchedMovieDto: CreateWatchedMovieDto): WatchedMovie {
    const newWatchedMovie = { id: this.watchedMovies.length + 1, ...createWatchedMovieDto };
    this.watchedMovies.push(newWatchedMovie);
    return newWatchedMovie;
  }

  findAll(): WatchedMovie[] {
    return this.watchedMovies;
  }

  findOne(id: number): WatchedMovie | undefined {
    return this.watchedMovies.find(watchedMovie => watchedMovie.id === id);
  }

  update(id: number, updateWatchedMovieDto: UpdateWatchedMovieDto): WatchedMovie | undefined {
    const movieIndex = this.watchedMovies.findIndex(watchedMovie => watchedMovie.id === id);
    if (movieIndex === -1) return undefined;

    this.watchedMovies[movieIndex] = { ...this.watchedMovies[movieIndex], ...updateWatchedMovieDto };
    return this.watchedMovies[movieIndex];
  }

  remove(id: number): boolean {
    const movieIndex = this.watchedMovies.findIndex(watchedMovie => watchedMovie.id === id);
    if (movieIndex === -1) return false;

    this.watchedMovies.splice(movieIndex, 1);
    return true;
  }
}
