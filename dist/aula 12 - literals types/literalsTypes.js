"use strict";
// // tipos literais (que sempre mantem os mesmos valores.)
// // x sempre vai ser 10, já que eu defini que essa variável é uma const, então ela n pode ser mudada.
// const x = 10;
// // no primeiro exemplo o tipo de a é 100 (menos apropriado). No segundo (mais apropriado) defino como um as const, o tipo continua como 100 e não é possivel alterar futuramente, pois "virou" uma const.
// let a: 100 = 100;
// let a = 100 as const;
// // o as const é como se fosse um readonly do type. Depois de criado, essa propriedade do objeto n pode ser mais mudada.
// const person = {
//   name: "Matheus" as const,
//   age: 19,
// };
// // nessa função está sendo definido que o parametro passado tem que ser de um desses 3 tipos.
// function chooseAColor(color: "Red" | "Green" | "Blue"): string {
//   return `The color you chose was ${color}`;
// }
// console.log(chooseAColor("Red"));
