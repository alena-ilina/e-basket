const Handlebars = require("handlebars");
const libs = require("./index");

module.exports = function registerHandlebarsHelpers() {
    Handlebars.registerHelper("digits", number => {
        const result = libs.digits(parseFloat(number).toFixed(2));

        return new Handlebars.SafeString(result);
    });

    Handlebars.registerHelper("isNotNull", (value, options) => {
        if (value) {
            return options.fn(this);
        }

        return options.inverse(this);
    });
};
