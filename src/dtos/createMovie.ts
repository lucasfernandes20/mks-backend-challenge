import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class MovieDto {
  id?: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber({ maxDecimalPlaces: 1 })
  @IsNotEmpty()
  imdbRating: number;

  @IsString()
  @IsNotEmpty()
  bannerUrl: string;

  createdAt?: Date;
  updatedAt?: Date;
}
