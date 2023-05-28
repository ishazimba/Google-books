import { Link } from "react-router-dom";
function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/book_list">Books</Link>
    </nav>
  );
}
export default Header;
