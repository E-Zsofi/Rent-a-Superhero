import Header from "./Header"
import { useState, useEffect } from "react";
import "./User.css"

export default function Signup() {

  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");

  async function handleSignup(event) {

    //event.preventDefault();
    const user = {
      signupUsername,
      signupEmail
    }

    try {
      const response = await fetch('/api/user', {
        method: "POST",
        headers: {
          "Content-Type" : 'application/json',
        },
        body: JSON.stringify(user)
      })
      const responseUser = await response.json();
      console.log(responseUser);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="reg-log-block">
        <h4>Sign Up</h4>
        <p>Enter a username and email address of your choice to register:</p>
        <form onSubmit={handleSignup}>
          <ul>
            <li>
              <label htmlFor="usernameSignup" className="signup-input">
                Username: <input type="text" placeholder="Username" id="username" value={signupUsername} onChange={(e) => setSignupUsername(e.target.value)} />
              </label>
            </li>
            <li>
              <label htmlFor="emailSignup" className="signup-input">
                Email: <input type="email" placeholder="Email" id="emailSignup" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)}/>
              </label>
            </li>
          </ul>
          <button type="submit" onClick={handleSignup}>SIGN UP</button>
        </form>
        <h4>OR</h4>
        <h4>Login</h4>
        <p>Please log in with your registered username:</p>
        <ul>
          <li>
            <label htmlFor="usernameLogin">
              Username: <input type="text" placeholder="Username" id="usernameLogin" />
            </label>
          </li>
        </ul>
            <label htmlFor="">
              <button>LOGIN</button>
            </label>
      </div>
    </>
  )
}