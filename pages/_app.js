import '../styles/globals.css';
import Layout from '../components/Layout';
import HeadInfo from "../components/Headinfo";

function MyApp({ Component, pageProps }) {
  return (
    // Layout 으로 감쌌음.
    <Layout>
      <HeadInfo />
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
