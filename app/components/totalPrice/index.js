const libs = require("../../libs");

/**
 * TotalPrice constructor
 * @param {Object} $container
 * @param {Object} store
 */
function TotalPrice($container, store) {
    this.$container = $container;
    this.store = store;
    this.render(store.getState());
    this.unsubscribe = this.store.subscribe(() => {
        this.render(this.store.getState());
    });
}

TotalPrice.prototype.render = function render(props) {
    const {ui, totalPrice} = props;

    const htmlString = `
        <div class="price${ui.isLoading ? " _loading" : ""}">
            <div class="price__discount">
                Цена <span class="price__discount-wrapper ${totalPrice.discount === 0 ? " _disabled" : ""}"> со
                    <span class="price__discount-value">скидкой ${totalPrice.discount}%:</span>
                    </span>
            </div>
            <div class="price__value">
                ${libs.digits(totalPrice.price.toFixed(2))} <span class="price__value-rouble"> </span>
            </div>
            <div class="price__priceWithoutDiscount ${totalPrice.discount === 0 ? " _disabled" : ""}">
                Без скидки ${libs.digits(totalPrice.priceWithoutDiscount.toFixed(2))}
                <span class="price__priceWithoutDiscount-rouble"> </span>
            </div>
        </div>
    `;

    this.$container[0].innerHTML = htmlString;
};

module.exports = TotalPrice;
