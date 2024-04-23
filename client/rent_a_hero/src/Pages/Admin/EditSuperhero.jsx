import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditSuperhero() {

const {id} = useParams();
const [hero, setHero] = useState(null)

async function fetchHeroToEdit(id) {
 const response = await fetch(`/api/edit/${id}`);
 const data = await response.json();
  setHero(data);
}

useEffect(() => {
  fetchHeroToEdit(id);
}, [])

  return (
    hero && (
    <form action="">   
      <div key={hero._id} className="HeroContainer">
        Name:
        <input type="text" value={hero.name}/>
        Picture URL:
        <input type="text" value={hero.pictureUrl}/>
        Description:
        <input type="text" value={hero.description}/>    
        Abilities:
        <input type="text" />
        Gender:
        <input type="text" value={hero.gender}/>      
        Status:
        <input type="text" value={hero.status}/>    
        Hero Type: 
        <input type="text" value={hero.heroType}/>
        Rating:
        <input type="text" value={hero.rating}/>
        Price:
        <input type="text" value={hero.price}/>
      <button>Save changes</button>
      </div>
    </form>
    )
  )
}
export default EditSuperhero;
