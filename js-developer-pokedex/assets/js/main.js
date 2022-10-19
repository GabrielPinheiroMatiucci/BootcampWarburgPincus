import { convertPokemonToLi } from './utils.js';
import { getPokemons } from './pokeApi.js';

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 15;
const limit = 5;
let offset = 0;

function loadPokemonItens(offset, limit) {
  getPokemons(offset, limit).then((pokemons = []) => {
    const pokemonsHTMLList = pokemons.map(convertPokemonToLi).join('');
    pokemonList.innerHTML += pokemonsHTMLList;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
