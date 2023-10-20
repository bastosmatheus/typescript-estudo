/// para criar um método que não tem dentro de uma lib, é necessário criar um arquivo com <nomeArquivo>.d.ts, em seguida, ver qual o namespace utilizado no import e por fim dar um declare nesse namespace, passando qual método novo você quer.

// não está funcionando, n sei o pq??? até o exemplo do instrutor eu coloquei e mesmo assim, deu ruim.
import validator from "./module";

const array = [100, 200, 300, 400];

// console.log(validator.mul("matheus"));
