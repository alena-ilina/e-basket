const combineReducers = require("redux").combineReducers;
const itemsList = require("./itemsList");
const totalPrice = require("./totalPrice");
const ui = require("./ui");

module.exports = combineReducers({
    itemsList, totalPrice, ui
});
