export class Person {
    constructor(name, middlename, age, cpf) {
        this.name = name;
        this.middlename = middlename;
        this.age = age;
        this.cpf = cpf;
    }
    getAge() {
        return this.age;
    }
    getFullname() {
        return `${this.name} ${this.middlename}`;
    }
    getCPF() {
        return this.cpf;
    }
}
export class Student extends Person {
}
const student = new Student("Matheus", "Bastos", 19, "05890410");
console.log(student);
const person = new Person("Matheus", "Bastos", 19, "05890410");
console.log(person);
