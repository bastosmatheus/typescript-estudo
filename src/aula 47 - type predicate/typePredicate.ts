// type predicate, quando um valor for true ele é um number.
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function reduce<T>(...args: T[]): number {
  const returnArgs = args.reduce((acc, value) => {
    if (isNumber(acc) && isNumber(value)) {
      return acc + value;
    }
    return acc;
  }, 0);

  return returnArgs;
}

console.log(reduce(...[1, 20, 20]));
console.log(reduce(1, 50, 32));
console.log(reduce("10", "20"));
