module.exports = {

    digits(number) {
        if (number < 10000) {
            return number.toString();
        }

        const numberArray = number.toString().split(".");

        const integerNumber = numberArray[0].split("").reverse().reduce((acc, digit, index) => {
            if (index && index % 3 === 0) {
                acc.push(" ");
            }

            acc.push(digit);
            return acc;
        }, []).reverse().join("");

        if (numberArray[1]) {
            return integerNumber.concat(",", numberArray[1]);
        }

        return integerNumber;
    },

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
};
