import { DataSource } from 'typeorm';
import { DiscordSubscription, SlackSubscription } from '../../domain/subscription';
import { Env } from '../../env';

export const dataSource = new DataSource({
  type: 'postgres',
  ssl: true,
  host: Env.DATABASE_HOST,
  username: Env.DATABASE_USERNAME,
  password: Env.DATABASE_PASSWORD,
  database: Env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: [DiscordSubscription, SlackSubscription],
});
