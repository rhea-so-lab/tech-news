# Tech News

엄선된(?) 기술 블로그들의 새 글 알림을 선호하는 SNS에서 받아보세요.

<a href="#getting-started">Getting Started</a> •
<a href="#built-with">Built With</a> •
<a href="#roadmap">Roadmap</a> •
<a href="#contributing">Contributing</a> •
<a href="#license">License</a>

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->

## Getting Started

알리미 설정법을 SNS 별로 설명합니다.

### Discord

1. 알림을 받고자 하는 서버의 채널을 엽니다.
2. "채널 편집" (좌측 사이드바에서 채널 제목 끝의 ⚙ 클릭) 화면으로 갑니다.
3. "연동" 탭을 선택하고 "웹후크" 를 클릭합니다.
4. "새 웹후크" 버튼을 눌러서 새로운 웹후크를 생성합니다.
5. 원하는 이름을 설정하고, 채널이 맞는지 확인한 뒤에 "웹후크 URL 복사"버튼을 누릅니다.
6. jeonghyeon.rhea@gmail.com 으로 "웹후크 URL"과 함께 알리미 신청 이메일을 작성 후 보냅니다.

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->

## Built With

이 프로젝트는 아래 기술들로 구현되었습니다.

- [GitHub Action](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows) - 지정한 시간마다 소스코드를 실행할때 사용합니다.
- [Node.js](https://nodejs.org/ko/) - NPM에서 프로젝트와 관련된 모듈을 가져와 빨리 개발하려고, 자바스크립트 런타임을 사용합니다.
- [MongoDB](https://www.mongodb.com/) - 알리미 수신자 정보를 저장하기 위해, MongoDB 무료 Plan을 사용합니다.
- [TypeORM](https://typeorm.io/) - DB 쿼리를 짜기 귀찮아서 사용합니다.
- [RSS Parser](https://www.npmjs.com/package/rss-parser) - RSS를 POJO로 파싱할때 사용합니다.
- [Axios](https://www.npmjs.com/package/axios) - 웹훅 호출할때 사용합니다.
- [EnvSafe](https://www.npmjs.com/package/@creatrip/env-safe) - 환경변수를 불러올때 사용합니다.

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->

## Roadmap

### v1.0.0

- [ ] RSS Reader 구현
- [ ] Discord 알리미 추가

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->

## Contributing

이 프로젝트에 기여를 하고 싶으신 분은 [CONTRIBUTING.md](./CONTRIBUTING.md) 문서를 읽어주세요.

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->

## License

이 프로젝트에는 [MIT](./LICENSE) 라이센스가 부여되어있습니다.

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
