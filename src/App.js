import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Title from "./components/Title";
import Pokemon from "./components/pokemon";
import Charizard from "./components/charizard";

function App() {
  const pokemons = [
    {
      name: "Charizard",
      weight: 90,
      awesome: true,
      terrifying: true,
      abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
    },
    {
      name: "Bulbasaur",
      weight: 6.9,
      awesome: true,
      terrifying: true,
      abilities: ["Overgrow", "Chlorophyll"],
    },
    {
      name: "Mewtwo",
      weight: 122,
      awesome: true,
      terrifying: false,
      abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
    },
    {
      name: "Mega beedrill",
      weight: 65,
      awesome: false,
      terrifying: false,
      abilities: ["Intimidate", "Unnerve"],
    },
  ];
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        {pokemons.map((pokemon, index) => (
          <Pokemon
            key={index}
            name={pokemon.name}
            weight={pokemon.weight}
            awesome={pokemon.awesome}
            terrifying={pokemon.terrifying}
            abilities={pokemon.abilities}
          />
        ))}
      </main>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
