"use strict";
// type VerifyAge = (person: Person, minAge: number) => boolean;
// type Person = {
//   name: string;
//   age: number;
// };
// function verifyAge(person: Person, minAge: number, callbackFunction: VerifyAge) {
//   return callbackFunction(person, minAge);
// }
// const person: Person = {
//   name: "Matheus",
//   age: 20,
// };
// const minAge: number = 20;
// console.log(
//   verifyAge({ name: "Romarinho", age: 19 }, 20, (person, minAge) => person.age <= minAge)
// );
// console.log(verifyAge(person, minAge, (person, minAge) => person.age >= minAge));
// type User = {
//   name: string;
//   password: string;
// };
// type VerifyUser = (user: User, valueReceived: User) => boolean;
// const verifyUser: VerifyUser = (user: User, valueReceived: User) => {
//   return user.name === valueReceived.name && user.password === valueReceived.password;
// };
// const user: User = {
//   name: "Matheus",
//   password: "102030",
// };
// const valueReceived: User = {
//   name: "Rogerio",
//   password: "102030",
// };
// console.log(
//   verifyUser({ name: "Matheus", password: "102030" }, { name: "Rogerio", password: "102030" })
// );
// console.log(verifyUser(user, valueReceived));
