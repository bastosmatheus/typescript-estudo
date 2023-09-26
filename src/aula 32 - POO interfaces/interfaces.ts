// Interfaces são iguais aos types, apenas com uma sintaxe um pouco diferente. Interfaces são mais usadas para modelar objetos. Já os types são mais usados na programação funcional.

interface User {
  name: string;
  lastname: string;
}

interface NickUser extends User {
  nickname: string;
}

export class Person implements NickUser {
  constructor(
    public name: string,
    public lastname: string,
    public nickname: string
  ) {}
}

const person = new Person("Roberto", "Morango", "Leonsio muranguinho");
console.log(person);
