import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './movie.dto';

describe('MoviesController', () => {
  let controller: MoviesController;
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [MoviesService],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of movies', async () => {
      const movies = [
        {
          id: '1',
          title: 'Movie 1',
          director: 'Director 1',
          description: 'Description 1',
          year: 2000,
          imdbRating: 7.5,
          bannerUrl: 'url1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          title: 'Movie 2',
          director: 'Director 2',
          description: 'Description 2',
          year: 2001,
          imdbRating: 8.5,
          bannerUrl: 'url2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(movies);

      const response = await controller.findAll({});

      expect(response).toEqual(movies);
    });
  });

  describe('findOne', () => {
    it('should return a movie', async () => {
      const movie = {
        id: '1',
        title: 'Movie 1',
        director: 'Director 1',
        description: 'Description 1',
        year: 2000,
        imdbRating: 7.5,
        bannerUrl: 'url1',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(movie);

      const response = await controller.findOne({}, '1');

      expect(response).toEqual(movie);
    });
  });

  describe('create', () => {
    it('should create a new movie', async () => {
      const movie: CreateMovieDto = {
        title: 'Movie 1',
        description: 'Description 1',
        director: 'Director 1',
        year: 2000,
        imdbRating: 7.5,
        bannerUrl: 'url1',
      };
      const createdMovie = { id: '1', ...movie };
      jest.spyOn(service, 'create').mockResolvedValue(createdMovie);

      const response = await controller.create({}, movie);

      expect(response).toEqual(createdMovie);
    });
  });

  describe('update', () => {
    it('should update a movie', async () => {
      const movie: CreateMovieDto = {
        title: 'Movie 1',
        description: 'Description 1',
        director: 'Director 1',
        year: 2000,
        imdbRating: 7.5,
        bannerUrl: 'url1',
      };
      const updatedMovie = { id: '1', ...movie };
      jest.spyOn(service, 'update').mockResolvedValue(updatedMovie);

      const response = await controller.update({}, '1', movie);

      expect(response).toEqual(updatedMovie);
    });
  });

  describe('remove', () => {
    it('should remove a movie', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);

      const response = await controller.remove({}, id);

      expect(response).toBeUndefined();
    });
  });
});
