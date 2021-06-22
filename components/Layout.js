import Head from "next/head";
import Header from "./Header";
import NavBar from "./NavBar";
import AdminNavBar from "./AdminNavBar";

const Layout = props => {


  return (
  <div className="Layout">
    <Head>
      <title>PRW</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    <NavBar />
    <AdminNavBar />
    <div className="Content">{props.children}</div>
    
  </div>
);
}

export default Layout;