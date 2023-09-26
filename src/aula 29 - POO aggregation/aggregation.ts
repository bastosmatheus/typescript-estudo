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
  private readonly products: Product[] = [];

  constructor() {}

  quantity(): number {
    return this.products.length;
  }

  total(): number {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }

  pushProduct(product: Product): void {
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
