module.exports = `
    <div class="price{{#if ui.isLoading}} _loading{{/if}}">
        <div class="price__discount">
            Цена&nbsp;<span class="price__discount-wrapper
            {{#isNotNull totalPrice.discount}}
            {{else}}
            _disabled
            {{/isNotNull}}
        ">&nbsp;со&nbsp;<span class="price__discount-value">скидкой&nbsp;{{totalPrice.discount}}%:</span></span>
        </div>
        <div class="price__value">
            {{digits totalPrice.price}} <span class="price__value-rouble"> </span>
        </div>
        <div class="
            price__priceWithoutDiscount
                {{#isNotNull totalPrice.discount}}
                {{else}}
                    _hidden
                {{/isNotNull}}
            "
        >
            {{digits totalPrice.priceWithoutDiscount}}
            <span class="price__priceWithoutDiscount-rouble"> </span>
        </div>
    </div>
`;
