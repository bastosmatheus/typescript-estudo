// funciona parecido com a classe abstrata. Se a classe implementa um type, necessariamante tem que ter todos os atributos/metodos de type, porém os atributos só podem ser public.
export class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
    fullname() {
        return `${this.name} ${this.lastname}`;
    }
}
const person = new Person("Matheus", "Bastos");
console.log(person.fullname());
