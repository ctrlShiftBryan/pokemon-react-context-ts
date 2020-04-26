import React from "react";
import "./App.css";
import Pokedex from "./components/CapturedPokemons";
import { PokemonProvider } from "./components/PokemonContext";
import PokemonsList from "./components/PokemonsList";

const App = () => (
  <PokemonProvider>
    <div className="App">
      <PokemonsList />
      <Pokedex />
    </div>
  </PokemonProvider>
);

export default App;
