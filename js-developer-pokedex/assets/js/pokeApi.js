import { convertPokeApiDetailToPokemon } from './utils.js';

async function getPokemonDetail(pokemon) {
  const response = await fetch(pokemon.url);
  const json = await response.json();
  const objectPokemon = convertPokeApiDetailToPokemon(json);

  return objectPokemon;
}

async function getPokemons(offset = 0, limit = 5) {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  const response = await fetch(url);
  const { results } = await response.json();
  const pokemons = await Promise.all(results.map(getPokemonDetail));

  return pokemons;
}

export {
  getPokemons,
};
