import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Response } from 'express';
import { CreateMovieDto } from 'src/movies/movie.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @UseGuards(JwtGuard)
  async findAll(@Res() response: Response) {
    return response.status(200).json(await this.moviesService.findAll());
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  async findOne(@Res() response: Response, @Param('id') id: string) {
    return response.status(200).json(await this.moviesService.findOne(id));
  }

  @Post()
  @UseGuards(JwtGuard)
  async create(@Res() response: Response, @Body() movie: CreateMovieDto) {
    try {
      const createdMovie = await this.moviesService.create(movie);
      return response.status(201).json(createdMovie);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  @Put(':id')
  @UseGuards(JwtGuard)
  async update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() movie: CreateMovieDto,
  ) {
    try {
      const updatedMovie = await this.moviesService.update(id, movie);
      return response.status(200).json(updatedMovie);
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      await this.moviesService.remove(id);
      return response.status(204).send();
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }
}
