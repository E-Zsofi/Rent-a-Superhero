import Header from "./Header.jsx";
import homePageDescription from "./Home.js";

function HomePage() {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>{homePageDescription}</div>
    </div>
  );
}

export default HomePage;
