import { EnvKey, EnvSafe } from '@creatrip/env-safe';

@EnvSafe()
export class Env {
  @EnvKey({ default: 1000 * 60 * 60 * 24, description: '30분마다 RSS 확인' })
  static SCHEDULE_TIME: number;

  @EnvKey()
  static DATABASE_URL: string;

  @EnvKey()
  static DATABASE_PASSWORD: string;
}