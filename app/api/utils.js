module.exports = {
    calculateDiscount(priceValue) {
        if (priceValue <= 9999) {
            return 0;
        } else if (priceValue >= 10000 && priceValue < 15000) {
            return 5;
        } else if (priceValue >= 15000 && priceValue < 20000) {
            return 10;
        }

        return 15;
    },

    /* eslint-disable no-param-reassign */
    calculateTotalPrice(itemsList) {
        return itemsList.reduce((accumulator, item) => {
            accumulator += item.price;
            return accumulator;
        }, 0);
    }
    /* eslint-disable no-param-reassign */
};
