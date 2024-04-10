import { useState, useEffect } from "react";

import "./Admin.css";

function Admin() {
  const [allHeroes, setAllHeroes] = useState([]);

  useEffect(() => {
    async function fetchSuperheroes() {
      const response = await fetch("/api/hero");
      const data = await response.json();
      setAllHeroes(data);
      console.log(data);
    }
    fetchSuperheroes();
  }, []);

  return (
    <>
      <div>
        {allHeroes.map((hero) => (
          <ul key={hero.id}>
          <li key={hero.id}>{hero.name}</li>
          <li>{hero.description}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Admin;
