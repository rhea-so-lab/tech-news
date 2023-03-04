import { EnvKey, EnvSafe } from '@creatrip/env-safe';

@EnvSafe()
export class Env {
  @EnvKey({ default: 1000 * 60 * 30, description: '30분마다 RSS 확인' })
  static SCHEDULE_TIME: number;

  @EnvKey()
  static DISCORD_STATUS_NOTIFICATION_WEBHOOK_URL: string;

  @EnvKey()
  static DATABASE_HOST: string;

  @EnvKey({ default: 'tech-news' })
  static DATABASE_NAME: string;

  @EnvKey()
  static DATABASE_USERNAME: string;

  @EnvKey()
  static DATABASE_PASSWORD: string;
}
