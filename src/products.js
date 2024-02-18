"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcAverageProductPrice = void 0;
const products = [
    { name: "pants", price: 79.99 },
    { name: "kitkat", price: 1.99 },
    { name: "watch", price: 250 }
];
function calcAverageProductPrice(products) {
    if (products.length === 0) {
        return 0;
    }
    let total = products.reduce((sum, product) => sum + product.price, 0);
    return total / products.length;
}
exports.calcAverageProductPrice = calcAverageProductPrice;
const averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
