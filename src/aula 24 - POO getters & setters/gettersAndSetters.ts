// getters (basicamente, da acesso a uma propriedade dentro de uma classe já instanciada. Mesmo que use private, com o get da p acessar.)
// existem dois tipos de declaração das funções get e set.

class Game {
  constructor(
    private nameOfGame: string,
    private yearLaunch: number,
    private _gameCategory: string
  ) {}

  getGameCategory(): string {
    return this._gameCategory;
  }

  get gameCategory(): string {
    return this._gameCategory;
  }

  setGameCategory(newGameCategory: string): void {
    this._gameCategory = newGameCategory;
  }

  set gameCategory(newGameCategory: string) {
    this._gameCategory = newGameCategory;
  }
}

const game = new Game("Valorant", 2020, "FPS");
console.log(game.gameCategory);
game.gameCategory = "New category";
game.setGameCategory("First Person Shooter");
console.log(game.getGameCategory());
