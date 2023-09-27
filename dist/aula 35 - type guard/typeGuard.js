// type guard é quando cria-se uma checagem para saber se aquele valor é de determinado tipo.
export class Animal {
    constructor(color) {
        this.color = color;
    }
}
const person = {
    name: "Matheus",
};
// verificando se existe a chave log no valor person.
console.log("log" in person);
const animal = new Animal("Red");
// verificando se animal é uma instancia da classe Animal.
console.log(animal instanceof Animal);
