/**
 * Склеиваем две части числа — дробную и целую, уже с пробелами
 * @param  {Array} numberParts  Части числа
 * @return {String}             Число с разделенными разрядами
 */
function concatNumberParts(numberParts) {
    if (numberParts.length > 1) {
        if (numberParts[1].length === 1) {
            numberParts[1] += "0";
        }

        return `${numberParts[0]},${numberParts[1]}`;
    }

    return `${numberParts[0]},00`;
}

module.exports = {

    digits(number) {
        if (!number) {
            return "0";
        }

        const numberParts = number.toString().split(".");

        if (number < 10000) {
            return concatNumberParts(numberParts);
        }


        numberParts[0] = numberParts[0].split("").reverse().reduce((acc, digit, index) => {
            if (index && index % 3 === 0) {
                acc.push(" ");
            }

            acc.push(digit);
            return acc;
        }, []).reverse().join("");

        return concatNumberParts(numberParts);
    },

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
};
