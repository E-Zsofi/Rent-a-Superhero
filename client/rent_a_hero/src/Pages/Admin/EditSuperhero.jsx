import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditSuperhero() {

const {id} = useParams();
const [hero, setHero] = useState(null);

async function fetchHeroToEdit(id) {
 const response = await fetch(`/api/edit/${id}`);
 const data = await response.json();
  setHero(data);
}

useEffect(() => {
  fetchHeroToEdit(id);
}, [])

async function upDateAHero(hero) {
  await fetch(`/api/hero/${hero._id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(hero)
  })
}


async function handleSubmit(event) {
  event.preventDefault();
  await upDateAHero(hero);
  }

  return (
    hero && (
    <form onSubmit={(e) => handleSubmit(e)}>   
      <div key={hero._id} className="HeroContainer">
        Name:
        <input type="text" value={hero.name} onChange={(e) => setHero({...hero, name: e.target.value})}/>
        Picture URL:
        <input type="text" value={hero.pictureUrl} onChange={(e) => setHero({...hero, pictureUrl: e.target.value})}/>
        Description:
        <input type="text" value={hero.description} onChange={(e) => setHero({...hero, description: e.target.value})}/>    
        Gender:
        <input type="text" value={hero.gender} onChange={(e) => setHero({...hero, gender: e.target.value})}/>      
        Status:
        <input type="text" value={hero.status} onChange={(e) => setHero({...hero, status: e.target.value})}/>    
        Hero Type: 
        <input type="text" value={hero.heroType} onChange={(e) => setHero({...hero, heroType: e.target.value})}/>
        Rating:
        <input type="text" value={hero.rating} onChange={(e) => setHero({...hero, rating: e.target.value})}/>
        Price:
        <input type="text" value={hero.price} onChange={(e) => setHero({...hero, price: e.target.value})}/>
      <button>Save changes</button>
      </div>
    </form>
    )
  )
}
export default EditSuperhero;
