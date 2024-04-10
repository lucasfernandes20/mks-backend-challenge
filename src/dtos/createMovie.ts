import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  imdbRating: string;

  @IsString()
  @IsNotEmpty()
  bannerUrl: string;
}
