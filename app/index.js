const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = require("redux-logger");
const thunk = require("redux-thunk").default;
const rootReducer = require("./reducers");
const $ = require("jquery");
const state = require("./data");

const appStore = createStore(rootReducer, state, applyMiddleware(logger(), thunk));

const BasketTable = require("./components/basketTable");
const TotalPrice = require("./components/totalPrice");
const OrderButton = require("./components/orderButton");

/* eslint-disable no-new */

new BasketTable($("._js-basket"), appStore);
new TotalPrice($("._js-basket-price"), appStore);
new OrderButton($("._js-basket-order-button"), appStore);

/* eslint-enable no-new */
