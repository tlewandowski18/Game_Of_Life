import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';

import reducer from "./reducers"
import './index.css';

import App from './App';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


