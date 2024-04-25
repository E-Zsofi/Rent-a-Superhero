import logo3 from "./logo3.png";
import { Link } from "react-router-dom";
import "./Header.css"
import { useEffect, useState } from "react";



function Header() {
  const [loggedInUser, setLoggedInUser] = useState("")

async function getLoggedInUser() {
  const response = await fetch(`/api/logged-in-user`);
  const fetchedUser = await response.json();
  setLoggedInUser(fetchedUser);
}

async function handleLogout() {
  const response = await fetch(`/api/logout/${loggedInUser.username}`);
  await getLoggedInUser();
}

useEffect(() => {
  getLoggedInUser();
}, [])

console.log(loggedInUser);

  return (
    <>
    <header>
      <div>
        <img className="logo" src={logo3} alt="Business Logo" />
      </div>
      <nav>
        {loggedInUser &&
        <div className="log">
          <div className="hello">
        <span>
          {loggedInUser && `Hello, ${loggedInUser.username}!`}
        </span>
        </div>
        {loggedInUser && (<div><button onClick={handleLogout}>Logout</button></div>)}
        </div>}
          <p>
            <Link to="/user/home">Home</Link>
          </p>
          <p>
            <Link to="/user/superheroes">Superheroes</Link>
          </p>
          <p>
            <Link to="/user/about">About us</Link>
          </p>
          <p>
            <Link to="/user/contact">Contact info</Link>
          </p>
          <p>
            <Link to="/user/signup">Signup or Login</Link>
          </p>
          <p>
            <Link to="/cart">Cart 🛒</Link>
          </p>
      </nav>
    </header>
    </>
  );
}

export default Header;
