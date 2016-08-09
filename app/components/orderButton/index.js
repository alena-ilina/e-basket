const Handlebars = require("handlebars");
const orderButtonActions = require("../../actionCreator/orderButtonActions");

/**
 * Компонент кнопки отправки заказа
 * @param {Object} $container Jquery-объект с контейнером для компонента
 * @param {Object} store      Redux-стор
 */
function OrderButton($container, store) {
    this.$container = $container;
    this.store = store;
    this.render(this.store.getState());
    this.bind();
    this.unsubscribe = this.store.subscribe(() => {
        this.render(this.store.getState());
    });
}

OrderButton.prototype.bind = function bindOrderButton() {
    this.$container.on("click", ".order-button", () => {
        const data = this.store.getState().itemsList;

        this.store.dispatch(
            orderButtonActions.sentOrder(data)
        );
    });
};

OrderButton.prototype.render = function renderOrderButton(props) {
    const {ui} = props;

    const htmlString = `
        <button class="order-button" ${ui.isLoading ? "disabled" : ""}>
            Оформить заказ
        </button>
    `;

    const template = Handlebars.compile(htmlString);
    const readyHtml = template();

    this.$container[0].innerHTML = readyHtml;
};

module.exports = OrderButton;
