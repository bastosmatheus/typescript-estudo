class Motor {
  constructor(private horse: number) {}
}

// classe carro herdando de motor propriedade horse (não é necessário colocar nenhum modificador no constructor). Sobrescrevi o constructor e chamei o método super para atender as necessidades do constructor da classe principal
class Car extends Motor {
  constructor(
    horse: number,
    private model: string,
    private year: number
  ) {
    super(horse);
  }
}

const i8 = new Car(220, "BMW i8", 2020);
console.log(i8);
