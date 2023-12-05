import { DataSourceOptions } from 'typeorm';

export const DEV_DB_CONFIG: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: true,
  // debug: true,
};
