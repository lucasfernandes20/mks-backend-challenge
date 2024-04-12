import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MoviesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
