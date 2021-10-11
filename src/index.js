import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducer from './redux/reducer';
import {routerReducer} from 'react-router-redux';
import { createBrowserHistory } from 'history';
import {initializeApp} from 'firebase/app';
import routerMiddleware from './redux/middleware';

const firebaseConfig = {};
initializeApp(firebaseConfig);

const history = createBrowserHistory();

const store = createStore(combineReducers({reducer:reducer, routing:routerReducer}), applyMiddleware(routerMiddleware(history)));

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App history={history}/>
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
