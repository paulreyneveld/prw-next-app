import Link from 'next/link';
  
const NavBar = () => (
    <div className="NavBar">
      NAVBAR
      <Link href="/blog/newblog">
          <a>Create Post</a>
      </Link>
    </div>
);
  
export default NavBar;