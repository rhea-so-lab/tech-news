import Parser from 'rss-parser';

export type Feed = Parser.Output<any>;

export type FeedItem = Parser.Item;

export class RSSParser {
  private parser: Parser;

  constructor() {
    this.parser = new Parser({
      headers: {
        // 406 Not Acceptable 에러를 해결하기 위해 추가함. (참고: https://github.com/rbren/rss-parser/issues/129)
        Accept: 'application/rss+xml, application/rdf+xml, application/atom+xml, application/xml;q=0.9, text/xml;q=0.8',
      },
    });
  }

  async parse(url: string): Promise<Feed> {
    return this.parser.parseURL(url);
  }
}
