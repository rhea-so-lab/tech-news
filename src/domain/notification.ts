export class Notification {
  title: string;
  contentSnippet: string;
  url: string;
  createdAt: Date;

  constructor(title: string, contentSnippet: string, url: string, createdAt: Date) {
    this.title = title;
    this.contentSnippet = contentSnippet;
    this.url = url;
    this.createdAt = createdAt;
  }
}
