import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';
import createPokemon from './components/new_pokemon/pokemon_form_container';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
  window.store = store;

  window.createPokemon = createPokemon;
});
