module.exports = function uiReducer(state = {isLoading: false}, action) {
    switch (action.type) {
        case "PRICE_IS_LOADING":
            return Object.assign({}, state, {isLoading: true});
        case "ORDER_IS_SENDING":
            return Object.assign({}, state, {isLoading: true});
        case "ORDER_IS_SENT":
            return Object.assign({}, state, {isLoading: false});
        case "PRICE_IS_LOADED":
            return Object.assign({}, state, {isLoading: false});
        case "PRICE_IS_LOADED_WITH_ERROR":
            return Object.assign({}, state, {isLoading: false});
        case "ORDER_IS_SENT_WITH_ERROR":
            return Object.assign({}, state, {isLoading: false});
        default:
            return state;
    }
};
