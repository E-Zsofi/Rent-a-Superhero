import { useState } from "react";

function EditField({ heroId, fieldName, allHeroes }) {
  const [hero, setHero] = useState([]);
  const [editedValue, setEditedValue] = useState("");
  const [isBeingEdited, setIsBeingEdited] = useState(null);

  async function HandleUdpatedHero(id) {
    try {
      const updatedHero = {};
      updatedHero[fieldName] = editedValue;
      const response = await fetch(`/api/hero/${heroId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedHero),
      });
      //const updatedHero = await response.json();
      setHero(allHeroes.map((hero) => (hero._id === id ? updatedHero : hero)));
    } catch (error) {
      console.error(error);
    }
  }


  async function handleClickSave(id) {
    try {
      const updatedHero = {};
      updatedHero[fieldName] = editedValue;
      const response = await fetch(`/api/hero/${heroId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedHero),
      });
      //const updatedHero = await response.json();
      setHero(allHeroes.map((hero) => (hero._id === id ? updatedHero : hero)));
    } catch (error) {
      console.error(error);
    }
   setEditedValue("");
  }

  console.log(allHeroes);
  return (
    <ul>
      {allHeroes.map((hero, index) => (
        <li key={hero._id}>
          {isBeingEdited === index ? (
            <div>
              <input
                type="text"
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
              />
              <button onClick={() => handleClickSave(hero._id)}>Save</button>
            </div>
          ) : (
            <div>
              <button onClick={() => editModeOn(index)}>Edit</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default EditField;
