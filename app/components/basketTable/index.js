const $ = require('jquery');

function BasketTable($container, store) {
    this.container = $container;
    this.$tableBody = this.container.find('._js-basket-body');
    this.store = store;
    this.render(store.getState().itemsList);
    this.bind();
};

BasketTable.prototype.render = function render(props) {
    const htmlString = props.reduce((resultString, item) => {
        resultString += `
            <tr>
                <td>
                    ${item.title}
                </td>
                <td>
                    ${item.size}
                </td>
                <td>
                    ${item.weigh}
                </td>
                <td>
                    ${item.price}
                </td>
                <td>
                    ${item.count}
                </td>
                <td>
                    ${item.totalPrice}
                </td>
                <td>
                    Delete
                </td>
            </tr>
        `;
        return resultString;
    }, '');

    this.$tableBody[0].innerHTML = htmlString;
};


BasketTable.prototype.bind = function bind() {

};

module.exports = BasketTable;
