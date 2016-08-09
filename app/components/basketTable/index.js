const $ = require("jquery");
const Handlebars = require("handlebars");
const basketTableActions = require("../../actionCreator/basketTableActions");
const totalPriceActions = require("../../actionCreator/totalPriceActions");
const utils = require("./utils");

/**
 * Компонент таблицы с товарами (точнее именно тела таблицы)
 * @param {Object} $container Jquery-объект с контейнером для компонента
 * @param {Object} store      Redux-стор
 */
function BasketTable($container, store) {
    this.$container = $container;
    this.tableBody = this.$container.find("._js-basket-body")[0];
    this.store = store;
    this.init();
    this.render(this.store.getState());
    this.bind();
    this.unsubscribe = this.store.subscribe(() => {
        this.render(this.store.getState());
    });
}

BasketTable.prototype.init = function basketTableInit() {
    const itemsList = this.store.getState().itemsList;

    this.store.dispatch(
        totalPriceActions.updateTotalPrice(
            utils.prepareItemsToTotalPriceCalcRequest(itemsList)
        )
    );
};

BasketTable.prototype.render = function render(props) {
    const {itemsList, ui} = props;
    const context = {itemsList};

    if (ui.isLoading) {
        this.$container.addClass("_loading");
    } else {
        this.$container.removeClass("_loading");
    }

    const templateString = require("./template");
    const compileTemplate = Handlebars.compile(templateString);
    const readyHtml = compileTemplate(context);

    this.tableBody.innerHTML = readyHtml;
};

BasketTable.prototype.bind = function bind() {
    this.$container.on("change", "._js-counter-input", event => {
        event.stopPropagation();
        const $currentTarget = $(event.target);
        const currentTargetValue = $currentTarget.val();
        const itemId = $currentTarget.closest(".item-row").data("id");
        const itemsList = this.store.getState().itemsList;

        this.store.dispatch(basketTableActions.changeItemCount(itemId, currentTargetValue));
        this.store.dispatch(basketTableActions.calculateItemTotalPrice(itemId));

        this.store.dispatch(
            totalPriceActions.updateTotalPrice(
                utils.prepareItemsToTotalPriceCalcRequest(itemsList)
            )
        );
    });

    this.$container.on("click", event => {
        event.stopPropagation();
        const $currentTarget = $(event.target);
        const currentTargetAction = $currentTarget.data("action");

        if (!currentTargetAction) {
            return;
        }

        const itemId = $currentTarget.closest(".item-row").data("id");

        switch (currentTargetAction) {
            case "remove-item":
                this.store.dispatch(
                    basketTableActions.deleteCurrentItem(itemId)
                );

                this.store.dispatch(
                    totalPriceActions.updateTotalPrice(
                        utils.prepareItemsToTotalPriceCalcRequest(
                            this.store.getState().itemsList
                        )
                    )
                );
                break;

            case "increment":
                this.store.dispatch(
                    basketTableActions.incrementItemCount(itemId)
                );
                this.store.dispatch(
                    basketTableActions.calculateItemTotalPrice(itemId)
                );

                this.store.dispatch(
                    totalPriceActions.updateTotalPrice(
                        utils.prepareItemsToTotalPriceCalcRequest(
                            this.store.getState().itemsList
                        )
                    )
                );
                break;

            case "decrement":
                if (!($currentTarget.hasClass("_disabled"))) {
                    this.store.dispatch(
                        basketTableActions.decrementItemCount(itemId)
                    );

                    this.store.dispatch(
                        basketTableActions.calculateItemTotalPrice(itemId)
                    );

                    this.store.dispatch(
                        totalPriceActions.updateTotalPrice(
                            utils.prepareItemsToTotalPriceCalcRequest(
                                this.store.getState().itemsList
                            )
                        )
                    );
                }

                break;

            case "remove-all-items":
                this.store.dispatch(
                    basketTableActions.deleteAllItemsFromTable()
                );

                this.store.dispatch(
                    totalPriceActions.updateTotalPrice(
                        utils.prepareItemsToTotalPriceCalcRequest(
                            this.store.getState().itemsList
                        )
                    )
                );

                break;
            default:
                break;
        }
    });
};

module.exports = BasketTable;
