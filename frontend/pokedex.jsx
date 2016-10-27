import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';
import {fetchOnePokemon} from './util/api_util';
import {requestOnePokemon} from './actions/pokemon_actions';
document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
  window.store = store;

  window.fetchOnePokemon = fetchOnePokemon;
  window.requestOnePokemon = requestOnePokemon;
});
