import { DataSource } from 'typeorm';

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDevEnv = NODE_ENV === 'development';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: isDevEnv,
      });

      return dataSource.initialize();
    },
  },
];
