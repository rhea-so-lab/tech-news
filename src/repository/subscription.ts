import { DiscordSubscription } from '../domain/subscription';

export class DiscordSubscriptionRepository {
  async findAll(): Promise<DiscordSubscription[]> {
    return DiscordSubscription.find();
  }

  async save(subscription: DiscordSubscription): Promise<void> {
    await subscription.save();
  }

  async remove(subscription: DiscordSubscription): Promise<void> {
    await subscription.softRemove();
  }
}
