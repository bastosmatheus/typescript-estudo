export type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...args: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]): number => {
  if (args.length > 0) return args.reduce((acc, valueInitial) => acc + valueInitial, 0);
  return x + (y || 0);
};

console.log(adder(10));
console.log(adder(10, 5));
