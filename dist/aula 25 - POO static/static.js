// static (métodos/atributos que podem ser acessados sem precisar instanciar a classe.)
export class Company {
    constructor(nameOrganization, branch) {
        this.nameOrganization = nameOrganization;
        this.branch = branch;
    }
    static createCompany(name) {
        return new Company(name, Company.branchDefault);
    }
    static viewProperties() {
        console.log(`${this.name}`);
    }
}
Company.branchDefault = "Industrial";
// const company = Company.createCompany("L&M Industrias");
// console.log(company);
// const companyTwo = new Company("Matheus borracharia", "borracharia");
// console.log(companyTwo);
Company.viewProperties();
