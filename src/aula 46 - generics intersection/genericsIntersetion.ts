// união de generics = T & U

function joinObject<T, U>(obj: T, objTwo: U): T & U {
  return Object.assign({}, obj, objTwo);
}

console.log(joinObject({ keyOne: "valueOne" }, { keyTwo: "valueTwo" }));
