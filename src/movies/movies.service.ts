import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from 'src/dtos/movie';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieRepository.findOne({ where: { id } });
  }

  async create(movie: CreateMovieDto): Promise<Movie> {
    const createdMovie = await this.movieRepository.save(movie);
    return createdMovie;
  }

  async update(id: string, movie: CreateMovieDto): Promise<Movie> {
    await this.movieRepository.update(id, movie);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.movieRepository.delete(id);
  }
}
