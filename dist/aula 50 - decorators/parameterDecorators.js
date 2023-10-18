var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function required(target, methodName, parameterIndex) {
    console.log(target);
    console.log(methodName);
    console.log(parameterIndex);
}
export class Game {
    constructor(nameOfGame, category, yearLaunched) {
        this.nameOfGame = nameOfGame;
        this.category = category;
        this.yearLaunched = yearLaunched;
    }
    isFPS(param0, param1, param2, nameOfGame) {
        nameOfGame.toUpperCase();
        return nameOfGame === "FPS";
    }
}
__decorate([
    __param(1, required),
    __param(3, required),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Boolean)
], Game.prototype, "isFPS", null);
