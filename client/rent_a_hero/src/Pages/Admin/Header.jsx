import logo3 from "./logo3.png";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <header>
      <div>
        <img className="logo" src={logo3} alt="Business Logo" />
      </div>
      <nav>
          <p>
            <Link to="/admin/home">Home</Link>
          </p>
          <p>
            <Link to="/admin/superheroes">Superheroes</Link>
          </p>
          <p>
            <Link to="/admin/about">About us</Link>
          </p>
          <p>
            <Link to="/admin/contacts">Contact info</Link>
          </p>
          <p>
            <Link to="/admin/messages">Messages</Link>
          </p>
      </nav>
    </header>
  );
}

export default Header;
