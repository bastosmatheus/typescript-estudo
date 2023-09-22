// static (métodos/atributos que podem ser acessados sem precisar instanciar a classe.)

export class Company {
  static branchDefault = "Industrial";

  constructor(
    private nameOrganization: string,
    private branch: string
  ) {}

  static createCompany(name: string): Company {
    return new Company(name, Company.branchDefault);
  }

  static viewProperties(): void {
    console.log(`${this.name}`);
  }
}

// const company = Company.createCompany("L&M Industrias");
// console.log(company);

// const companyTwo = new Company("Matheus borracharia", "borracharia");
// console.log(companyTwo);

Company.viewProperties();
