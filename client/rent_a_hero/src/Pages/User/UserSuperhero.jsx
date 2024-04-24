import { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import "./UserSuperhero.css";


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
          {allHeroes.map((hero, index) => (
            <div key={index} className="HeroContainer">
              <p>{hero.name}</p>
              <img src={hero.pictureUrl}></img>
              <p>Description: {hero.description}</p>
              <ul>
                Abilities:
                {hero.abilities.map((ability, index) => (
                  <li key={index}>{ability}</li>
                ))}
              </ul>
              <p>Gender: {hero.gender}</p>
              <p>Status: {hero.status}</p>
              <p>Hero Type: {hero.heroType}</p>
              <p>Rating: {hero.rating}</p>
              <p>Price: {hero.price}</p>
              <Link to={`/admin/cart/${hero._id}`}>
              <button>Add to cart</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowSuperheroes;
