// agregação = é um tipo de associação, indicando que uma classe tem relação com alguma outra, não dependendo dessa classe p existir. Pode existir carrinho sem produto, assim como produto existe sem carrinho.

export class Product {
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

export class Cart {
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
