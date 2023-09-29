// type predicate, quando um valor for true ele é um number.
export function isNumber(value) {
    return typeof value === "number";
}
export function reduce(...args) {
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
