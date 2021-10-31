// Next.js 에서 제공하는 Link 컴포넌트로써 클라이언트 사이드에서 경로간의 이동을 할 수 있다.
// Link 태그를 사용할 때 아래와 같이 <Link> <a></a> </Link> 형식으로 사용함.
// 그냥 일반 텍스트만 넘기면 Next.js 에서 자동으로 a 태그를 감싸서 사용한다.
import Link from "next/link";
// css 불러와서 사용하기
import navStyles from '../styles/Nav.module.css';

// 네비바 만들기
const Nav = () => {
 return (
   <>
    <nav className={ navStyles.nav }>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
      </ul>
    </nav>
   </>
 ) 
};

export default Nav;