"use strict";
// operador de coalescência nula (??) e encadeamento opcional (?)
const documentNewspaper = {
    title: "Baleia, baleia baleia",
    newspaper: "Jornal lombriga",
    date: new Date(),
};
// checando se existe o atributo date (?), se não existir o retorno é undefined, caindo no que está depois dos (??), se exister executa o método.
// o operador funciona quando o retorno é null ou undefined, qualquer outro valor não é considerado por (??).
console.log(documentNewspaper.date?.toDateString() ?? "Does not exist.");
console.log(undefined ?? "Does not exist.");
console.log(null ?? "Does not exist.");
console.log(true ?? "Does not exist.");
console.log(0 ?? "Does not exist.");
console.log("empty." ?? "Does not exist.");
