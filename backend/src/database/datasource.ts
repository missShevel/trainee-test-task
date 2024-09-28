import { Board } from 'src/board/board.entity';
import { Card } from 'src/card/card.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import * as path from 'path';

config();
const migrationsFolder = path.resolve(__dirname, 'migrations');

const options: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +(process.env.DATABASE_PORT || '5432'),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Board, Card],

  migrations: [`${migrationsFolder}/*.{ts,js}`],
};

export const dataSource = new DataSource(options);
