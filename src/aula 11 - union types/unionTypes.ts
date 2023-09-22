// function addOrConcat(a: number | string, b: number | string): number | string {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   }

//   return `This is a concatenation: ${a}${b}`;
// }

// console.log(addOrConcat(10, 20));
// console.log(addOrConcat("10", "20"));
// console.log(addOrConcat(10, "20"));
// console.log(addOrConcat("Matheus", " é lindo"));

// function thisArrayHasFiveOfLength(array: number[]): number[] | string {
//   if (typeof array === "object" && array.length >= 5) {
//     array.push(80);
//     return array;
//   }

//   return `This array not has a five length.`;
// }

// console.log(thisArrayHasFiveOfLength([20, 30, 40, 50, 60]));
// console.log(thisArrayHasFiveOfLength([20, 30, 40, 50]));

// function isAObject(a: unknown): object | string {
//   if (typeof a !== "undefined" && a !== null && typeof a === "object") return a;

//   return `This parameter is not a object.`;
// }

// type oneObject = {
//   name: string;
// };

// const alo: oneObject = {
//   name: "Matheus",
// };

// console.log(isAObject(alo));
// console.log(isAObject(undefined));
// console.log(isAObject({ name: "Matheus", age: 19 }));
// console.log(isAObject(null));
// console.log(isAObject("string"));
