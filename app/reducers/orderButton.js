module.exports = function orderButtonReducer(state = {}, action) {
    switch (action.type) {
        case "ORDER_IS_SENT":
            return {};
        default:
            return state;
    }
};
