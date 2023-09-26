// classes abstratas só podem ser instanciadas a partir de uma subclasse, é como se fosse um contrato, pós assinado tem que ser cumprido (se herda de character, então tem que existir dentro do projeto).
export class Character {
    constructor(life, attack, name) {
        this.life = life;
        this.attack = attack;
        this.name = name;
    }
    goAttack(character) {
        this.shout();
        character.life -= this.attack;
        console.log(`${character.emoji} - ${character.name} receiving an attack. Now is with ${character.life} of life. ${this.name} was who attacked.`);
    }
}
export class Hero extends Character {
    constructor() {
        super(...arguments);
        this.emoji = `\u{1F9DD}`;
    }
    shout() {
        console.log(this.emoji + " While i'm here, nothing happens.");
    }
}
export class Villain extends Character {
    constructor() {
        super(...arguments);
        this.emoji = `\u{1F9DF}`;
    }
    shout() {
        console.log(this.emoji + " I will kill you!");
    }
}
const hero = new Hero(1000, 77, "dipirono");
const villain = new Villain(1000, 90, "fanto laranjo");
hero.goAttack(villain);
villain.goAttack(hero);
