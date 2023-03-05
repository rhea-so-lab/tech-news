import { Feed, FeedItem } from '../adapter/rss-parser';

export class Notification {
  author!: string;
  title!: string;
  url!: string;
  createdAt!: Date;

  static fromFeed(feed: Feed, scheduleTime: number): Notification[] {
    if (!feed.title) return [];

    const notifications: Notification[] = [];

    for (const feedItem of feed.items) {
      const { title, link, pubDate } = feedItem as FeedItem;
      if (!title || !link || !pubDate) continue;

      const notification = new Notification();
      notification.author = feed.title;
      notification.title = title;
      notification.url = link;
      notification.createdAt = new Date(pubDate);
      notifications.push(notification);
    }

    return notifications.filter((notification) => Date.now() - notification.createdAt.getTime() < scheduleTime);
  }
}
