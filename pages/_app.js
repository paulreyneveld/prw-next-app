import '../styles/globals.css';
import "../components/Header.scss";
import "../components/NavBar.scss";
import "../components/Layout.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
