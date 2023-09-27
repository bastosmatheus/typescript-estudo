// declaration merging só serve para interfaces, type não aceita a reutilização da mesma nomenclatura.

interface Person {
  readonly name: string;
}

interface Person {
  readonly lastname?: string;
}

interface Person {
  readonly age?: number;
}

const person: Person = {
  name: "Matheus",
  age: 19,
};

console.log(person);
