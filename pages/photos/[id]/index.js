import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';

const index = ({ photo }) => {
  // router 안에는 현재 path의 정보들이 담겨있음. 그래서 router.query 안에 id 값이 담겨 있는 것을 볼 수 있음.
  // const router = useRouter();
  // console.log(router);
  const { title, url } = photo; 
  return (
    <div>
      {/* <h2>Image { router.query.id }</h2> */}
      <h2>{ title }</h2>
      <Image src={ url } width={ 500 } height={ 500 }/>
      <Link href='/photos'>
        <a>go back</a>
      </Link>
    </div>
  )
};

export const getStaticProps = async (context) => {
  // id를 동적으로 바꿈. StaticPaths 에서 StaticProps 로 context를 날려줍니다.
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${ id }`);
  const photo = await res.json();

  return {
    props: {
      photo
    }
  }
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);
  const photos = await res.json();
  const ids = photos.map(photo => photo.id);
  const paths = ids.map(id => {
    return {
      params: { id: id.toString() }
    }
  });
  return {
    paths,
    fallback: false
  }
};

export default index;