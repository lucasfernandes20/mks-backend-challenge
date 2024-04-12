import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies', database: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', nullable: false })
  title: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'year', nullable: false })
  year: number;

  @Column({ name: 'imdb_rating', nullable: false })
  imdbRating: number;

  @Column({ name: 'banner_url', nullable: false })
  bannerUrl: string;

  @Column({ name: 'created_at', nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: false })
  updatedAt: Date;
}
