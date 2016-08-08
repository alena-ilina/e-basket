const combineReducers = require("redux").combineReducers;
const itemsReducer = require("./items");

module.exports = combineReducers({
    items: itemsReducer
});
