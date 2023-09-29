"use strict";
// união de generics = T & U
function joinObject(obj, objTwo) {
    return Object.assign({}, obj, objTwo);
}
console.log(joinObject({ keyOne: "valueOne" }, { keyTwo: "valueTwo" }));
