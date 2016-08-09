const Handlebars = require("handlebars");

/**
 * Компонент вывода цены по всем товарам
 * @param {Object} $container Jquery-объект с контейнером для компонента
 * @param {Object} store      Redux-стор
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
    const context = {ui, totalPrice};
    const templateString = require("./template");
    const compileTemplate = Handlebars.compile(templateString);
    const readyHtml = compileTemplate(context);

    this.$container[0].innerHTML = readyHtml;
};

module.exports = TotalPrice;
