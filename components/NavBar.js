import Link from 'next/link';

const navBarStyle = {
    backgroundColor: "red",
    color: "white",
    width: "100%",
    height: "60px"
  };
  
  const NavBar = () => (
    <div className="NavBar" style={navBarStyle}>
      NAVBAR
      <Link href="/blog/newblog">
          <a>Create Post</a>
      </Link>
    </div>
  );
  
  export default NavBar;