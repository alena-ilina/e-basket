const Promise = require("bluebird");
const utils = require("./utils");

module.exports = {
    getTotalPrice(itemsList) {
        return new Promise((resolve, reject) => {
            /**
             * Настоящая логика пересчета цены находится тут
             */
            setTimeout(() => {
                const totalPrice = utils.calculateTotalPrice(itemsList);
                const discountValue = utils.calculateDiscount(totalPrice);
                const response = {
                    price: totalPrice - totalPrice * discountValue / 100,
                    rawPrice: totalPrice,
                    discountValue
                };

                resolve(response);
            }, 1000);
        });
    },

    makeOrder(data) {
        return new Promise((resolve, reject) => {
            /**
             * Настоящая логика отправки данных находится тут
             */
            setTimeout(() => {
                const response = {
                    code: 200,
                    message: "Everything is ok"
                };

                resolve(response);
            }, 500);
        });
    }
};

