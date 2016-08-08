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

        // Диспатчить экшены для отправки
    });
};

OrderButton.prototype.render = function renderOrderButton(props) {
    const {ui} = props;

    const htmlString = `
        <button class="order-button" ${ui.isLoading ? "disabled" : ""}>
            Оформить заказ
        </button>
    `;

    this.$container[0].innerHTML = htmlString;
};

module.exports = OrderButton;
