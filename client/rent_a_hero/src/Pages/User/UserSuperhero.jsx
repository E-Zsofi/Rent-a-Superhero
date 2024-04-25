import { useState, useEffect } from "react";
import Header from "./Header";
import "./UserSuperhero.css";

function ShowSuperheroes() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);

  useEffect(() => {
    async function fetchSuperheroes() {
      const response = await fetch("/api/hero");
      const data = await response.json();
      setAllHeroes(data);
    }
    fetchSuperheroes();
  }, []);

 
    async function fetchCartHeroes() {
      const response = await fetch("/api/cart");
      const data = await response.json();
      setCartCounter(data.length);
    }

  async function fetchCart(hero) {
    console.log(hero)
    const response = await fetch("/api/cart", {
       method: "POST",
       headers: {
         "Content-type": "application/json"
       },
       body: JSON.stringify(hero)
     })
     const responseData = await response.json();
     await fetchCartHeroes();
   }

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
              <button onClick={() => fetchCart(hero)}>Add to cart</button>   
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowSuperheroes;
