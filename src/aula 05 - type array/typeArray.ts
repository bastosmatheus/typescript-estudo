// function concatStrings(...args: string[]): string {
//   return args.join(" e ");
// }

// function sumMultiplesValues(...args: Array<number>): number {
//   const arrayNumbers = args.reduce((acc, currentValue) => acc + currentValue, 0);

//   return arrayNumbers;
// }

// function compareStrings(array: string[]): string | undefined {
//   const arrayExists: string[] = [];

//   return array.find((element, index) => {
//     if (arrayExists.includes(element)) {
//       console.log(`${element} already exists. On index ${index}`);
//       return;
//     }

//     arrayExists.push(element);
//   });
// }

// // readonly = apenas leitura, não da p modificar o array depois de definido.
// const array: readonly string[] = ["Matheus", "Roberto"];
// console.log(array);

// const resultArrayOfStrings = concatStrings("Matheus", "Lucas");
// console.log(resultArrayOfStrings);

// const resultValues = sumMultiplesValues(1, 2);
// console.log(resultValues);

// const compare = compareStrings(["Matheus", "Rogério", "Allan", "Allan"]);
// console.log(compare);
