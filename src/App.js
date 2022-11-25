import './App.css';

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

// class Pokemon {
//   constructor(name, image) {
//     this.name = name;
//     this.image = image;
//   }
// }

// const fetchTheData = new Pokemon(fetchPokemon('pikachu'));
// fetchPokemon('pikachu');

function App() {
  return <div className="App">{/* <h2 className="text-xl">{fetchTheData.name}</h2> */}</div>;
}

export default App;
