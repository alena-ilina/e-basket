const api = require("../api");

module.exports = {
    sentOrder(itemList) {
        return dispatch => {
            dispatch({
                type: "ORDER_IS_SENDING"
            });

            api.makeOrder(itemList)
                .then(result => {
                    dispatch({
                        type: "ORDER_IS_SENT",
                        payload: result
                    });
                })
                .catch(error => {
                    dispatch({
                        type: "ORDER_IS_SENT_WITH_ERROR",
                        payload: {
                            error
                        }
                    });
                });
        };
    }
};
