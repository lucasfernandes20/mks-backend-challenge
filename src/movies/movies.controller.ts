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
import { CreateMovieDto, MovieDto } from 'src/movies/movie.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'Listagem de filmes',
    type: [MovieDto],
  })
  async findAll(@Res() response: Response): Promise<Response<MovieDto[]>> {
    return response.status(200).json(await this.moviesService.findAll());
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'Detalhes de um filme',
    type: MovieDto,
  })
  async findOne(
    @Res() response: Response,
    @Param('id') id: string,
  ): Promise<Response<MovieDto>> {
    return response.status(200).json(await this.moviesService.findOne(id));
  }

  @Post()
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'Filme criado com sucesso',
    type: MovieDto,
  })
  async create(
    @Res() response: Response,
    @Body() movie: CreateMovieDto,
  ): Promise<Response<MovieDto>> {
    try {
      const createdMovie = await this.moviesService.create(movie);
      return response.status(201).json(createdMovie);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  @Put(':id')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'Filme atualizado com sucesso',
    type: MovieDto,
  })
  async update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() movie: CreateMovieDto,
  ): Promise<Response<MovieDto[]>> {
    try {
      const updatedMovie = await this.moviesService.update(id, movie);
      return response.status(200).json(updatedMovie);
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'Filme removido com sucesso',
    type: null,
  })
  async remove(
    @Res() response: Response,
    @Param('id') id: string,
  ): Promise<Response<void>> {
    try {
      await this.moviesService.remove(id);
      return response.status(204).send();
    } catch (error) {
      return response.status(404).json({ message: error.message });
    }
  }
}
