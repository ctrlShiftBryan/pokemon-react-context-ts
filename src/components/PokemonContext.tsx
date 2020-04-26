import React, { createContext, useReducer } from "react";
import {
  ADD_POKEMON,
  CAPTURE,
  IState,
  pokemonReducer,
  RELEASE,
} from "./PokemonReducer";

export interface IProviderPokemon {
  children: any[] | any;
}

export interface IPokemon {
  id: string;
  name: string;
}

export interface IPokemonProvider {
  pokemons: IPokemon[];
  capture: Function;
  capturedPokemons: IPokemon[];
  release: Function;
  addPokemon: Function;
}
export const PokemonContext = createContext<Partial<IPokemonProvider>>({});

export const PokemonProvider = (props: IProviderPokemon) => {
  const defaultState: IState = {
    pokemons: [
      { id: "1", name: "Bulbasaur" },
      { id: "2", name: "Charmander" },
      { id: "3", name: "Squirtle" },
    ],
    capturedPokemons: [],
  };
  const [state, dispatch] = useReducer(pokemonReducer, defaultState);

  const capture = (pokemon: IPokemon) => () => {
    dispatch({ type: CAPTURE, pokemon });
  };

  const release = (pokemon: IPokemon) => () => {
    dispatch({ type: RELEASE, pokemon });
  };

  const addPokemon = (pokemon: IPokemon) => {
    dispatch({ type: ADD_POKEMON, pokemon });
  };

  const { pokemons, capturedPokemons } = state;

  const providerValue = {
    pokemons,
    capturedPokemons,
    release,
    capture,
    addPokemon,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};
