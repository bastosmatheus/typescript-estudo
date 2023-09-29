const record: Record<string, string> = {
  0: "lorena",
  lorena: "roberto",
};

console.log(record);

export type Car = {
  brand?: string;
  year?: number;
  car: string;
};

/* eslint-disable */

// Required - transforma todo type em required.
type CarRequired = Required<Car>;

// Partial - transforma tudo em opcional.
type CarPartial = Partial<Car>;

// Pick - pega apenas os atributos passados como parametro.
type CarPick = Pick<Car, "car" | "brand">;

// Omit - omite os atributos passados como parametro.
type CarOmit = Omit<Car, "brand" | "year">;

// Readonly - transforma todos atributos em readonly.
type CarReadonly = Readonly<Car>;

// ReturnType - pega o tipo de retorno de uma função.
type CarReturnTypeString = ReturnType<() => string>;
type CarReturnTypeVoid = ReturnType<() => void>;

type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";

// Exclude - pega apenas os elementos que não estiverem nos dois conjuntos. Exclude<ABC, CDE>, C é excluido, pois está nos dois conjuntos.
type TypeExclude = Exclude<ABC, CDE>;

// Extract - pega apenas o elemento que estiver presente nos dois conjuntos. Extract<ABC, CDE>, C é incluido, pois está nos dois conjuntos.
type TypeExtract = Extract<ABC, CDE>;
