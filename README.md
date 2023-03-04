# Tech News

엄선된(?) 기술 블로그들의 새 글 알림을 선호하는 SNS에서 받아보세요.

<a href="#getting-started">Getting Started</a> •
<a href="#roadmap">Roadmap</a> •
<a href="#built-with">Built With</a> •
<a href="#contributing">Contributing</a> •
<a href="#license">License</a>

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->

## Getting Started

알리미 설정법을 SNS 별로 설명합니다.

### Discord

<details>

1. 알림을 받고자 하는 서버의 채널을 엽니다.

2. "채널 편집" (좌측 사이드바에서 채널 제목 끝의 ⚙ 클릭) 화면으로 갑니다.

<img width="263" alt="image" src="https://user-images.githubusercontent.com/25793226/222929146-2614d51d-4d04-4010-97fb-b7ac198c1f60.png">

3. "연동" 탭을 선택하고 "웹후크" 를 클릭합니다.

<img width="898" alt="image" src="https://user-images.githubusercontent.com/25793226/222929167-7b240f82-dc36-4d42-98da-d401bfb1c185.png">

4. "새 웹후크" 버튼을 눌러서 새로운 웹후크를 생성합니다.

<img width="901" alt="image" src="https://user-images.githubusercontent.com/25793226/222929175-8bec0ab4-3739-455b-b540-061daf3ecacd.png">

5. https://rhea-so-lab.github.io/tech-news/assets/ 에 접속합니다.

6. 웹후크 URL을 붙혀넣고, 등록 버튼을 누릅니다.

<img width="232" alt="image" src="https://user-images.githubusercontent.com/25793226/222929196-e5cddb59-a0dc-46df-a2db-512284fb6f7e.png">

<img width="486" alt="image" src="https://user-images.githubusercontent.com/25793226/222929202-1d48328f-7f62-4460-8a3a-6792e4620b06.png">

</details>

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->

## Roadmap

### v1.0.1

- [ ] Slack 알리미 추가
- [ ] Webhook 등록 프론트엔드 디자인 추가
- [ ] CONTRIBUTING.md 정리

### v1.0.0

- [x] RSS Reader 구현
- [x] Discord 알리미 추가

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->

## Built With

이 프로젝트는 아래 기술들로 구현되었습니다.

- [GitHub Action](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows) - 지정한 시간마다 소스코드를 실행할때 사용합니다.
- [Serverless](https://www.serverless.com/) - 구독 기능을 AWS Lambda에 배포할때 사용합니다.
- [Node.js](https://nodejs.org/ko/) - NPM에서 프로젝트와 관련된 모듈을 가져와 편하게 개발하려고, 자바스크립트 런타임을 사용합니다.
- [Neon](https://neon.tech/) - 알리미 수신자 정보를 저장하기 위해, Neon (Serverless Postgres) 무료 Plan을 사용합니다.
- [TypeORM](https://typeorm.io/) - DB 쿼리를 짜기 귀찮아서 사용합니다.
- [RSS Parser](https://www.npmjs.com/package/rss-parser) - RSS를 POJO로 파싱할때 사용합니다.
- [Axios](https://www.npmjs.com/package/axios) - 웹훅 호출할때 사용합니다.
- [EnvSafe](https://www.npmjs.com/package/@creatrip/env-safe) - 환경변수를 불러올때 사용합니다.
- [Class Validator](https://github.com/typestack/class-validator) - 유저의 웹 요청이 양식에 맞는지 검증할때 사용합니다.

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->

## Contributing

이 프로젝트에 기여를 하고 싶으신 분은 [CONTRIBUTING.md](./CONTRIBUTING.md) 문서를 읽어주세요.

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->

## License

이 프로젝트에는 [MIT](./LICENSE) 라이센스가 부여되어있습니다.

<!-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -->
