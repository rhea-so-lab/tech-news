import { Blog } from '../domain/blog';

export class BlogRepository {
  async findAll(): Promise<Blog[]> {
    return [
      new Blog('무신사(MUSINSA) 기술블로그', 'https://medium.com/feed/musinsa-tech'),
      new Blog('네이버 D2 기술블로그', 'https://d2.naver.com/d2.atom'),
      new Blog('마켓컬리 기술블로그', 'https://helloworld.kurly.com/feed.xml'),
      new Blog('우아한형제들 기술블로그', 'https://techblog.woowahan.com/feed'),
      new Blog('카카오엔터프라이즈 기술블로그', 'https://tech.kakaoenterprise.com/feed'),
      new Blog('데브시스터즈 기술블로그', 'https://tech.devsisters.com/rss.xml'),
      new Blog('라인(LINE) 기술블로그', 'https://engineering.linecorp.com/ko/feed/index.html'),
      new Blog('쿠팡(Coupang) 기술블로그', 'https://medium.com/feed/coupang-engineering'),
      new Blog('당근마켓 기술블로그', 'https://medium.com/feed/daangn'),
      new Blog('토스(Toss) 기술블로그', 'https://toss.tech/rss.xml'),
      new Blog('직방 기술블로그', 'https://medium.com/feed/zigbang'),
      new Blog('왓챠(Watcha) 기술블로그', 'https://medium.com/feed/watcha'),
      new Blog('뱅크샐러드(banksalad) 기술블로그', 'https://blog.banksalad.com/rss.xml'),
      new Blog('Hyperconnect 기술블로그', 'https://hyperconnect.github.io/feed.xml'),
      new Blog('요기요(yogiyo) 기술블로그', 'https://techblog.yogiyo.co.kr/feed'),
      new Blog('쏘카(Socar) 기술블로그', 'https://tech.socarcorp.kr/feed'),
      new Blog('리디(RIDI) 기술블로그', 'https://www.ridicorp.com/feed'),
      new Blog('NHN Toast 기술블로그', 'https://meetup.toast.com/rss'),
      new Blog('GeekNews - 개발/기술/스타트업 뉴스 서비스', 'https://news.hada.io/rss/news'),
      new Blog('월간 개발자 뉴스레터 - 개발자스럽다', 'https://blog.gaerae.com/feeds/posts/default?alt=rss'),
      new Blog('IT 관련 뉴스 제공 블로그 - 44BITS', 'https://www.44bits.io/ko/feed/all'),
    ];
  }
}
