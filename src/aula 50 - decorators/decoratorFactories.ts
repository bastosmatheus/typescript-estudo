type Constructor = {
  new (...args: any[]): any;
};

// é uma função com o nome do decorator que permite utilizar parametros
function reverseName(param1: string, param2: string) {
  return function (target: Constructor): Constructor {
    return class extends target {
      constructor(...args: string[]) {
        super(...args);
        this.name = `${this.reverseName(args[0])} ${this.reverseName(param1)} ${this.reverseName(
          param2
        )}`;
      }

      reverseName(name: string): string {
        return name.split("").reverse().join("");
      }
    };
  };
}

function middlename(param1: string) {
  return function (target: Constructor): Constructor {
    return class extends target {
      constructor(args: string) {
        super(args);
        console.log(args + " " + param1);
      }
    };
  };
}

// é permitido utilizar mais de um decorator na classe
@middlename("Bastos")
@reverseName("Bastos", "Andrade")
class Name {
  constructor(public name: string) {}
}

const newName = new Name("Matheus");
console.log(newName);
