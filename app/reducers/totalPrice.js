const initialState = {
    discount: 0,
    price: 0,
    priceWithoutDiscount: 0
};

module.exports = function totalPriceReducer(state = initialState, action) {
    switch (action.type) {
        case "COUNT_NEW_PRICE":
            return Object.assign({}, state, {price: action.totalPriceValue});
        case "PRICE_IS_LOADED":
            return Object.assign({}, state, {
                priceWithoutDiscount: action.payload.rawPrice,
                price: action.payload.price,
                discount: action.payload.discountValue
            });
        case "ORDER_IS_SENT":
            return initialState;
        default:
            return state;
    }
};
