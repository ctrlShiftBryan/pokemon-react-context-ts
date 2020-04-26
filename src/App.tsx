import React from "react";
import "./App.css";
import Pokedex from "./components/CapturedPokemons";
import { PokemonProvider } from "./components/PokemonContext";
import PokemonForm from "./components/PokemonForm";
import PokemonsList from "./components/PokemonsList";

const App = () => (
  <PokemonProvider>
    <div className="App">
      <PokemonsList />
      <Pokedex />
    </div>
    <PokemonForm />
  </PokemonProvider>
);

export default App;
