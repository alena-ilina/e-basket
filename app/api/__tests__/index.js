const utils = require("../utils");
const expect = require("chai").expect;
const mocks = require("./mocks");

describe("api utils", () => {
    describe("calculateDiscount", () => {
        describe("Должен вернуть корректную скидку Price =", () => {
            it("0", () => {
                const totalPrice = 0;
                const discountValue = utils.calculateDiscount(totalPrice);

                expect(discountValue).to.be.equal(0);
            });

            it("9999", () => {
                const totalPrice = 9999;
                const discountValue = utils.calculateDiscount(totalPrice);

                expect(discountValue).to.be.equal(0);
            });

            it("10000", () => {
                const totalPrice = 10000;
                const discountValue = utils.calculateDiscount(totalPrice);

                expect(discountValue).to.be.equal(5);
            });

            it("14999", () => {
                const totalPrice = 14999;
                const discountValue = utils.calculateDiscount(totalPrice);

                expect(discountValue).to.be.equal(5);
            });

            it("15000", () => {
                const totalPrice = 15000;
                const discountValue = utils.calculateDiscount(totalPrice);

                expect(discountValue).to.be.equal(10);
            });

            it("19999", () => {
                const totalPrice = 19999;
                const discountValue = utils.calculateDiscount(totalPrice);

                expect(discountValue).to.be.equal(10);
            });

            it("20000", () => {
                const totalPrice = 20000;
                const discountValue = utils.calculateDiscount(totalPrice);

                expect(discountValue).to.be.equal(15);
            });

            it("20001", () => {
                const totalPrice = 20001;
                const discountValue = utils.calculateDiscount(totalPrice);

                expect(discountValue).to.be.equal(15);
            });
        });
    });

    describe("calculateTotalPrice", () => {
        it("Должен вернуть корректную итоговую сумму по всем товарам", () => {
            const itemsList = mocks.itemsList;
            const totalPrice = utils.calculateTotalPrice(itemsList);

            expect(totalPrice).to.be.equal(65100);
        });

        it("Должен вернуть корректную итоговую сумму по всем товарам, когда товаров нет", () => {
            const itemsList = [];
            const totalPrice = utils.calculateTotalPrice(itemsList);

            expect(totalPrice).to.be.equal(0);
        });
    });
});
