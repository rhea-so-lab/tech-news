import axios from 'axios';
import { Notification } from '../../../domain/notification';
import { DiscordSubscription } from '../../../domain/subscription';
import { DiscordSubscriptionRepository } from '../../../repository/subscription';

export class DiscordNotifyService {
  private repository: DiscordSubscriptionRepository;

  constructor() {
    this.repository = new DiscordSubscriptionRepository();
  }

  async send(notifications: Notification[]): Promise<void> {
    const subscriptions: DiscordSubscription[] = await this.repository.findAll();

    for (const subscription of subscriptions) {
      try {
        for (const notification of notifications) {
          const { title, url, author } = notification;

          await axios.post(subscription.webhookUrl, {
            content: null,
            embeds: [
              {
                color: 4229077,
                title: title,
                url: url,
                footer: {
                  text: `From. ${author}`,
                },
              },
            ],
            attachments: [],
          });
        }
      } catch (error) {
        await this.repository.remove(subscription);
      }
    }
  }
}
