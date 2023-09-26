export class Product {
    constructor(_name, _price) {
        this._name = _name;
        this._price = _price;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
}
export class Cart {
    constructor() {
        this.products = [];
    }
    quantity() {
        return this.products.length;
    }
    total() {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }
    pushProduct(product) {
        this.products.push(product);
    }
}
const cart = new Cart();
const product = new Product("Farofinha", 9.9);
const productTwo = new Product("Camiseta", 89.9);
cart.pushProduct(product);
cart.pushProduct(productTwo);
console.log(cart.quantity());
console.log(cart.total());
