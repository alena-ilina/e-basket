module.exports = function itemsListReducer(state = [], action) {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}
