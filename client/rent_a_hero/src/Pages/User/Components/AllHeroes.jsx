
function AllHeroes( {allHeroes} ) {
  // const [allHeroes, setAllHeroes] = useState([]);
  // const heroes = props.allHeroes;
  console.log(allHeroes);

  return (
    
    <div>
    <h2>Hero List</h2>
    <table>
      <tbody>
      {allHeroes.map((hero) => (
          <tr key={hero.id}>
            <td>{hero.name}</td> 
            <td>
              <img src={hero.pictureUrl}></img>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default AllHeroes;