import { Notification } from '../../domain/notification';

export class NotifyService {
  async send(notifications: Notification[]) {
    console.log(notifications);
  }
}
