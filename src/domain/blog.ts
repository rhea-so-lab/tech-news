export class Blog {
  name: string;
  rssUrl: string;

  constructor(name: string, rssUrl: string) {
    this.name = name;
    this.rssUrl = rssUrl;
  }
}
