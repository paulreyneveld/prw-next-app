import '../styles/globals.css';
import '../components/Header.scss';
import '../components/NavBar.scss';
import '../components/Layout.scss';
import '../pages/index.scss';
import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
