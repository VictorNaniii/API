import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movies.dto';
import { UpdateMovieDto } from './dto/update-movies.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }
  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie wit id: ${id} NOT FOUND`);
    }
    return movie;
  }
  remove(id: number): string {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const movie = this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return `Movie with id ${id} has been removed.`;
  }

  create(movieData: CreateMovieDto) {
    return this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
      generes: [],
    });
  }
  patch(id: number, movieData: UpdateMovieDto) {
    const movie = this.getOne(id);
    this.remove(id);
    this.movies.push({ ...movie, ...movieData });
  }
}
