const libs = require("../../libs");
const expect = require("chai").expect;

describe("libs ", () => {
    describe("digits", () => {
        describe("Должен вернуть корректную цену с пробелами, Price = ", () => {
            it("0 => 0", () => {
                const totalPrice = 0;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("0");
            });

            it("1 => 1,00", () => {
                const totalPrice = 1;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("1,00");
            });

            it("12 => 12,00", () => {
                const totalPrice = 12;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("12,00");
            });

            it("123 => 123,00", () => {
                const totalPrice = 123;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("123,00");
            });

            it("1234 => 1234,00", () => {
                const totalPrice = 1234;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("1234,00");
            });

            it("12345 => 12 345,00", () => {
                const totalPrice = 12345;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("12 345,00");
            });

            it("123456 => 123 456,00", () => {
                const totalPrice = 123456;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("123 456,00");
            });

            it("1234567 => 1 234 567,00", () => {
                const totalPrice = 1234567;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("1 234 567,00");
            });

            it("1234567,45 => 1 234 567,45", () => {
                const totalPrice = 1234567.45;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("1 234 567,45");
            });

            it("12345678 => 12 345 678,00", () => {
                const totalPrice = 12345678;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("12 345 678,00");
            });

            it("123456789 => 123 456 789,00", () => {
                const totalPrice = 123456789;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("123 456 789,00");
            });

            it("1234567890 => 1 234 567 890,00", () => {
                const totalPrice = 1234567890;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("1 234 567 890,00");
            });

            it("12345.50 => 12 345.50", () => {
                const totalPrice = 12345.50;
                const price = libs.digits(totalPrice);

                expect(price).to.be.equal("12 345,50");
            });
        });
    });

    describe("isNumeric", () => {
        it("'123' => true", () => {
            const isNumber = libs.isNumeric("123");
            expect(isNumber).to.be.equal(true);
        });

        it("123 => true", () => {
            const isNumber = libs.isNumeric(123);
            expect(isNumber).to.be.equal(true);
        });

        it("-10 => true", () => {
            const isNumber = libs.isNumeric(-10);
            expect(isNumber).to.be.equal(true);
        });

        it("abcd => false", () => {
            const isNumber = libs.isNumeric("abcd");
            expect(isNumber).to.be.equal(false);
        });

        it("100abcd => false", () => {
            const isNumber = libs.isNumeric("100abcd");
            expect(isNumber).to.be.equal(false);
        });
    });
});
