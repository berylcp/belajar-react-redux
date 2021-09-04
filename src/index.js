import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

// Store -> Globalized State

// Action Increment
const increment = () => {
  return {
    tyoe: 'INCREMENT'
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

let store = createStore(counter);

// Display in the console
store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch(increment());

ReactDOM.render(<App />, document.getElementById('root'));
