import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { MoviesModule } from './movies/movies.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    CacheModule.register({
      isGlobal: true,
      ttl: 10 * 1_000,
    }),
    MoviesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
