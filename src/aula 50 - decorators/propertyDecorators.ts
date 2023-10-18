function nameProperty(classPrototype: any, propertyName: string | symbol) {
  console.log(classPrototype);
  console.log(propertyName);
}

export class PC {
  @nameProperty
  private processator: string;
  private clocks: number;
  private threads: number;

  constructor(processator: string, clocks: number, threads: number) {
    this.processator = processator;
    this.clocks = clocks;
    this.threads = threads;
  }
}
