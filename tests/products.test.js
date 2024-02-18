"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../src/products");
describe("calcAverageProductPrice", () => {
    test("three products", () => {
        const value = (0, products_1.calcAverageProductPrice)([
            { name: "apples", price: 5 },
            { name: "oranges", price: 5 },
            { name: "mangos", price: 11 }
        ]);
        expect(value).toBe(7);
    });
    test("two products", () => {
        const value = (0, products_1.calcAverageProductPrice)([
            { name: "greens", price: 3 },
            { name: "cornbread", price: 4 }
        ]);
        expect(value).toBe(3.5);
    });
    test("one product", () => {
        const value = (0, products_1.calcAverageProductPrice)([
            { name: "desk", price: 120 }
        ]);
        expect(value).toBe(120);
    });
    test("zero products", () => {
        const value = (0, products_1.calcAverageProductPrice)([]);
        expect(value).toBe(0);
    });
});
