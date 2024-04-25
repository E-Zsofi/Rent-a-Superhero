import Header from "./Header";
import { Link } from "react-router-dom";
import map from "./map.png";
import { useState } from "react";



function ShowContacts() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmitMessage(event) {
    event.preventDefault();

    const userMessage = {
      name,
      phoneNumber,
      email,
      message,
    };

    const response = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userMessage),
    });

    await response.json();
    setName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");

  }


  return (
    <>
      <div>
        <Header></Header>
      </div>

      <h1>Send us a message</h1>

      <form className="MessageForm" onSubmit={handleSubmitMessage}>

        <label htmlFor="name">Your name:</label>
        <input type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="name"
          id="name"
        />

        <label htmlFor="phoneNumber">Phone number:</label>
        <input type="number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          name="phoneNumber"
          id="phoneNumber"
        />

        <label htmlFor="email">Email adress:</label>
        <input type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          id="email"
        />

        <label htmlFor="message">Your message:</label>
        <input type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          name="message"
          id="message"
        />

        <button type="submit">Send message</button>
      </form>

      <br></br>
      <div className="informations">
        <div>
          CONTACT INFORMATION:
          <p>hello@codecool.com</p>
          <p>Hungary, 1065 Budapest, Nagymező utca 44.</p>
          <img src={map}></img>
          <p>
            <Link to="https://www.google.com/maps/dir//codecool/@47.5033884,19.0530946,15.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x4741dc6ce5ea866d:0x1e1303babc750580!2m2!1d19.0577637!2d47.5049949?entry=ttu">Show me on the map</Link>
          </p>
        </div>
        <div>
          DEVELOPERS:
          <p>Zsófia Eszter</p>
          <p>Bálint Kutasi</p>
          <p>Bence Matúz</p>
          <p>Tamás Szondi</p>

        </div>
      </div>
    </>
  );
}

export default ShowContacts;