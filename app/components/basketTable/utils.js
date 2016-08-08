module.exports = {
    prepareItemsToTotalPriceCalcRequest(itemsList) {
        return itemsList.map(item => ({
            id: item.id,
            price: item.totalPrice
        }));
    }
};
