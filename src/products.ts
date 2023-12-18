export interface Product {
    name: string,
    price: number
}
const products: Product[] = [
    { name: "pants", price: 79.99 },
    { name: "kitkat", price: 1.99 },
    { name: "watch", price: 250}
]
export function calcAverageProductPrice(products: Product[]): number {
    if (products.length === 0) {
        return 0;
    }
    let total = products.reduce((sum, product) => sum + product.price, 0);
    return total / products.length;
}
const averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);