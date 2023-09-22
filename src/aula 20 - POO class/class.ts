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
  private readonly collabs: Collab[] = [];

  constructor(
    public readonly name: string,
    private age: number
  ) {}

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getCollabs(): void {
    this.collabs.forEach((collab) => {
      console.log(collab);
    });
  }

  populateArrayCollabs(collab: Collab): void {
    this.collabs.push(collab);
  }
}

type Collab = {
  name: string;
  lastname: string;
};

const matheus = new Person("Matheus", 19);

const collabOne: Collab = {
  name: "Rosalina",
  lastname: "Rosangela",
};

const collabTwo: Collab = {
  name: "Lionel",
  lastname: "Messi",
};

matheus.populateArrayCollabs(collabOne);
matheus.getCollabs();
matheus.populateArrayCollabs(collabTwo);
matheus.getCollabs();

// const mother = new Mother("Vera", 62);
// console.log(mother.ageOfMother);
