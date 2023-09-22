class Writer {
  private _tool: Tools | null = null;

  constructor(private _name: string) {}

  set tool(tool: Tools) {
    this._tool = tool;
  }

  write(): void {
    if (this._tool === null) {
      console.log("Is not possible writing, no tools for writing.");
      return;
    }

    // se tem uma ferramente, então eu quero acessar a mesma e dar o console.log dentro do método write.
    this._tool.write();
  }
}

abstract class Tools {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  abstract write(): void;
}

class Pen extends Tools {
  write(): void {
    console.log(`pen ${this.name} is writing.`);
  }
}

class TypeWriter extends Tools {
  write(): void {
    console.log(`typewriter ${this.name} is typing.`);
  }
}

const pen = new Pen("Bic");
const writer = new Writer("Matheus");

writer.tool = pen;
writer.write();