"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// é uma função com o nome do decorator que permite utilizar parametros
function reverseName(param1, param2) {
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(...args);
                this.name = `${this.reverseName(args[0])} ${this.reverseName(param1)} ${this.reverseName(param2)}`;
            }
            reverseName(name) {
                return name.split("").reverse().join("");
            }
        };
    };
}
function middlename(param1) {
    return function (target) {
        return class extends target {
            constructor(args) {
                super(args);
                console.log(args + " " + param1);
            }
        };
    };
}
// é permitido utilizar mais de um decorator na classe
let Name = class Name {
    constructor(name) {
        this.name = name;
    }
};
Name = __decorate([
    middlename("Bastos"),
    reverseName("Bastos", "Andrade"),
    __metadata("design:paramtypes", [String])
], Name);
const newName = new Name("Matheus");
console.log(newName);
