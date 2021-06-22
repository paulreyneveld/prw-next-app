import Link from 'next/link';
  
const AdminNavBar = () => (
    <div className="NavBar">
      <Link href="/blog/createblog">
          <a>New Blog</a>
      </Link>
    </div>
);
  
export default AdminNavBar;