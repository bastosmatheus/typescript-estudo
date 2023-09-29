// definindo os tipos na criação de um novo objeto.
export const vehicle = {
    nameVehicle: "i8",
    year: 2020,
    horse: 450,
    brand: "BMW",
};
console.log(vehicle);
export const person = {
    dayOfBirthday: 11,
    name: "Matheus",
    lastname: "Bastos",
};
// consigo sobreescrever os types definidos em Person
export const personTwo = {
    dayOfBirthday: new Date(),
    name: 120,
    lastname: 300,
};
console.log(person, personTwo);
