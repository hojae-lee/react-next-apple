// Next.js 에서 제공하는 Head 컴포넌트
import Head from 'next/head';

const HeadInfo = ({ title, keyword, contents }) => {
  return(
    <div>
      <Head>
        <title>{ title }</title>
        <meta keyword={ keyword } />
        <meta contents={ contents } />
      </Head>
    </div>
  );
};

HeadInfo.defaultProps = {
  title: 'My Blog',
  keyword: 'Blog made Next.js',
  contents: 'Basic Next.js'
};

export default HeadInfo;