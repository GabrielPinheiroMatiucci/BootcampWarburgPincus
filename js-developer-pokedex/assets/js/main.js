import { convertPokemonToLi } from './utils.js';
import { getPokemons } from './pokeApi.js';

const pokemonsList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 18;
const limit = 5;
let offset = 0;

async function loadPokemonItens(offset, limit) {
  const pokemons = await getPokemons(offset, limit);
  const pokemonsHTMLList = pokemons.map(convertPokemonToLi).join('');
  pokemonsList.innerHTML += pokemonsHTMLList;
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', async () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    await loadPokemonItens(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    await loadPokemonItens(offset, limit);
  }
});
