// extends neste contexto, representa uma restrição, lê-se como (... é no maximo);
// aqui nesse exemplo eu estou restringindo o K, então ele sempre vai ser uma chave de O. Como está depois do =, o TS infere os tipos de O e K na chamada da função.
export type callbackFnObject = <O, K extends keyof O>(object: O, key: K) => O[K];

// fazendo a mesma coisa, mas agora restringindo o generics para validar apenas objetos.
export function getKeys<ObjType extends Record<string, unknown>>(
  object: ObjType,
  key: keyof ObjType
) {
  return object[key];
}

const animal = {
  color: "black",
  kg: 10,
};

export const getKeysAnimal: callbackFnObject = (object, key) => object[key];
console.log(getKeysAnimal(animal, "kg"));
console.log(getKeys(animal, "color"));
