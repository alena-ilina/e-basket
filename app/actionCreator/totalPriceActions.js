const api = require("../api");

module.exports = {
    updateTotalPrice(totalPriceValue) {
        return dispatch => {
            dispatch({
                type: "PRICE_IS_LOADING"
            });

            api.getTotalPrice(totalPriceValue)
                .then(result => {
                    dispatch({
                        type: "PRICE_IS_LOADED",
                        payload: result
                    });
                })
                .catch(error => {
                    dispatch({
                        type: "PRICE_IS_LOADED_WITH_ERROR",
                        payload: {
                            error
                        }
                    });
                });
        };
    }
};
