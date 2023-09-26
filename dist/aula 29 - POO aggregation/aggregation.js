"use strict";
class Product {
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
class Cart {
    constructor() { }
    static createCart() {
        if (Cart.cart) {
            return `A cart already exists.`;
        }
        Cart.cart = new Cart();
        return `Cart created.`;
    }
    static quantity() {
        return this.products.length;
    }
    static total() {
        return this.products.reduce((acc, product) => acc + product.price, 0);
    }
    static pushProduct(product) {
        this.products.push(product);
    }
}
Cart.products = [];
const product = new Product("Farofinha", 20.5);
const productTwo = new Product("Camiseta", 60.0);
Cart.createCart();
Cart.pushProduct(product);
Cart.pushProduct(productTwo);
console.log(Cart.quantity());
console.log(Cart.total());
