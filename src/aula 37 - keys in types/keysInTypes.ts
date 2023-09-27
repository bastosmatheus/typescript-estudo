// utilizando type Person como base para type Animal, ambos tem um atributo name e Animal está pegando o tipo através da chave de Person.

export type Person = {
  name: string;
};

export type Animal = {
  name: Person["name"];
};

const animal: Animal = {
  name: "Robertinho",
};

console.log(animal);
