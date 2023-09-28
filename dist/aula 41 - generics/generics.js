"use strict";
// esse T é um generics, quando chamada a função myFilter faz uma verificação para saber qual é o type do array, dai armazena dentro do <T> e eu posso usar ele posteriormente, funciona parecido com um parametro de função.
function myFilter(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackfn(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const arrayNumbers = ["Vera", "Matheus", "Robertinho", "Ronaldo"];
console.log(myFilter(arrayNumbers, (value) => value === "Matheus" || value === "Vera"));
