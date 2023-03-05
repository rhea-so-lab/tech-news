import axios from 'axios';
import { Notification } from '../../../domain/notification';
import { SlackSubscription } from '../../../domain/subscription';
import { SlackSubscriptionRepository } from '../../../repository/subscription';

export class SlackNotifyService {
  private repository: SlackSubscriptionRepository;

  constructor() {
    this.repository = new SlackSubscriptionRepository();
  }

  async send(notifications: Notification[]): Promise<void> {
    const subscriptions: SlackSubscription[] = await this.repository.findAll();

    for (const subscription of subscriptions) {
      try {
        for (const notification of notifications) {
          const { title, url, author } = notification;

          await axios.post(subscription.webhookUrl, {});
        }
      } catch (error) {
        await this.repository.remove(subscription);
      }
    }
  }
}
