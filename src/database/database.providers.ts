import { DataSource } from 'typeorm';
import { config } from 'dotenv';
config();

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevEnv = NODE_ENV === 'development';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: isDevEnv,
      });

      return dataSource.initialize();
    },
  },
];
