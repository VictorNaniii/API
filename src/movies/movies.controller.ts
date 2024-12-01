import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movies.dto';
import { UpdateMovieDto } from './dto/update-movies.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  @Get(':id')
  getOne(@Param('id') moveid: number): Movie {
    return this.moviesService.getOne(moveid);
  }

  @Post()
  create(@Body() CreateData: CreateMovieDto) {
    return this.moviesService.create(CreateData);
  }

  @Delete(':id')
  remove(@Param('id') moveId: number) {
    return this.moviesService.remove(moveId);
  }
  @Patch(':id')
  patch(@Param('id') moveId: number, @Body() UpdateData: UpdateMovieDto) {
    return this.moviesService.patch(moveId, UpdateData);
  }
}
