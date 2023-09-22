// usando o modificador protected (deixa a propriedade visivel para a superclasse e tbm subclasses). Já que o private é apenas visivel dentro da superclasse.

type Collab = {
  name: string;
  lastname: string;
  age: number;
};

class Company {
  protected collabs: Collab[] = [];
  constructor(private readonly nameCompany: string) {}
}

class Employee extends Company {
  getEmployee(): void {
    this.collabs.forEach((employee) => {
      console.log(employee);
    });
  }

  populateArrayCollabs(collab: Collab): void {
    this.collabs.push(collab);
  }

  showCollabs(): Collab[] {
    return this.collabs;
  }
}

const company = new Employee("Amazon");

company.populateArrayCollabs({
  name: "Matheus",
  lastname: "Bastos",
  age: 19,
});

company.populateArrayCollabs({
  name: "Roselino",
  lastname: "José",
  age: 50,
});
company.getEmployee();
console.log(company.showCollabs());
