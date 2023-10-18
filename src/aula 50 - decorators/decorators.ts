// function decorator<T extends new (...args: any[]) => any>(target: T) {
//   return class extends target {
//     public name: string;
//     public color: string;

//     constructor(...args: any[]) {
//       super(...args);
//       (this.name = args[0]), (this.color = args[1]);
//     }
//   };
// }

// @decorator
// class Animal {
//   constructor(
//     public name: string,
//     public color: string
//   ) {}
// }

// const animal = new Animal("Gohan", "Branco");
// console.log(animal);

// function reverse<T extends new (...args: any[]) => any>(target: T) {
//   return class extends target {
//     constructor(...args: any[]) {
//       super(...args);
//       this.name = this.methodReverse(args[0]);
//     }

//     methodReverse(item: string): string {
//       return item.split("").reverse().join("");
//     }
//   };
// }

// @reverse
// class Name {
//   constructor(public name: string) {}
// }

// const newName = new Name("Matheus");
