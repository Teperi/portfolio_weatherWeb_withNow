# 포트폴리오 : Weather Web with Now

포트폴리오 Weather Web 을 Next.js 를 사용해서 Now 로 deploy

## 실행 방법

- 사용 시스템
  - windows 10
  - CMD
  - node.js
  - yarn
  - now

```bash
git clone https://github.com/Teperi/portfolio_weatherWeb_withNow.git
cd portfolio_weatherWeb_withNow
yarn install
now dev
```

- ~~now deploy 주소: https://portfolioweatherwebwithnow.teperi31.now.sh/~~
  - ~~메인 페이지는 잘 되나, 서브페이지가 작동하지 않음~~

## 문제상황

### now deploy 버그

- Forecast Page 접속 불가
  - router 문제라고 판단하고 에러 수정중

### now dev 버그

- forcast 페이지 접속 시 Grid layout 이 적용이 안되는 문제
  - 가끔 한번씩 오류 발생중. 원인을 찾지 못함
