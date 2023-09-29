export class Stack {
    constructor() {
        this.counter = 0;
        this.elements = {};
    }
    checkStack() {
        return this.counter === 0;
    }
    push(element) {
        this.elements[this.counter] = element;
        this.counter++;
    }
    pop() {
        if (this.checkStack())
            return;
        this.counter--;
        const element = this.elements[this.counter];
        delete this.elements[this.counter];
        return element;
    }
    size() {
        return this.counter;
    }
    showStack() {
        return this.elements;
    }
}
const stack = new Stack();
stack.push("Matheus");
stack.push("Craque");
stack.push("Of");
stack.push("The");
stack.push("Ball");
console.log(stack.showStack());
console.log(stack.pop());
console.log(stack.size());
