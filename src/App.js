import './App.css';

const API_URL = "https://pokeapi.co/api/v2/pokemon/"

// async function fetchPokemon(name) {
//   try {
//     const endpoint = new URL(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

class Pokemon {
  constructor(name, image) {
    this.name = name[0].toUpperCase() + name.substring(1);
    this.image = image;
  }
}

function getPokemon(name) {
  const xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", API_URL + name, false); 
  xmlHttpReq.send(null);
  const res = JSON.parse(xmlHttpReq.responseText);

return new Pokemon(res.name, res.sprites.front_default)
}

const fetchTheData = getPokemon('pikachu')
// fetchPokemon('pikachu');

console.log(fetchTheData)

function App() {
  return <div className="App"> 
  <div>
    <img src={fetchTheData.image} />
  </div>
  <h2 className="text-xl">{fetchTheData.name}</h2> 
  </div>;
}

export default App;
