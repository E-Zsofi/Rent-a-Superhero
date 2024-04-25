import { useState, useEffect } from "react";
import Header from "./Header";
import "./Superhero.css";
import { Link } from "react-router-dom";

function ShowSuperheroes() {
  const [allHeroes, setAllHeroes] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [abilities, setAbilities] = useState("");
  const [gender, setGender] = useState("");
  const [rating, setRating] = useState("");
  const [status, setStatus] = useState("");
  const [heroType, setHeroType] = useState("");
  const [price, setPrice] = useState("");
  
  async function fetchSuperheroes() {
    const response = await fetch("/api/hero");
    const data = await response.json();
    setAllHeroes(data);
  }

  const deleteHero = async (name) => {
    const res = await fetch(`/api/hero/${name}`, { method: "DELETE" });
    fetchSuperheroes()
    await res.json();
  };
  
  function onClickDelete(name) {
    deleteHero(name)
    fetchSuperheroes()
  }

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  async function handleSubmitNewHero(event) {
    event.preventDefault();
    const data = {
      name,
      description,
      pictureUrl,
      abilities,
      gender,
      status,
      heroType,
      rating,
      price,
    };

    const response = await fetch("/api/hero", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    await response.json();
    
    fetchSuperheroes()

    setName("");
    setDescription("");
    setPictureUrl("");
    setAbilities("");
    setGender("");
    setRating("");
    setStatus("");
    setHeroType("");
    setPrice("");
    
  }


  return (
    <>
      <Header></Header>
      <div>
        <form name={"submitNewHero"} onSubmit={handleSubmitNewHero}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <label>
            PictureUrl:
            <input
              type="text"
              value={pictureUrl}
              onChange={(event) => setPictureUrl(event.target.value)}
            />
          </label>
          <label>
            Abilities:
            <input
              type="text"
              value={abilities}
              onChange={(event) => setAbilities(event.target.value)}
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            />
          </label>
          <label>
            Status:
            <input
              type="text"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            />
          </label>
          <label>
            Hero Type:
            <input
              type="text"
              value={heroType}
              onChange={(event) => setHeroType(event.target.value)}
            />
          </label>
          <label>
            Rating:
            <input
              type="text"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          <button type="submit">Submit new Superhero</button>
        </form>

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
              <Link to={`/admin/edit/${hero._id}`}>
                <button>Edit Superhero</button>
              </Link>
              <button type="button" onClick={() => onClickDelete(hero.name)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowSuperheroes;
