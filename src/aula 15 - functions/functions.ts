// type callbackFunctionFilter = (name: string) => string;

// function filteringName(array: string[], callbackFunction: callbackFunctionFilter): string[] {
//   const namesWithLengthBiggestThanFive = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > 5) {
//       namesWithLengthBiggestThanFive.push(callbackFunction(array[i]));
//     }
//   }

//   return namesWithLengthBiggestThanFive;
// }

// console.log(
//   filteringName(["Matheus", "Ivan", "Ronaldo", "Luan"], (name) => {
//     return name;
//   })
// );

// type callbackFunctionReduce = (acc: number, currentValue: number, initialValue?: number) => number;

// function calculatingArray(array: number[], callbackFunction: callbackFunctionReduce): number {
//   let acc = 0;
//   const initialValue = 5;

//   for (let i = 0; i < array.length; i++) {
//     if (i === array.length - 1) {
//       return (acc = callbackFunction(acc, array[i], initialValue));
//     }

//     acc = callbackFunction(acc, array[i]);
//   }

//   return acc;
// }

// console.log(
//   calculatingArray([1, 2, 3, 4, 5], (acc, currentValue, initialValue) => {
//     if (typeof initialValue === "undefined") {
//       return (acc += currentValue);
//     }

//     return acc + currentValue + initialValue;
//   })
// );
