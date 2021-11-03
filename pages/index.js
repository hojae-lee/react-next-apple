const Home = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>Welcome to my Blog</h1>
      <ul>
        { posts.map(post => (
          <li key={ post.id }>{ post.title }</li>
        )) }
      </ul>
    </div>
  )
};

// JSONPlaceholder: 가상 데이터를 만들어 api 테스트를 할 수 있는 곳. (무료.)
// Next.js 에서 제공하는 data fetching 방식인 getStaticProps, getServerSideProps

// 페이지에 들어갈 때 마다(매 요청마다) 서버에서 만든 html 파일을 뿌리는 방법 (getServerSideProps)
// 그렇기 때문에 서버에서 보내는 데이터가 다르면 요청시에 화면이 달라짐.
// export const getServerSideProps = async () => {
//   /*
//     리액트에서 쓰는 api client rest api 중 하나. ajax의 역할을 해줍니다.
//     fetch('api 주소')
//     .then(res => {
//       // data 를 응답 받은 후의 로직
//     });
//   */
//   const res = await fetch(`http://localhost:8080/api/posts`)
//   const posts = await res.json();
  
//   return {
//     props: {
//       posts
//     }
//   }
// };

// 빌드시 고정되는 값으로 빌드 이 후에는 변경이 불가능
// Next.js 에서는 getStaticProps 를 좀 더 추천한다고 함.
// 빌드를 할 때 마다 페이지가 새롭게 갱신이 됨.
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
  const posts = await res.json();
  
  return {
    props: {
      posts
    },
    // 20 초 지난 시점부터, 접속이 일어나면 파일을 새롭게 생성할 수 있도록 하는 옵션 추가
    revalidate: 20
  }
};

export default Home;