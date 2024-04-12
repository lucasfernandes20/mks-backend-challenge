import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { Repository } from 'typeorm';
import { MovieDto } from 'src/dtos/createMovie';

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

  async create(movie: MovieDto): Promise<Movie> {
    const createdMovie = await this.movieRepository.save(movie);
    return createdMovie;
  }
}
