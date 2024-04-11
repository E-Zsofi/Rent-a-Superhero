import { useState, useEffect } from "react";
import Header from "./Header";

function ShowContacts() {
  const [map, setMap] = useState([]);

  useEffect(() => {
    async function fetchMap() {
      const response = await fetch("/api/hero");
      const data = await response.json();
      setMap(data);
    }
    fetchMap();
  }, []);

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div>
      
      </div>
    </>
  );
}

export default ShowContacts;