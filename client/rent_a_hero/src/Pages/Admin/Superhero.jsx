import { useState, useEffect } from "react";
import Header from "./Header";
import "./Superhero.css";




function ShowSuperheroes() {
  const [allHeroes, setAllHeroes] = useState([]);

  useEffect(() => {
    async function fetchSuperheroes() {
      const response = await fetch("/api/hero");
      const data = await response.json();
      setAllHeroes(data);
    }
    fetchSuperheroes();
  }, []);

  return (
    <>
      <div>
        <Header></Header>
        <div className="heroes">

        {allHeroes.map((hero) => (
          <div key={hero.id} className="HeroContainer">
            <p key={hero.id}>{hero.name}</p>
            <img src={hero.pictureUrl}></img>
            <p>{hero.description}</p>
          </div>
        ))}
        </div>

        </div>
    </>
  );
}

export default ShowSuperheroes;
