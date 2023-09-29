export interface Vehicle<T, U> {
  readonly nameVehicle: T;
  readonly year: U;
  readonly horse: U;
  readonly brand: T;
}

// definindo os tipos na criação de um novo objeto.
export const vehicle: Vehicle<string, number> = {
  nameVehicle: "i8",
  year: 2020,
  horse: 450,
  brand: "BMW",
};

console.log(vehicle);

// definindo os tipos dentro do próprio type
export type Person<T = number, U = string> = {
  dayOfBirthday: T;
  name: U;
  lastname: U;
};

export const person: Person = {
  dayOfBirthday: 11,
  name: "Matheus",
  lastname: "Bastos",
};

// consigo sobreescrever os types definidos em Person
export const personTwo: Person<Date, number> = {
  dayOfBirthday: new Date(),
  name: 120,
  lastname: 300,
};

console.log(person, personTwo);
