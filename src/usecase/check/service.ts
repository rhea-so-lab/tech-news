import axios from 'axios';
import { Notification } from '../../domain/notification';
import { Env } from '../../env';
import { DiscordSubscriptionRepository } from '../../repository/subscription';
import { DiscordNotifyService } from './adapter/discord';

export class NotifyService {
  private discord: DiscordNotifyService;

  constructor() {
    this.discord = new DiscordNotifyService();
  }

  async send(notifications: Notification[]): Promise<void> {
    await this.discord.send(notifications);
    await this.notifyToAdmin(notifications);
  }

  async notifyToAdmin(notifications: Notification[]): Promise<void> {
    const discordSubscribers: number = (await new DiscordSubscriptionRepository().findAll()).length;

    await axios.post(Env.DISCORD_STATUS_NOTIFICATION_WEBHOOK_URL, {
      content: null,
      embeds: [
        {
          color: 65321,
          title: 'Tech News',
          description: `- Send ${notifications.length} notifications to ${discordSubscribers} discord subscribers.\n`,
        },
      ],
      attachments: [],
    });
  }
}
