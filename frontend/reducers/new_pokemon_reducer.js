import { RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';

const NewPokemonReducer = (state = {items: [], moves: []}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_NEW_POKEMON:
    newState = action.pokemon;
    return newState;
    default:
    return state;
  }
};

export default NewPokemonReducer;
