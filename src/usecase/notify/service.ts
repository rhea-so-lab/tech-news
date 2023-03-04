import { Notification } from '../../domain/notification';
import { DiscordNotifyService } from './adapter/discord';

export class NotifyService {
  private discord: DiscordNotifyService;

  constructor() {
    this.discord = new DiscordNotifyService();
  }

  async send(notifications: Notification[]): Promise<void> {
    await this.discord.send(notifications);
  }
}
