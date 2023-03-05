import { DiscordSubscription, SlackSubscription } from '../domain/subscription';

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

export class SlackSubscriptionRepository {
  async findAll(): Promise<SlackSubscription[]> {
    return SlackSubscription.find();
  }

  async save(subscription: SlackSubscription): Promise<void> {
    await subscription.save();
  }

  async remove(subscription: SlackSubscription): Promise<void> {
    await subscription.softRemove();
  }
}
