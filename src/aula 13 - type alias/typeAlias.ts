// // o type alias é meio que um apelido, famoso açucar sintático. Deixa o código mais bonitinho e funcional tbm.

// type IsString = string;

// type ColorsRGB = "Red" | "Green" | "Blue";
// type ColorsNeutrals = "Black" | "White" | "Gray";

// // fazendo a junção de dois types com o union types.
// type Colors = ColorsRGB | ColorsNeutrals;

// function chooseAColor(color: Colors): IsString {
//   return `The color you chose was ${color}`;
// }

// console.log(chooseAColor("White"));

// type Person = {
//   readonly name: string;
//   readonly age: number;
//   salary: number;
//   favoriteColor: Colors;
// };

// const matheus: Person = {
//   name: "mT calvo",
//   age: 19,
//   salary: 200_000,
//   favoriteColor: "White",
// };

// function objectPerson(person: Person | IsString): Person | IsString {
//   return person;
// }

// console.log(objectPerson(matheus));
// console.log(objectPerson("Matheus is beautiful."));
