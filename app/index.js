const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = require('redux-logger');
const rootReducer = require('./reducers');
const $ = require('jquery');
const state = require('./data');

const appStore = createStore(rootReducer, state, applyMiddleware(logger()));

const BasketTable = require('./components/basketTable');

new BasketTable($('._js-basket'), appStore);
