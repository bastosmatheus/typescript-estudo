// fazendo da forma mais alongada, definindo parcialmente antes e depois inferindo o valor no constructor
// class Mother {
//   private nameOfMother: string;
//   public readonly ageOfMother: number;
//   constructor(nameOfMother: string, ageOfMother: number) {
//     this.nameOfMother = nameOfMother;
//     this.ageOfMother = ageOfMother;
//   }
// }
// definindo o tipo e nome dos argumentos dentro do constructor (com esse atalho, é necessário definir o modificador (private, public, protected...))
export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.collabs = [];
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getCollabs() {
        this.collabs.forEach((collab) => {
            console.log(collab);
        });
    }
    populateArrayCollabs(collab) {
        this.collabs.push(collab);
    }
}
const matheus = new Person("Matheus", 19);
const collabOne = {
    name: "Rosalina",
    lastname: "Rosangela",
};
const collabTwo = {
    name: "Lionel",
    lastname: "Messi",
};
matheus.populateArrayCollabs(collabOne);
matheus.getCollabs();
matheus.populateArrayCollabs(collabTwo);
matheus.getCollabs();
// const mother = new Mother("Vera", 62);
// console.log(mother.ageOfMother);
