import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [allHeroes, setAllHeroes] = useState([]);

  useEffect(() => {
    async function fetchSuperheroes() {
      const response = await fetch("/api/admin");
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
          <li key={hero.id}>{hero.name}</li>
        ))}
      </div>
    </>
  );
}

export default App;
