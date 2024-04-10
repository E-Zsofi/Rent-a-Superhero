import logo1 from "./logo1.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo1} alt="Business Logo" />
      </div>
      <nav>
        <ul>
          <p>
            <Link to="/admin">Home</Link>
          </p>
          <p>
            <Link to="/admin">Contact info</Link>
          </p>
          <p>
            <Link to="/admin/about">About us</Link>
          </p>
          <p>
            <Link to="/admin">Superheroes</Link>
          </p>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
