"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcInventoryValue = void 0;
const inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(items) {
    if (items.length === 0) {
        return 0;
    }
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}
exports.calcInventoryValue = calcInventoryValue;
const totalInventoryValue = calcInventoryValue(inventory);
console.log(totalInventoryValue);
