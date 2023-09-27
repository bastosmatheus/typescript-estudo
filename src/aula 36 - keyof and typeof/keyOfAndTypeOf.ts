// type Colors = {
//   red: string;
//   green: string;
//   blue: string;
//   brown: string;
// };

const colors = {
  red: "vermelho",
  green: "verde",
  blue: "azul",
  brown: "marrom",
  orange: "laranja",
};

// type Colors é um objeto do valor colors, o que significa que toda mudança feita no valor colors, irá mudar tbm no type.
type Colors = typeof colors;

// type KeyColors reune todas as chaves do type Colors.
type KeyColors = keyof Colors;

export function translateColor(color: KeyColors, colorObj: Colors): string {
  return colorObj[color];
}

console.log(translateColor("red", colors));
