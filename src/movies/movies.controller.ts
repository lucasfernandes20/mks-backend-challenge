import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Response } from 'express';
import { CreateMovieDto } from 'src/dtos/movie';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async findAll(@Res() response: Response) {
    return response.status(200).json(await this.moviesService.findAll());
  }

  @Get(':id')
  async findOne(@Res() response: Response, @Param('id') id: string) {
    return response.status(200).json(await this.moviesService.findOne(id));
  }

  @Post()
  async create(@Res() response: Response, @Body() movie: CreateMovieDto) {
    const createdMovie = await this.moviesService.create(movie);
    return response.status(201).json(createdMovie);
  }

  @Put(':id')
  async update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() movie: CreateMovieDto,
  ) {
    const updatedMovie = await this.moviesService.update(id, movie);
    return response.status(200).json(updatedMovie);
  }

  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    await this.moviesService.remove(id);
    return response.status(204).send();
  }
}
