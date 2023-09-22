class Person {
  constructor(
    public name: string,
    public middlename: string,
    private age: number,
    protected cpf: string
  ) {}

  getAge(): number {
    return this.age;
  }

  getFullname(): string {
    return `${this.name} ${this.middlename}`;
  }

  getCPF(): string {
    return this.cpf;
  }
}

class Student extends Person {}

const student = new Student("Matheus", "Bastos", 19, "05890410");
console.log(student);

const person = new Person("Matheus", "Bastos", 19, "05890410");
console.log(person);
