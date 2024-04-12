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
            <Link to="/user/home">Home</Link>
          </p>
          <p>
            <Link to="/user/contact">Contact info</Link>
          </p>
          <p>
            <Link to="/user/about">About us</Link>
          </p>
          <p>
            <Link to="/user/superheroes">Superheroes</Link>
          </p>
          <p>
            <Link to="/user/signup">Signup or Login</Link>
          </p>
      </nav>
    </header>
  );
}

export default Header;
