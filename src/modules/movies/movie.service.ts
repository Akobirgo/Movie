import { Injectable } from '@nestjs/common';
import { Movie } from './models/movie.model';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';

@Injectable()
export class MovieService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find(movie => movie.id === id);
  }

  createMovie(createMovieDto: CreateMovieDto): Movie {
    const newMovie: Movie = {
      id: this.movies.length + 1, // Avtomatik ID yaratish
      ...createMovieDto,
    };
    this.movies.push(newMovie);
    return newMovie;
  }

  updateMovie(id: number, updateMovieDto: UpdateMovieDto): Movie {
    const movieIndex = this.movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) {
      throw new Error('Movie not found');
    }
    const updatedMovie = { ...this.movies[movieIndex], ...updateMovieDto };
    this.movies[movieIndex] = updatedMovie;
    return updatedMovie;
  }

  deleteMovie(id: number): boolean {
    const movieIndex = this.movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) {
      throw new Error('Movie not found');
    }
    this.movies.splice(movieIndex, 1);
    return true;
  }
}
