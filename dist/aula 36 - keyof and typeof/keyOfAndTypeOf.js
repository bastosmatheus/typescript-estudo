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
export function translateColor(color, colorObj) {
    return colorObj[color];
}
console.log(translateColor("red", colors));
