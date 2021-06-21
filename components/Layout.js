import Head from "next/head";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = props => (
  <div className="Layout">
    <Head>
      <title>PRW</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <Header />
    <NavBar />
    <div className="Content">{props.children}</div>
    
  </div>
);

export default Layout;