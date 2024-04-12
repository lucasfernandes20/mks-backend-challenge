import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Response } from 'express';
import { MovieDto } from 'src/dtos/createMovie';

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
  async create(@Res() response: Response, @Body() movie: MovieDto) {
    const createdMovie = await this.moviesService.create(movie);
    return response.status(201).json(createdMovie);
  }
}
