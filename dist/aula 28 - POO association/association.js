// associação = mesmo que sejam relacionadas, as classes são completamentes independentes uma da outra. Escritor pode existir sem ferramentas, assim como ferramentas pode existir sem nenhum escritor.
export class Writer {
    constructor(_name) {
        this._name = _name;
        this._tool = null;
    }
    set tool(tool) {
        this._tool = tool;
    }
    write() {
        if (this._tool === null) {
            console.log("Is not possible writing, no tools for writing.");
            return;
        }
        // se tem uma ferramente, então eu quero acessar a mesma e dar o console.log dentro do método write.
        this._tool.write();
    }
}
export class Tools {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
}
export class Pen extends Tools {
    write() {
        console.log(`pen ${this.name} is writing.`);
    }
}
// class TypeWriter extends Tools {
//   write(): void {
//     console.log(`typewriter ${this.name} is typing.`);
//   }
// }
const pen = new Pen("Bic");
const writer = new Writer("Matheus");
writer.tool = pen;
writer.write();
