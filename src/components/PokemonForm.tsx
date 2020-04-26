import React, { ChangeEvent, useContext, useState } from "react";
import { PokemonContext } from "./PokemonContext";
export interface IPokemonFormProps {}

export const generateID = () => {
  const a = Math.random().toString(36).substring(2, 15);

  const b = Math.random().toString(36).substring(2, 15);

  return a + b;
};

export default function PokemonForm(props: IPokemonFormProps) {
  const [pokemonName, setPokemonName] = useState<string>("");
  const { addPokemon } = useContext(PokemonContext);

  const handleNameOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setPokemonName(e.target.value);
  };

  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPokemon &&
      addPokemon({
        id: generateID(),
        name: pokemonName,
      });
    setPokemonName("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Add Pokemons</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="pokemon name"
          value={pokemonName}
          onChange={handleNameOnChange}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
