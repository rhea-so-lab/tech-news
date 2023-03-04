import { DiscordSubscription } from '../domain/subscription';

export class DiscordSubscriptionRepository {
  async findAll(): Promise<DiscordSubscription[]> {
    return [];
  }
}
