import React, { useContext, useEffect } from "react";
import { PokemonContext } from "./PokemonContext";

export default function PokemonsList() {
  const url = "https://pokeapi.co/api/v2/pokemon";

  const { pokemons, capture, addPokemons } = useContext(PokemonContext);

  let data;
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      // TODO still don't really understand this infinite loop fix hack
      // eslint-disable-next-line react-hooks/exhaustive-deps
      data = await response.json();
      addPokemons && addPokemons(data.results);
    };

    fetchPokemons();
  }, [data]);
  return (
    <div className="pokemons-list">
      <h2>Pokemons List</h2>

      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={`${pokemon.id}-${pokemon.name}`}>
            <span>{pokemon.name}</span>
            <button onClick={capture && capture(pokemon)}>+</button>
          </div>
        ))}
    </div>
  );
}
