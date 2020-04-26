import { IPokemon } from "./PokemonContext";

export const CAPTURE = "CAPTURE";
export const RELEASE = "RELEASE";

export interface IState {
  pokemons: IPokemon[];
  capturedPokemons: IPokemon[];
}

export interface IAction {
  type: string;
  pokemon: IPokemon;
}

const getCapturedPokemons = (
  capturedPokemons: IPokemon[],
  releasedPokemon: IPokemon
) =>
  capturedPokemons.filter((pokemon: IPokemon) => pokemon !== releasedPokemon);

const releasePokemon = (releasedPokemon: IPokemon, state: IState) => ({
  pokemons: [...state.pokemons, releasedPokemon],
  capturedPokemons: getCapturedPokemons(
    state.capturedPokemons,
    releasedPokemon
  ),
});

const getPokemonsList = (pokemons: IPokemon[], capturedPokemon: IPokemon) =>
  pokemons.filter((pokemon: IPokemon) => pokemon !== capturedPokemon);

const capturePokemon = (pokemon: IPokemon, state: IState) => ({
  pokemons: getPokemonsList(state.pokemons, pokemon),
  capturedPokemons: [...state.capturedPokemons, pokemon],
});

export const pokemonReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case CAPTURE:
      return capturePokemon(action.pokemon, state);
    case RELEASE:
      return releasePokemon(action.pokemon, state);
    default:
      return state;
  }
};
