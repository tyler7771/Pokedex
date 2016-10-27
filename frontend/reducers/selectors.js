import { values } from 'lodash';

const selectAllPokemon = (state) => {
  let allPokemon = _.values(state.pokemon);
  return allPokemon;
};

export default selectAllPokemon;
