import Pokemon from './Pokemon.js';

function convertPokemonToLi(pokemon) {
  return (
    `<li class="pokemon ${pokemon.type}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
          ${pokemon.types.map(
            (type) => `<li class="type ${type}">${type}</li>`
          ).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
      </div>
    </li>`
  );
}

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();

  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;;
  pokemon.types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  pokemon.type = pokemon.types[0];
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

export {
  convertPokemonToLi,
  convertPokeApiDetailToPokemon,
};
