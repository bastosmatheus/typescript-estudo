// composição = uma classe não irá existir sem a outra, nesse exemplo, o motor não existirá sem a classe carro. Basicamente o motor depende da instancia de carro para existir.
export class Car {
    constructor() {
        this.motor = new Motor();
    }
    starting() {
        this.motor.starting();
    }
    turnOff() {
        this.motor.turnOff();
    }
    stopping() {
        this.motor.stopping();
    }
}
export class Motor {
    starting() {
        console.log("motor is starting...");
    }
    turnOff() {
        console.log("motor is turning off...");
    }
    stopping() {
        console.log("motor is stopping...");
    }
}
const car = new Car();
car.starting();
