import { DataSource } from 'typeorm';
import { DiscordSubscription } from '../../domain/subscription';
import { Env } from '../../env';

export const dataSource = new DataSource({
  type: 'postgres',
  ssl: true,
  host: Env.DATABASE_HOST,
  username: Env.DATABASE_USERNAME,
  password: Env.DATABASE_PASSWORD,
  database: Env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [DiscordSubscription],
});
