function required(target: any, methodName: string | symbol, parameterIndex: number): any {
  console.log(target);
  console.log(methodName);
  console.log(parameterIndex);
}

export class Game {
  constructor(
    private nameOfGame: string,
    private category: string,
    private yearLaunched: number
  ) {}

  isFPS(
    param0: string,
    @required param1: string,
    param2: string,
    @required nameOfGame: string
  ): boolean {
    nameOfGame.toUpperCase();
    return nameOfGame === "FPS";
  }
}
