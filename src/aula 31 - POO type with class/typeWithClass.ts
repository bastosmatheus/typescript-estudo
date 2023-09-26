// funciona parecido com a classe abstrata. Se a classe implementa um type, necessariamante tem que ter todos os atributos/metodos de type, porém os atributos só podem ser public.

export type TypePerson = {
  name: string;
  lastname: string;
  fullname(): string;
};

export class Person implements TypePerson {
  constructor(
    public name: string,
    public lastname: string
  ) {}

  fullname(): string {
    return `${this.name} ${this.lastname}`;
  }
}

const person = new Person("Matheus", "Bastos");
console.log(person.fullname());
