"use strict";
// getters (basicamente, da acesso a uma propriedade dentro de uma classe já instanciada. Mesmo que use private, com o get da p acessar.)
// existem dois tipos de declaração das funções get e set.
class Game {
    constructor(nameOfGame, yearLaunch, _gameCategory) {
        this.nameOfGame = nameOfGame;
        this.yearLaunch = yearLaunch;
        this._gameCategory = _gameCategory;
    }
    getGameCategory() {
        return this._gameCategory;
    }
    get gameCategory() {
        return this._gameCategory;
    }
    setGameCategory(newGameCategory) {
        this._gameCategory = newGameCategory;
    }
    set gameCategory(newGameCategory) {
        this._gameCategory = newGameCategory;
    }
}
const game = new Game("Valorant", 2020, "FPS");
console.log(game.gameCategory);
game.gameCategory = "New category";
game.setGameCategory("First Person Shooter");
console.log(game.getGameCategory());
