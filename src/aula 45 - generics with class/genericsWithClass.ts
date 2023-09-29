export class Stack<T> {
  private counter = 0;
  private elements: { [key: number]: T } = {};

  private checkStack(): boolean {
    return this.counter === 0;
  }

  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | undefined {
    if (this.checkStack()) return;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];

    return element;
  }

  size(): number {
    return this.counter;
  }

  showStack(): { [key: number]: T } {
    return this.elements;
  }
}

const stack = new Stack<string>();
stack.push("Matheus");
stack.push("Craque");
stack.push("Of");
stack.push("The");
stack.push("Ball");
console.log(stack.showStack());
console.log(stack.pop());
console.log(stack.size());
