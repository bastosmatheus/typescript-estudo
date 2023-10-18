function enumerable() {
  return function (
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor | void {
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
  };
}

export class Person {
  constructor(
    private name: string,
    private age: number,
    private gender: string
  ) {}

  @enumerable()
  message(msg: string): string {
    return msg;
  }
}
