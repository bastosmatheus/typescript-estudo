// composição = uma classe não irá existir sem a outra, nesse exemplo, o motor não existirá sem a classe carro. Basicamente o motor depende da instancia de carro para existir.

export class Car {
  private readonly motor = new Motor();

  starting(): void {
    this.motor.starting();
  }

  turnOff(): void {
    this.motor.turnOff();
  }

  stopping(): void {
    this.motor.stopping();
  }
}

export class Motor {
  starting(): void {
    console.log("motor is starting...");
  }

  turnOff(): void {
    console.log("motor is turning off...");
  }

  stopping(): void {
    console.log("motor is stopping...");
  }
}

const car = new Car();
car.starting();
