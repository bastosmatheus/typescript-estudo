const adder = (x, y, ...args) => {
    if (args.length > 0)
        return args.reduce((acc, valueInitial) => acc + valueInitial, 0);
    return x + (y || 0);
};
console.log(adder(10));
console.log(adder(10, 5));
export {};
