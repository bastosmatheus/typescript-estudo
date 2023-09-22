"use strict";
// const objectA: {
//   keyA: string;
//   keyB: number;
//   keyC: boolean;
// } = {
//   keyA: "Matheus",
//   keyB: 10,
//   keyC: true,
// };
// console.log(objectA.keyC);
// // é mais usada esse type p definir objetos. (? parametro/chave opcional. Readonly serve para impossibilitar a mudança após a definição da chave.);
// type objectKeys = {
//   readonly keyD: string;
//   keyE: number;
//   keyF?: boolean;
// };
// const objectB: objectKeys = {
//   keyD: "THIS",
//   keyE: 27,
// };
// type Address = {
//   street: string;
//   numberHome: number;
// };
// type User = {
//   readonly name: string;
//   age: number;
//   address: Address;
// };
// const user: User = {
//   name: "Matheus" as const,
//   age: 19,
//   address: {
//     street: "rua alo",
//     numberHome: 19,
//   },
// };
// // quando definido um objeto direto, sem o uso do type, não é possível usar o readonly. Portanto usei literals types (as const = não pode ser mudado depois de criado).
// const person = {
//   name: "Matheus" as const,
// };
// // com readonly não é possível alterar o nome.
// // user.name = "Lião";
// // com as const tbm não.
// // person.name = "Lião";
// console.log(user.name);
// console.log(objectB.keyD);
