import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  director: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber({ maxDecimalPlaces: 1 })
  @IsNotEmpty()
  imdbRating: number;

  @IsString()
  @IsNotEmpty()
  bannerUrl: string;
}
