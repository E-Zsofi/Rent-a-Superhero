import Header from "./Header";
import { Link } from "react-router-dom";
import map from "./map.png";


function ShowContacts() {

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="sendMessage">
        <h1>Send us a message</h1>
        <form>
          <label>
            Your name:
            <input type="text" />
          </label>
          <label>
            Phone number:
            <input type="number" />
          </label>
          <label>
            Email adress:
            <input type="email" />
          </label>
          <label>
            Your message:
            <input type="text" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
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