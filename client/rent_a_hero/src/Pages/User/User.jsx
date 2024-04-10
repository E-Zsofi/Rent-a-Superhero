import { useState } from "react";
import "./User.css";
import AllHeroes from './Components/AllHeroes.jsx';

function User() {
  const [allHeroes, setAllHeroes] = useState(null);

  async function fetchSuperheroes() {
    const response = await fetch('/api/hero');
    const data = await response.json();
    console.log(data);
    return data;
  }
  // fetchSuperheroes('/api/hero')

  return (
    <>
      <div className="User">
        <button id='allHeroesButton' onClick={async() => {setAllHeroes(await fetchSuperheroes())}}>List all heroes</button>
        {allHeroes ? (
          <>
            <AllHeroes allHeroes={allHeroes} />
          </>
        ) : (
          <>
          </>
        )}
      </div>
    </>
  );
}

export default User;
