const combineReducers = require("redux").combineReducers;
const itemsList = require("./itemsList");
const totalPrice = require("./totalPrice");
const ui = require("./ui");
const orderButton = require("./orderButton");

module.exports = combineReducers({
    itemsList, totalPrice, ui, orderButton
});
