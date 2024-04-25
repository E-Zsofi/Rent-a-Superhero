import { useNavigate } from "react-router-dom";
import Header from "./Header"
import { useState, useEffect } from "react";
import "./Signup.css"

export default function Signup() {

  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const usenavigate = useNavigate();

  async function handleSignup(event) {

    event.preventDefault();
    const user = {
      signupUsername,
      signupEmail
    }

    try {
      const response = await fetch('/api/user', {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(user)
      })
      const responseUser = await response.json();
      console.log(responseUser);
    } catch (error) {
      console.error(error)
    }
    usenavigate("/");
  }

  async function handleLogin(event, loginUsername) {
    console.log(loginUsername);
    event.preventDefault();
    const response = await fetch(`/api/user/${loginUsername}?isLoggedIn=true}`);
    const fetchedUser = await response.json();
    fetchedUser && setIsLoggedIn(true);
  }



  return (
    <>
  <Header></Header>
  <div className="container">
  <div>
    {isLoggedIn ? (
      <div className="container">
      <div className="logged-in">
        <p>Successful Login!</p>
      </div>
      </div>
    ) : (<>
      <div className="reg-log-block">
        <div className="h4-div">
          <h4>Sign Up</h4>
        </div>
        <p>Enter a username and email address for registration:</p>
        <div className="form">
          <form onSubmit={handleSignup} className="form-signup">
            <div>
                <label htmlFor="usernameSignup" className="signup-input">
                  Username:{" "}
                  <input
                    type="text"
                    placeholder="Username"
                    id="usernameSignup"
                    value={signupUsername}
                    onChange={(e) => setSignupUsername(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="emailSignup" className="signup-input">
                  Email:{" "}
                  <input
                    type="email"
                    placeholder="Email"
                    id="emailSignup"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                  />
                </label>
                </div>
                <div className="button-div">
            <button type="submit">SIGN UP</button>
            </div>
          </form>
        </div>
        </div>
        <h4>OR</h4>
        <div className="reg-log-block">
          <div className="h4-div">
        <h4>Login</h4>
        </div>
        <p>Please log in with your registered username:</p>
        <div className="form">
          <form onSubmit={(e) => handleLogin(e, loginUsername)}>
                <label htmlFor="usernameLogin">
                  Username:{" "}
                  <input
                    type="text"
                    placeholder="Username"
                    id="usernameLogin"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                  />
                </label>
                <div className="button-div">
            <button type="submit">LOGIN</button>
            </div>
          </form>
        </div>
      </div>
      </>
    )}
  </div>
</div>
</>
  )
}