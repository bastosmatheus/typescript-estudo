"use strict";
// usando o modificador protected (deixa a propriedade visivel para a superclasse e tbm subclasses). Já que o private é apenas visivel dentro da superclasse.
class Company {
    constructor(nameCompany) {
        this.nameCompany = nameCompany;
        this.collabs = [];
    }
}
class Employee extends Company {
    getEmployee() {
        this.collabs.forEach((employee) => {
            console.log(employee);
        });
    }
    populateArrayCollabs(collab) {
        this.collabs.push(collab);
    }
    showCollabs() {
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
