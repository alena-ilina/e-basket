const utils = require("../libs");

module.exports = function itemsListReducer(state = [], action) {
    switch (action.type) {
        case "DELETE_ITEM_FROM_TABLE":
            return state.filter(item => item.id !== action.payload.id);
        case "DELETE_ALL_ITEMS_FROM_TABLE":
            return [];
        case "ORDER_IS_SENT":
            return [];
        case "INCREMENT_COUNT_VALUE":
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.count += 1;
                }
                return item;
            });
        case "DECREMENT_COUNT_VALUE":
            return state.map(item => {
                if (item.id === action.payload.id && item.count > 0) {
                    item.count -= 1;
                }
                return item;
            });
        case "CHANGE_TOTAL_PRICE_IN_ITEM":
            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.totalPrice = item.count * item.price;
                }
                return item;
            });
        case "CHANGE_COUNT_OF_ITEM":
            return state.map(item => {
                if (item.id === action.payload.id) {
                    if (utils.isNumeric(action.payload.itemCount) && action.payload.itemCount >= 0) {
                        item.count = parseInt(action.payload.itemCount, 10);
                    }
                }
                return item;
            });
        default:
            return state;
    }
};


