import img1 from "../assets/logo.svg"
import "../App.css"

function Nav() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <img src={img1} alt="logo" />
      </div>

      <ul className="nav-flex">
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  );
}

export default Nav;