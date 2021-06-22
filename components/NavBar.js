import Link from 'next/link';
  
const NavBar = () => (
    <div className="NavBar">
      <Link href="/blog">
          <a>Blog</a>
      </Link>
      <Link href="/about">
          <a>About</a>
      </Link>
      <Link href="/projects">
          <a>Projects</a>
      </Link>
      <Link href="/resources">
          <a>Blog</a>
      </Link>
    </div>
);
  
export default NavBar;