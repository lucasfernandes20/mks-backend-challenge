import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from 'src/movies/movie.dto';

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
    if (movie.imdbRating < 0 || movie.imdbRating > 10) {
      throw new ConflictException('Avaliação do IMDB deve ser entre 0 e 10.');
    }

    const existMovie = await this.movieRepository.findOne({
      where: { title: movie.title },
    });
    if (existMovie) {
      throw new ConflictException('Filme já cadastrado.');
    }

    const createdMovie = await this.movieRepository.save(movie);
    return createdMovie;
  }

  async update(id: string, movie: CreateMovieDto): Promise<Movie> {
    const existMovie = await this.findOne(id);
    if (!existMovie) {
      throw new NotFoundException('Filme não encontrado.');
    }
    await this.movieRepository.update(id, movie);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const existMovie = await this.findOne(id);
    if (!existMovie) {
      throw new NotFoundException('Filme não encontrado.');
    }
    await this.movieRepository.delete(id);
  }
}
