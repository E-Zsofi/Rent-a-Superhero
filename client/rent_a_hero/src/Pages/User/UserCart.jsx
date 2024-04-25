import { useEffect, useState } from "react";

export default function UserCart() {

const [cartElements, setCartElements] = useState(null);

async function fetchCart() {
  const response = await fetch("/api/cart");
  const data = await response.json();
  setCartElements(data);
}

useEffect(() => {
  fetchCart()
}, [])

function sumPrices(cartElements) {
  let sum = 0;
  for (const element of cartElements) {
    sum += element.price
  }
  return sum;
}

  return (
    cartElements && (
      <>
      <div className="heroes">
      {cartElements.map((cartElement, index)=> (
        <div key={index} className="HeroContainer">
          <p>{cartElement.name}</p>
          <p>{cartElement.price}</p>
          <img src={cartElement.pictureUrl}/>
          <button>Remove from cart</button>
        </div> 
      ))}
    </div>
    <div className="heroes">
      <h2>Total: {sumPrices(cartElements) + " $"}</h2>      
    </div>
    </>
    )
  )
}