// Next 의 가장 큰 장점 중 하나, 라우팅이 상당히 쉬워짐. `pages/` 안에 파일을 작성할 때 마다 그 파일이름이 곧 url 주소가 됩니다.
// (public 도 가능함.) (ex: `http://localhost:3000/photos`)
import HeadInfo from "../components/Headinfo";

const photos = () => {
  return(
    <div>
      <HeadInfo title="My Blog Photos" />
      <h1>My Photos</h1>
    </div>
  )
};

export default photos;