## Next.js

`React` 의 `CSR` 의 단점을 해결하기 위해 사용하는 프레임워크 입니다.
예를 들어, `CSR` 의 첫 로딩시 지연되는 문제를 해결해 줄 수 있습니다. (SEO 에서 문제가 됨.)

### server

```bash
npm run dev
# or
yarn dev
```

### why

진행되고 있는 프로젝트가 `Next.js` 를 가지고 하고 있는데 해당 프로젝트의 리뷰 를 진행하고 싶고, `Next.js`의 대해 스터디를 하고 싶어 진행합니다. <br/>
(따로 `React` 프로젝트를 했지만, 해당 프로젝트에서는 `Next.js` 를 사용하지 않았음.)

### setup

```bash
npx create next-app <프로젝트명>
```

### build

react 소스를 js 소스로 변환. <br/>
build 완료시 .next 폴더가 생성됨. <br/>
용량이 커서 성능이 떨어질 수 있고, 보안 쪽 문제가 발생할 수도 있음. 어플리케이션을 동작하기전 build 해서 하기. <br/>
`.next/server/pages/index.html` 에 들어가서 확인 가능함.

```bash
npm run build
#or
yarn build
```

`Next.js production mode` 시작.

```bash
npm start
#or
yarn start
```