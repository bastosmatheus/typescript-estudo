// fazendo a mesma coisa, mas agora restringindo o generics para validar apenas objetos.
export function getKeys(object, key) {
    return object[key];
}
const animal = {
    color: "black",
    kg: 10,
};
export const getKeysAnimal = (object, key) => object[key];
console.log(getKeysAnimal(animal, "kg"));
console.log(getKeys(animal, "color"));
