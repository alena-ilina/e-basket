module.exports = `
{{#each itemsList}}
    <tr class="item-row" data-id="{{id}}" id="{{id}}">
        <td class="item-row__cell">
            {{title}}
        </td>
        <td class="item-row__cell">
            {{size}}
        </td>
        <td class="item-row__cell">
            {{weigh}}
        </td>
        <td class="item-row__cell _type_price">
            {{digits price}}
        </td>
        <td class="item-row__cell">
            <div class="counter">
                <div class="
                    counter__decrement
                    {{#isNotNull count}}
                    {{else}}
                         _disabled
                    {{/isNotNull}}
                "
                data-action="decrement">
                    -
                </div>
                <input type="text" value="{{count}}" class="counter__value _js-counter-input"/>
                <div class="counter__increment" data-action="increment">
                    +
                </div>
            </div>
        </td>
        <td class="item-row__cell _type_price">
            {{#isNotNull totalPrice}}
                {{digits ../totalPrice}}
            {{else}}
                —
            {{/isNotNull}}
        </td>
        <td class="item-row__cell">
            <a href="#" class="item-row__cell-delete-item" data-action="remove-item">Удалить</a>
        </td>
    </tr>
{{/each}}`;
