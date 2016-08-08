const $ = require("jquery");
const basketTableActions = require("../../actionCreator/basketTableActions");
const totalPriceActions = require("../../actionCreator/totalPriceActions");
const utils = require("./utils");
const libs = require("../../libs");

/**
 * BasketTable constructor
 * @param {Object} $container
 * @param {Object} store
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

    // TODO
    if (ui.isLoading) {
        this.$container.addClass("_loading");
    } else {
        this.$container.removeClass("_loading");
    }
    // TODO

    /* eslint-disable no-param-reassign */
    const htmlString = itemsList.reduce((accumulator, item) => {
        const counterDecrementActivityState = item.count === 0 ? " _disabled" : "";

        accumulator += `
            <tr class="item-row" data-id="${item.id}" id="${item.id}">
                <td class="item-row__cell">
                    ${item.title}
                </td>
                <td class="item-row__cell">
                    ${item.size}
                </td>
                <td class="item-row__cell">
                    ${item.weigh}
                </td>
                <td class="item-row__cell _type_price">
                    ${libs.digits(item.price.toFixed(2))}
                </td>
                <td class="item-row__cell">
                    <div class="counter">
                        <div class="counter__decrement ${counterDecrementActivityState}" data-action="decrement">
                            -
                        </div>
                        <input type="text" value="${item.count}" class="counter__value _js-counter-input"/>
                        <div class="counter__increment" data-action="increment">
                            +
                        </div>
                    </div>
                </td>
                <td class="item-row__cell _type_price">
                    ${item.totalPrice === 0 ? "—" : libs.digits(item.totalPrice.toFixed(2))}
                </td>
                <td class="item-row__cell">
                    <a href="#" class="item-row__cell-delete-item" data-action="remove-item">Удалить</a>
                </td>
            </tr>
        `;
        return accumulator;
    }, "");
    /* eslint-enable no-param-reassign */

    this.tableBody.innerHTML = htmlString;
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
