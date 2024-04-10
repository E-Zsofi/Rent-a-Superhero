import description from "./About_us";
import Header from "./Header";

function AboutUs() {

  return (
    <div>
      <Header></Header>
      <h1>About us</h1>
      <label>
        {description}
      </label>
    </div>
  )
}

export default AboutUs;