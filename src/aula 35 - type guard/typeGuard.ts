// type guard é quando cria-se uma checagem para saber se aquele valor é de determinado tipo.

export class Animal {
  constructor(public color: string) {}
}

export type Person = {
  name: string;
};

const person: Person = {
  name: "Matheus",
};
// verificando se existe a chave log no valor person.
console.log("log" in person);

const animal = new Animal("Red");
// verificando se animal é uma instancia da classe Animal.
console.log(animal instanceof Animal);
