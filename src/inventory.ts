import { Product } from '../src/products';

export interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];

export function calcInventoryValue(items: InventoryItem[]): number {
    if (items.length === 0) {
        return 0;
    }
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}


const totalInventoryValue = calcInventoryValue(inventory);
console.log(totalInventoryValue); 