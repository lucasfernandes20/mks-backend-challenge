import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'movies', database: 'movies' })
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', nullable: false })
  title: string;

  @Column({ name: 'director', nullable: true })
  director: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'year', nullable: false })
  year: number;

  @Column({
    name: 'imdb_rating',
    nullable: false,
    type: 'numeric',
    precision: 3,
    scale: 1,
    default: 0,
  })
  imdbRating: number;

  @Column({ name: 'banner_url', nullable: false })
  bannerUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
