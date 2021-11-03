// Next 의 가장 큰 장점 중 하나, 라우팅이 상당히 쉬워짐. `pages/` 안에 파일을 작성할 때 마다 그 파일이름이 곧 url 주소가 됩니다.
// (public 도 가능함.) (ex: `http://localhost:3000/photos`)
import HeadInfo from '../components/Headinfo';
// <img> 대신 next/image 의 Image 컴포넌트 사용. (리사이즈, 최적화, 호환 등을 지원함.)
import Image from 'next/image';
import photosStyles from '../styles/Photos.module.css';
import Link from 'next/link';

const photos = ({ photos }) => {
  return(
    <div>
      <HeadInfo title='My Blog Photos' />
      <h1>My Photos</h1>
      <ul className={ photosStyles.photos }>
        {photos.map(photo => (
          <li key={ photo.id }>
            <Link href={ `/photos/${ photo.id }` }>
              <a>
                <Image src={ photo.thumbnailUrl } width={ 100 } height={ 100 } alt={ photo.title } />
                <span>{ photo.title }</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
  const photos = await res.json();

  return {
    props: {
      photos
    }
  }
}

export default photos;