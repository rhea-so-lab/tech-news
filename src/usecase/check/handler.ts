process.env.TZ = 'Europe/London'; // RSS feed's pubDate is in GMT+0.

import { Env } from '../../env';
import { dataSource } from '../../infrastructure/typeorm/data-source';
import { RSSParser, Feed } from '../../adapter/rss-parser';
import { Blog } from '../../domain/blog';
import { Notification } from '../../domain/notification';
import { BlogRepository } from '../../repository/blog';
import { NotifyService } from './service';

const rss: RSSParser = new RSSParser();
const repository: BlogRepository = new BlogRepository();
const service: NotifyService = new NotifyService();

async function main(): Promise<void> {
  await dataSource.initialize();
  console.log('Database connected.');

  const blogs: Blog[] = await repository.findAll();
  const feeds: Feed[] = await Promise.all(blogs.map((blog) => rss.parse(blog.rssUrl)));
  const notifications: Notification[] = feeds.flatMap((feed) => Notification.fromFeed(feed, Env.SCHEDULE_TIME));
  console.log(`Found ${notifications.length} notifications.`);

  await service.send(notifications);

  await dataSource.destroy();
  console.log('Database disconnected.');
}

main();
