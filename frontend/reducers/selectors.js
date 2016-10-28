import { values } from 'lodash';

export const selectAllPokemon = (state) => {
  let allPokemon = _.values(state.pokemon);
  return allPokemon;
};

export const selectPokemonItem = (state, itemId) => {
  let itemToReturn = {};
  state.pokemonDetail.items.forEach((item) => {
    if (item.id === parseInt(itemId)) {
      itemToReturn = item;
    }
  });
  return itemToReturn;
};
