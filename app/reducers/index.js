const combineReducers = require('redux').combineReducers;
const itemsList = require('./itemsList');
const totalPrice = require('./totalPrice');

module.exports = combineReducers({
    itemsList, totalPrice
});
