import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducer from './reducers';

const store = createStore(allReducer);

ReactDOM.render(<App />, document.getElementById('root'));
