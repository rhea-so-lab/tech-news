import axios from 'axios';
import { Notification } from '../../../domain/notification';
import { DiscordSubscriptionRepository } from '../../../repository/subscription';

export class DiscordNotifyService {
  private repository: DiscordSubscriptionRepository;

  constructor() {
    this.repository = new DiscordSubscriptionRepository();
  }

  async send(notifications: Notification[]): Promise<void> {
    const subscriptions = await this.repository.findAll();

    for (const subscription of subscriptions) {
      for (const notification of notifications) {
        const { title, contentSnippet, url, author } = notification;

        await axios.post(subscription.webhookUrl, {
          content: null,
          embeds: [
            {
              color: 4229077,
              title: title,
              description: contentSnippet,
              url: url,
              footer: {
                text: `From. ${author}`,
              },
            },
          ],
          attachments: [],
        });
      }
    }
  }
}
