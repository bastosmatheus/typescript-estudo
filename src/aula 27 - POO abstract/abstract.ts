// classes abstratas só podem ser instanciadas a partir de uma subclasse, é como se fosse um contrato, pós assinado tem que ser cumprido (se herda de character, então tem que existir dentro do projeto).

abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected life: number,
    protected attack: number,
    protected name: string
  ) {}

  goAttack(character: Character): void {
    this.shout();
    character.life -= this.attack;
    console.log(
      `${character.emoji} - ${character.name} receiving an attack. Now is with ${character.life} of life. ${this.name} was who attacked.`
    );
  }

  // todos as subclasses TEM QUE TER esse método. métodos abstracts não tem corpo, a subclasse que extender da classe principal deve escrever a forma com que esse método vai funcionar.
  abstract shout(): void;
}

class Hero extends Character {
  protected emoji = `\u{1F9DD}`;

  shout(): void {
    console.log(this.emoji + " While i'm here, nothing happens.");
  }
}

class Villain extends Character {
  protected emoji = `\u{1F9DF}`;

  shout(): void {
    console.log(this.emoji + " I will kill you!");
  }
}

const hero = new Hero(1000, 77, "dipirono");
const villain = new Villain(1000, 90, "fanto laranjo");

hero.goAttack(villain);
villain.goAttack(hero);
