class Product {
  constructor(
    private _name: string,
    private _price: number
  ) {}

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }
}

class Cart {
  private static cart: Cart;
  private static readonly products: Product[] = [];

  private constructor() {}

  static createCart(): Cart | string {
    if (Cart.cart) {
      return `A cart already exists.`;
    }

    Cart.cart = new Cart();
    return `Cart created.`;
  }

  static quantity(): number {
    return this.products.length;
  }

  static total(): number {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }

  static pushProduct(product: Product): void {
    this.products.push(product);
  }
}

const product = new Product("Farofinha", 20.5);
const productTwo = new Product("Camiseta", 60.0);

Cart.createCart();
Cart.pushProduct(product);
Cart.pushProduct(productTwo);

console.log(Cart.quantity());
console.log(Cart.total());
