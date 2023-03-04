process.env.TZ = 'Europe/London'; // RSS feed's pubDate is in GMT+0.

import { Feed, FeedItem, RSSParser } from './adapter/rss-parser';
import { Blog } from './domain/blog';
import { Notification } from './domain/notification';
import { BlogRepository } from './repository/blog';
import { NotifyService } from './usecase/notify/service';

const rss: RSSParser = new RSSParser();
const repository: BlogRepository = new BlogRepository();
const service: NotifyService = new NotifyService();

async function main(): Promise<void> {
  const blogs: Blog[] = await repository.findAll();
  const feeds: Feed[] = await Promise.all(blogs.map((blog) => rss.parse(blog.rssUrl)));
  const items: FeedItem[] = feeds.flatMap((feed) => feed.items);

  const now: number = Date.now();
  const scheduleTime: number = 1000 * 60 * 30; // 30 minutes

  const notifications: Notification[] = items
    .filter((item) => (!item.pubDate ? false : now - new Date(item.pubDate).getTime() < scheduleTime))
    .map((item) => {
      if (!item.title || !item.contentSnippet || !item.link || !item.pubDate) throw new Error('Cannot parse feed item');
      return new Notification(item.title, item.contentSnippet, item.link, new Date(item.pubDate));
    });

  await service.send(notifications);
}

main();
