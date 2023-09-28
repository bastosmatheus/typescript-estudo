export class Calculator {
  constructor(private number: number) {}

  sum(n: number): this {
    this.number += n;
    return this;
  }

  subtraction(n: number): this {
    this.number -= n;
    return this;
  }

  division(n: number): this {
    this.number /= n;
    return this;
  }

  multiplication(n: number): this {
    this.number *= n;
    return this;
  }
}

const calculator = new Calculator(10);

// o métodos de Calculator fazem as operações e retornam quem chamou o método (nesse caso o calculator, que é a instancia da classe Calculator), então da p encadear vários métodos.
calculator.sum(5).division(2);
console.log(calculator);

// padrão de projeto da GoF - Builder / define valor dos atributos depois da criação.
export class Request {
  private method: "get" | "post" | null = null;
  private url: string | null = null;

  setMethod(method: "get" | "post"): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    if (this.url === null || this.method === null) return;
    console.log(`The URL is ${this.url} and the method selected was ${this.method}.`);
  }
}

const request = new Request();

// encadeando métodos aqui tbm, pois estou retornando o this nos métodos.
request.setUrl("https://www.google.com").setMethod("post").send();
