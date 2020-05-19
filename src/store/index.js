import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Le decimos al store que vamos a incorporrar el middleware thunk
export const store = createStore( reducers, {}, composeEnhancers(applyMiddleware(promiseMiddleware)) );