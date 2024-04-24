import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get('DB_HOST'),
        port: ConfigService.get('DB_PORT'),
        username: ConfigService.get('DB_USER'),
        password: ConfigService.get('DB_PASS'),
        database: ConfigService.get('DB_NAME'),
        autoLoadEntities: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: ConfigService.get('NODE_ENV') === 'development',
        ssl:
          ConfigService.get('NODE_ENV') === 'production'
            ? { rejectUnauthorized: false }
            : false,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
