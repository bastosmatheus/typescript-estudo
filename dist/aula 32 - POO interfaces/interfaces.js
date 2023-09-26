// Interfaces são iguais aos types, apenas com uma sintaxe um pouco diferente. Interfaces são mais usadas para modelar objetos. Já os types são mais usados na programação funcional.
export class Person {
    constructor(name, lastname, nickname) {
        this.name = name;
        this.lastname = lastname;
        this.nickname = nickname;
    }
}
const person = new Person("Roberto", "Morango", "Leonsio muranguinho");
console.log(person);
