module.exports = {
    incrementItemCount(itemId) {
        return {
            type: "INCREMENT_COUNT_VALUE",
            payload: {
                id: itemId
            }
        };
    },

    decrementItemCount(itemId) {
        return {
            type: "DECREMENT_COUNT_VALUE",
            payload: {
                id: itemId
            }
        };
    },

    calculateItemTotalPrice(itemId) {
        return {
            type: "CHANGE_TOTAL_PRICE_IN_ITEM",
            payload: {
                id: itemId
            }
        };
    },

    deleteAllItemsFromTable() {
        return {
            type: "DELETE_ALL_ITEMS_FROM_TABLE"
        };
    },

    deleteCurrentItem(itemId) {
        return {
            type: "DELETE_ITEM_FROM_TABLE",
            payload: {
                id: itemId
            }
        };
    },
    changeItemCount(itemId, itemCount) {
        return {
            type: "CHANGE_COUNT_OF_ITEM",
            payload: {
                id: itemId,
                itemCount: itemCount
            }
        };
    }
};
